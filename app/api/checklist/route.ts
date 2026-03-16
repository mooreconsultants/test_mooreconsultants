import { NextResponse } from "next/server"
import { Resend } from "resend"
import { readFileSync } from "fs"
import { join } from "path"

const FROM_ADDRESS = "Moore Consultants <gmoore@updates.mooreconsultants.com.au>"
const GUY_EMAIL = "gmoore@mooreconsultants.com.au"

const CHECKLIST_ITEMS = [
  {
    num: "01",
    title: "Does the zoning permit what you want to build?",
    detail:
      "Open the SA Planning Portal and check the zone and every overlay. A Character Overlay is a near-automatic no-go — even when development is permitted, the design requirements it imposes will almost always make the project unviable.",
  },
  {
    num: "02",
    title: "Are there protected trees on or near the frontage?",
    detail:
      "SA tree legislation has tightened significantly. Council verge trees are protected — you cannot remove them and cannot position a crossover too close to them. If a tree sits where your crossover needs to go, parking compliance becomes impossible.",
  },
  {
    num: "03",
    title: "Can you get a crossover in at the right position?",
    detail:
      "Scan every metre of the frontage on Google Street View. SA Water pits, electricity plinths, power poles, bus stops, road islands, and median strips can all block a crossover. You need a legal crossover position for each dwelling's parking.",
  },
  {
    num: "04",
    title: "What type of road is it?",
    detail:
      "A quiet residential street is ideal. A semi-main road introduces noise, traffic, and buyer hesitation that will discount your end value. A main road — avoid it entirely. The lifestyle discount is structural and won't go away.",
  },
  {
    num: "05",
    title: "Are there easements that will kill the design?",
    detail:
      "Ask the agent for the title — they'll provide it for free. It shows SA Water, electricity, gas, and stormwater easements. An easement through the building envelope ends the project. Do this before you offer, not after.",
  },
  {
    num: "06",
    title: "Does the lot meet the minimum allotment size?",
    detail:
      "Check the Planning and Design Code for the minimum for your development type and zone. Council may allow up to approximately 5% below the minimum, but only if everything else in your application is perfect.",
  },
  {
    num: "07",
    title: "Does the frontage meet the minimum?",
    detail:
      "General Neighbourhood minimums: 9m for a 2-site development, 7m for a 3-site row. Confirm on the title — SA titles are often in imperial, so convert to metric.",
  },
  {
    num: "08",
    title: "Has someone already tried to develop this and failed?",
    detail:
      "Ask the agent why the vendor is selling. Estate sales and financial pressure are fine. A vendor who applied for development approval and was refused is a red flag — find out why. It may be fixable, or it may be permanent.",
  },
  {
    num: "09",
    title: "How does the site slope?",
    detail:
      "Every metre of fall adds $8,000–$15,000 in earthworks. Drive past — you'll see it immediately. A site draining away from the street with no outlet may need a pump system.",
  },
  {
    num: "10",
    title: "What's on the site, and is demolition clean?",
    detail:
      "Pre-1990 buildings in Adelaide almost certainly contain asbestos — add $8,000–$25,000 to demolition. Check Street View for granny flats, separate meters, or structures that may need council approval to remove.",
  },
]

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;")
}

function buildChecklistEmail(name: string): string {
  const checklistRows = CHECKLIST_ITEMS.map(
    (item) => `
    <tr>
      <td style="padding:20px 0;border-bottom:1px solid #e2e8f0;vertical-align:top;">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
          <tr>
            <td style="width:40px;vertical-align:top;padding-top:2px;">
              <span style="font-size:22px;font-weight:900;color:#e2e8f0;font-family:Georgia,serif;line-height:1;">${item.num}</span>
            </td>
            <td style="vertical-align:top;padding-left:8px;">
              <p style="margin:0 0 6px;font-size:15px;font-weight:700;color:#0f172a;line-height:1.35;">${escapeHtml(item.title)}</p>
              <p style="margin:0;font-size:13px;color:#475569;line-height:1.7;font-weight:400;">${escapeHtml(item.detail)}</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  `,
  ).join("")

  return `
  <div style="margin:0;padding:0;background:#f1f5f9;font-family:Arial,Helvetica,sans-serif;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="padding:30px 12px;">
      <tr>
        <td align="center">
          <table role="presentation" width="640" cellspacing="0" cellpadding="0" style="max-width:640px;background:#ffffff;border:1px solid #e2e8f0;">

            <!-- Header -->
            <tr>
              <td style="padding:32px 36px 28px;background:#0f172a;">
                <p style="margin:0 0 14px;color:#94a3b8;font-size:11px;letter-spacing:3px;text-transform:uppercase;">Moore Consultants · Developer's Field Guide</p>
                <h1 style="margin:0 0 10px;color:#ffffff;font-size:26px;line-height:1.2;font-weight:700;font-family:Georgia,serif;">The 10-Point "No-Go" Checklist</h1>
                <p style="margin:0;color:#94a3b8;font-size:13px;line-height:1.6;">Hi ${escapeHtml(name)}, here's your checklist. Run through all 10 before you call the agent.</p>
              </td>
            </tr>

            <!-- Intro -->
            <tr>
              <td style="padding:22px 36px 10px;border-bottom:1px solid #e2e8f0;">
                <p style="margin:0;font-size:13px;color:#475569;line-height:1.7;">
                  Ten checks before you make an offer. All of them are potential <strong style="color:#0f172a;">deal killers</strong> — not margin adjustments. If you hit one, stop and investigate before going further.
                </p>
              </td>
            </tr>

            <!-- Checklist -->
            <tr>
              <td style="padding:4px 36px 8px;">
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                  ${checklistRows}
                </table>
              </td>
            </tr>

            <!-- Quote -->
            <tr>
              <td style="padding:24px 36px;background:#f8fafc;border-top:3px solid #0ea5e9;border-bottom:1px solid #e2e8f0;">
                <p style="margin:0 0 12px;font-size:14px;font-style:italic;color:#0f172a;line-height:1.7;font-family:Georgia,serif;">
                  "This checklist covers the site assessment. The hardest part isn't finding a site or running the numbers — it's closing. Knowing how to secure a site when you're confident it works. If you've got a site you're looking at and you're not sure how to move on it, call me."
                </p>
                <p style="margin:0;font-size:11px;color:#0ea5e9;font-weight:700;letter-spacing:1px;text-transform:uppercase;">Guy Moore</p>
                <p style="margin:2px 0 0;font-size:11px;color:#94a3b8;">Founder, Moore Consultants · $23M+ Completed Adelaide Coastal Projects</p>
              </td>
            </tr>

            <!-- CTA Footer -->
            <tr>
              <td style="padding:28px 36px;background:#0f172a;">
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                  <tr>
                    <td style="vertical-align:middle;padding-right:20px;">
                      <p style="margin:0 0 4px;font-size:16px;font-weight:700;color:#ffffff;font-family:Georgia,serif;">Got a site you're looking at?</p>
                      <p style="margin:0;font-size:12px;color:#94a3b8;line-height:1.5;">Bring it to a free 30-minute consultation. Guy will tell you whether it's worth pursuing.</p>
                    </td>
                    <td style="vertical-align:middle;white-space:nowrap;">
                      <a href="https://mooreconsultants.com.au/#contact" style="display:inline-block;background:#0ea5e9;color:#0f172a;font-size:10px;font-weight:700;letter-spacing:2px;text-transform:uppercase;padding:13px 22px;text-decoration:none;">
                        Book Free Consultation
                      </a>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="padding:16px 36px;background:#0f172a;border-top:1px solid rgba(255,255,255,0.08);">
                <p style="margin:0;font-size:11px;color:#475569;">mooreconsultants.com.au · gmoore@mooreconsultants.com.au</p>
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
