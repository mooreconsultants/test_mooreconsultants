import { NextResponse } from "next/server"
import nodemailer from "nodemailer"
import type { ContactSubmissionPayload } from "@/lib/contact-submit"

const ADMIN_RECIPIENTS = ["gmoore@mooreconsultants.com.au", "alex@3pdigital.com.au"]

function getSmtpTransporter() {
  const host = process.env.SMTP_HOST
  const portValue = process.env.SMTP_PORT
  const user = process.env.SMTP_USER
  const pass = process.env.SMTP_PASS

  if (!host) throw new Error("SMTP_HOST is not set")
  if (!portValue) throw new Error("SMTP_PORT is not set")
  if (!user) throw new Error("SMTP_USER is not set")
  if (!pass) throw new Error("SMTP_PASS is not set")

  const port = Number.parseInt(portValue, 10)
  if (Number.isNaN(port)) throw new Error("SMTP_PORT must be a valid number")

  const secure = process.env.SMTP_SECURE
    ? process.env.SMTP_SECURE === "true"
    : port === 465

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: {
      user,
      pass,
    },
  })
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;")
}

function formatDetailRows(details?: Record<string, string>): string {
  if (!details || Object.keys(details).length === 0) {
    return '<tr><td style="padding:8px 0;color:#64748b;">No additional fields provided.</td></tr>'
  }

  return Object.entries(details)
    .map(
      ([label, value]) => `
        <tr>
          <td style="padding:8px 0;border-bottom:1px solid #e2e8f0;">
            <strong style="display:block;color:#0f172a;font-size:13px;">${escapeHtml(label)}</strong>
            <span style="color:#334155;font-size:14px;">${escapeHtml(value || "-")}</span>
          </td>
        </tr>
      `,
    )
    .join("")
}

function buildUserEmailHtml(payload: ContactSubmissionPayload): string {
  return `
  <div style="margin:0;padding:0;background:#f8fafc;font-family:Arial,Helvetica,sans-serif;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="padding:30px 12px;">
      <tr>
        <td align="center">
          <table role="presentation" width="620" cellspacing="0" cellpadding="0" style="max-width:620px;background:#ffffff;border:1px solid #e2e8f0;">
            <tr>
              <td style="padding:28px 30px;background:#0f172a;">
                <p style="margin:0;color:#cbd5e1;font-size:12px;letter-spacing:2px;text-transform:uppercase;">Moore Consultants</p>
                <h1 style="margin:10px 0 0;color:#ffffff;font-size:28px;line-height:1.2;font-weight:600;">Thanks for your enquiry, ${escapeHtml(payload.name)}.</h1>
              </td>
            </tr>
            <tr>
              <td style="padding:28px 30px;">
                <p style="margin:0 0 16px;color:#1e293b;font-size:16px;line-height:1.6;">
                  We have received your submission and Guy or a team member will review it shortly.
                </p>
                <p style="margin:0 0 18px;color:#334155;font-size:15px;line-height:1.6;">
                  We aim to respond within one business day.
                </p>

                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border:1px solid #e2e8f0;background:#f8fafc;padding:0 16px;">
                  <tr><td style="padding:14px 0 8px;color:#64748b;font-size:12px;letter-spacing:1px;text-transform:uppercase;">Submission Details</td></tr>
                  <tr><td style="padding:4px 0;color:#0f172a;font-size:14px;"><strong>Submitted from:</strong> ${escapeHtml(payload.sourcePage)} (${escapeHtml(payload.sourceComponent)})</td></tr>
                  <tr><td style="padding:4px 0 14px;color:#0f172a;font-size:14px;"><strong>Request type:</strong> ${escapeHtml(payload.triggerLabel)}</td></tr>
                </table>

                <p style="margin:20px 0 0;color:#64748b;font-size:13px;">
                  If you need to add anything, just reply to this email.
                </p>
              </td>
            </tr>
            <tr>
              <td style="padding:18px 30px;background:#f8fafc;border-top:1px solid #e2e8f0;color:#64748b;font-size:12px;">
                Moore Consultants · Adelaide, South Australia
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </div>
  `
}

function buildAdminEmailHtml(payload: ContactSubmissionPayload, requestMeta: Record<string, string>): string {
  const receivedAt = new Date().toISOString()
  const detailRows = formatDetailRows(payload.details)
  const messageLine = payload.message ? escapeHtml(payload.message) : "-"

  return `
  <div style="margin:0;padding:0;background:#f8fafc;font-family:Arial,Helvetica,sans-serif;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="padding:30px 12px;">
      <tr>
        <td align="center">
          <table role="presentation" width="720" cellspacing="0" cellpadding="0" style="max-width:720px;background:#ffffff;border:1px solid #e2e8f0;">
            <tr>
              <td style="padding:24px 28px;background:#0f172a;">
                <p style="margin:0;color:#cbd5e1;font-size:12px;letter-spacing:2px;text-transform:uppercase;">New Submission Alert</p>
                <h2 style="margin:8px 0 0;color:#ffffff;font-size:24px;line-height:1.3;">${escapeHtml(payload.triggerLabel)}</h2>
              </td>
            </tr>
            <tr>
              <td style="padding:24px 28px;">
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin-bottom:18px;">
                  <tr>
                    <td style="padding:6px 0;color:#0f172a;font-size:14px;"><strong>Source page:</strong> ${escapeHtml(payload.sourcePage)}</td>
                  </tr>
                  <tr>
                    <td style="padding:6px 0;color:#0f172a;font-size:14px;"><strong>Source component:</strong> ${escapeHtml(payload.sourceComponent)}</td>
                  </tr>
                  <tr>
                    <td style="padding:6px 0;color:#0f172a;font-size:14px;"><strong>Received at:</strong> ${escapeHtml(receivedAt)}</td>
                  </tr>
                </table>

                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border:1px solid #e2e8f0;padding:0 16px;margin-bottom:18px;">
                  <tr><td style="padding:14px 0 6px;color:#64748b;font-size:12px;letter-spacing:1px;text-transform:uppercase;">Contact Details</td></tr>
                  <tr><td style="padding:6px 0;color:#0f172a;font-size:14px;"><strong>Name:</strong> ${escapeHtml(payload.name)}</td></tr>
                  <tr><td style="padding:6px 0;color:#0f172a;font-size:14px;"><strong>Email:</strong> ${escapeHtml(payload.email)}</td></tr>
                  <tr><td style="padding:6px 0;color:#0f172a;font-size:14px;"><strong>Phone:</strong> ${escapeHtml(payload.phone || "-")}</td></tr>
                  <tr><td style="padding:6px 0 14px;color:#0f172a;font-size:14px;"><strong>Message:</strong> ${messageLine}</td></tr>
                </table>

                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border:1px solid #e2e8f0;padding:0 16px;margin-bottom:18px;">
                  <tr><td style="padding:14px 0 8px;color:#64748b;font-size:12px;letter-spacing:1px;text-transform:uppercase;">Additional Submitted Fields</td></tr>
                  ${detailRows}
                </table>

                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border:1px solid #e2e8f0;padding:0 16px;">
                  <tr><td style="padding:14px 0 8px;color:#64748b;font-size:12px;letter-spacing:1px;text-transform:uppercase;">Request Metadata</td></tr>
                  ${Object.entries(requestMeta)
                    .map(
                      ([label, value]) => `
                    <tr><td style="padding:6px 0;color:#334155;font-size:13px;"><strong>${escapeHtml(label)}:</strong> ${escapeHtml(value || "-")}</td></tr>
                  `,
                    )
                    .join("")}
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </div>
  `
}

function validatePayload(body: unknown): body is ContactSubmissionPayload {
  if (!body || typeof body !== "object") return false
  const record = body as Record<string, unknown>

  return (
    typeof record.sourcePage === "string" &&
    typeof record.sourceComponent === "string" &&
    typeof record.triggerLabel === "string" &&
    typeof record.name === "string" &&
    typeof record.email === "string"
  )
}

function asOptionalString(value: unknown): string | undefined {
  return typeof value === "string" ? value.trim() : undefined
}

function sanitizeDetails(value: unknown): Record<string, string> | undefined {
  if (!value || typeof value !== "object") return undefined

  const entries = Object.entries(value as Record<string, unknown>)
    .filter(([key, detailValue]) => typeof key === "string" && typeof detailValue === "string")
    .map(([key, detailValue]) => [key, (detailValue as string).trim()])

  return entries.length > 0 ? Object.fromEntries(entries) : undefined
}

function getFromAddress(): string {
  return process.env.SMTP_FROM_EMAIL || "Moore Consultants <forms@3pdigital.com.au>"
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as unknown
    if (!validatePayload(body)) {
      return NextResponse.json({ error: "Invalid submission payload." }, { status: 400 })
    }

    const payload: ContactSubmissionPayload = {
      sourcePage: body.sourcePage.trim(),
      sourceComponent: body.sourceComponent.trim(),
      triggerLabel: body.triggerLabel.trim(),
      name: body.name.trim(),
      email: body.email.trim().toLowerCase(),
      phone: asOptionalString(body.phone),
      message: asOptionalString(body.message),
      details: sanitizeDetails(body.details),
    }

    if (!payload.name || !payload.email || !payload.email.includes("@")) {
      return NextResponse.json({ error: "Please provide a valid name and email address." }, { status: 400 })
    }

    const transporter = getSmtpTransporter()
    const fromAddress = getFromAddress()

    const requestMeta = {
      "IP Address": request.headers.get("x-forwarded-for") || "Unavailable",
      "User Agent": request.headers.get("user-agent") || "Unavailable",
      Referrer: request.headers.get("referer") || "Unavailable",
      Host: request.headers.get("host") || "Unavailable",
    }

    await transporter.sendMail({
      from: fromAddress,
      to: payload.email,
      replyTo: ADMIN_RECIPIENTS.join(", "),
      subject: "We received your Moore Consultants submission",
      html: buildUserEmailHtml(payload),
    })

    await transporter.sendMail({
      from: fromAddress,
      to: ADMIN_RECIPIENTS,
      replyTo: payload.email,
      subject: `[Moore Consultants] ${payload.triggerLabel} from ${payload.name}`,
      html: buildAdminEmailHtml(payload, requestMeta),
    })

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error("Failed to send contact emails:", error)
    return NextResponse.json(
      { error: "We could not send your enquiry right now. Please try again in a few minutes." },
      { status: 500 },
    )
  }
}
