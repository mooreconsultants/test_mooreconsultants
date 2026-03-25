import { NextResponse } from "next/server"
import { Resend } from "resend"
import { readFileSync } from "fs"
import { join } from "path"

const FROM_ADDRESS = "Moore Consultants <gmoore@updates.mooreconsultants.com.au>"
const GUY_EMAIL = "gmoore@mooreconsultants.com.au"


function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;")
}

function buildChecklistEmail(name: string): string {
  return `
  <div style="margin:0;padding:0;background:#f8fafc;font-family:Arial,Helvetica,sans-serif;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="padding:30px 12px;">
      <tr>
        <td align="center">
          <table role="presentation" width="620" cellspacing="0" cellpadding="0" style="max-width:620px;background:#ffffff;border:1px solid #e2e8f0;">

            <!-- Header -->
            <tr>
              <td style="padding:28px 32px;background:#0f172a;">
                <p style="margin:0 0 10px;color:#94a3b8;font-size:11px;letter-spacing:3px;text-transform:uppercase;">Moore Consultants</p>
                <h1 style="margin:0;color:#ffffff;font-size:24px;line-height:1.3;font-weight:600;">Your No-Go Checklist is attached.</h1>
              </td>
            </tr>

            <!-- Body -->
            <tr>
              <td style="padding:28px 32px;">
                <p style="margin:0 0 16px;color:#1e293b;font-size:16px;line-height:1.6;">
                  Hi ${escapeHtml(name)},
                </p>
                <p style="margin:0 0 16px;color:#334155;font-size:15px;line-height:1.7;">
                  Thanks for downloading the 10-Point No-Go Checklist. You'll find it attached to this email — run through all 10 checks before you make an offer on any site.
                </p>
                <p style="margin:0 0 24px;color:#334155;font-size:15px;line-height:1.7;">
                  If you've got a site you're looking at, or any questions at all, just reply to this email and I'll get back to you.
                </p>
                <p style="margin:0;color:#0f172a;font-size:15px;font-weight:600;">Guy Moore</p>
                <p style="margin:4px 0 0;color:#64748b;font-size:13px;">Founder, Moore Consultants</p>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="padding:18px 32px;background:#f8fafc;border-top:1px solid #e2e8f0;color:#64748b;font-size:12px;">
                Moore Consultants · Adelaide, South Australia · mooreconsultants.com.au
              </td>
            </tr>

          </table>
        </td>
      </tr>
    </table>
  </div>
  `
}

// Simple rate limiter
const rateLimitMap = new Map<string, { count: number; resetAt: number }>()
function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const entry = rateLimitMap.get(ip)
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + 10 * 60 * 1000 })
    return true
  }
  if (entry.count >= 5) return false
  entry.count++
  return true
}

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown"
  if (!checkRateLimit(ip)) {
    return NextResponse.json({ error: "Too many requests. Please try again later." }, { status: 429 })
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    return NextResponse.json({ error: "Email service not configured." }, { status: 500 })
  }

  let name: string
  let email: string
  try {
    const body = (await request.json()) as { name?: unknown; email?: unknown }
    name = typeof body.name === "string" ? body.name.trim() : ""
    email = typeof body.email === "string" ? body.email.trim().toLowerCase() : ""
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 })
  }

  if (!name || !email || !email.includes("@")) {
    return NextResponse.json({ error: "Please provide a valid name and email." }, { status: 400 })
  }

  const resend = new Resend(apiKey)

  // Load PDF attachment
  let attachments: { filename: string; content: Buffer }[] = []
  try {
    const pdfPath = join(process.cwd(), "public", "no-go-checklist.pdf")
    const pdfBuffer = readFileSync(pdfPath)
    attachments = [{ filename: "Moore-Consultants-No-Go-Checklist.pdf", content: pdfBuffer }]
  } catch {
    // PDF not found — send email without attachment
  }

  // Send checklist to user
  await resend.emails.send({
    from: FROM_ADDRESS,
    to: email,
    replyTo: GUY_EMAIL,
    subject: "Your 10-Point No-Go Checklist — Moore Consultants",
    html: buildChecklistEmail(name),
    attachments,
  })

  // Admin notification
  resend.emails.send({
    from: FROM_ADDRESS,
    to: GUY_EMAIL,
    replyTo: email,
    subject: `[Checklist Download] ${name} — ${email}`,
    html: `<p style="font-family:Arial,sans-serif;font-size:14px;color:#0f172a;">
      <strong>${escapeHtml(name)}</strong> (${escapeHtml(email)}) just downloaded the No-Go Checklist from mooreconsultants.com.au.
    </p>`,
  }).catch(() => {})

  // HubSpot (fire-and-forget)
  const hsPortalId = process.env.HUBSPOT_PORTAL_ID
  const hsFormGuid = process.env.HUBSPOT_FORM_GUID
  if (hsPortalId && hsFormGuid) {
    fetch(`https://api.hsforms.com/submissions/v3/integration/submit/${hsPortalId}/${hsFormGuid}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fields: [
          { name: "firstname", value: name.split(" ")[0] },
          { name: "lastname", value: name.split(" ").slice(1).join(" ") || "" },
          { name: "email", value: email },
        ],
        context: {
          pageUri: "mooreconsultants.com.au",
          pageName: "No-Go Checklist Download",
        },
      }),
    }).catch(() => {})
  }

  return NextResponse.json({ ok: true })
}
