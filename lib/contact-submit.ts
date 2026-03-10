export type ContactSubmissionPayload = {
  sourcePage: string
  sourceComponent: string
  triggerLabel: string
  name: string
  email: string
  phone?: string
  message?: string
  details?: Record<string, string>
}

export async function submitContactSubmission(payload: ContactSubmissionPayload): Promise<void> {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  })

  if (!response.ok) {
    let message = "Unable to send your enquiry right now."
    try {
      const body = (await response.json()) as { error?: string }
      if (body.error) {
        message = body.error
      }
    } catch {
      // Keep fallback error message.
    }
    throw new Error(message)
  }

  if (typeof window !== "undefined") {
    window.location.assign("/thankyou")
  }
}
