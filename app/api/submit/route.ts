import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const contentType = req.headers.get("content-type") ?? "";
    let formName = "contact";
    let fields: Record<string, string> = {};
    // Keep the original File object so we can forward the raw bytes without
    // any Buffer round-trip that could corrupt binary content.
    let resumeFile: File | null = null;
    let resumeFilename = "resume.pdf";
    let resumeMime = "application/pdf";

    if (contentType.includes("multipart/form-data")) {
      const fd = await req.formData();
      formName = (fd.get("form_name") as string) || "contact";
      for (const [key, value] of fd.entries()) {
        if (key === "form_name") continue;
        if (key === "resume" && value instanceof File && value.size > 0) {
          resumeFile = value;
          resumeFilename = value.name;
          resumeMime = value.type || "application/pdf";
        } else if (typeof value === "string") {
          fields[key] = value;
        }
      }
    } else {
      const body = await req.json();
      formName = body.form_name || "contact";
      fields = body.data || {};
    }

    // 1. Forward to brewmyagent dashboard
    // Use multipart/form-data and forward the File directly — no Buffer conversion —
    // so the raw PDF bytes reach the dashboard intact.
    const brewFd = new FormData();
    brewFd.append("api_key", process.env.NEXT_PUBLIC_BREW_API_KEY!);
    brewFd.append("form_name", formName);
    for (const [k, v] of Object.entries(fields)) {
      brewFd.append(k, v);
    }
    if (resumeFile) {
      brewFd.append("resume", resumeFile, resumeFilename);
    }
    await fetch(process.env.NEXT_PUBLIC_BREW_ENDPOINT!, {
      method: "POST",
      body: brewFd,
    });

    // 2. Send email notification (only if SMTP is configured)
    if (process.env.SMTP_USER && process.env.SMTP_PASS) {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST || "smtp.gmail.com",
        port: Number(process.env.SMTP_PORT) || 587,
        secure: Number(process.env.SMTP_PORT) === 465,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      const rows = Object.entries(fields)
        .map(
          ([k, v]) =>
            `<tr>
              <td style="padding:6px 12px;font-weight:600;color:#1e3a6e;white-space:nowrap;vertical-align:top">${k.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}</td>
              <td style="padding:6px 12px;color:#374151">${v}</td>
            </tr>`
        )
        .join("");

      const html = `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto">
          <div style="background:linear-gradient(135deg,#0b1e3f,#1d4ed8);padding:24px 28px;border-radius:12px 12px 0 0">
            <h2 style="margin:0;color:#fff;font-size:18px">New ${formName.replace(/-/g, " ")} submission</h2>
          </div>
          <div style="border:1px solid #e5e7eb;border-top:none;border-radius:0 0 12px 12px;padding:8px 0">
            <table style="width:100%;border-collapse:collapse;font-size:14px">${rows}</table>
          </div>
          ${resumeFile ? `<p style="font-size:13px;color:#6b7280;margin-top:12px">Resume attached: <strong>${resumeFilename}</strong></p>` : ""}
        </div>`;

      const mailOptions: nodemailer.SendMailOptions = {
        from: `"Accountables Forms" <${process.env.SMTP_USER}>`,
        to: process.env.NOTIFY_EMAIL || "support@accountables.com",
        subject: `[${formName.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}] New submission`,
        html,
      };

      if (resumeFile) {
        // Convert to Buffer here, only when needed for the email attachment.
        const resumeBuffer = Buffer.from(await resumeFile.arrayBuffer());
        mailOptions.attachments = [
          {
            filename: resumeFilename,
            content: resumeBuffer,
            contentType: resumeMime,
          },
        ];
      }

      await transporter.sendMail(mailOptions);
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[submit]", err);
    return NextResponse.json({ ok: false, error: String(err) }, { status: 500 });
  }
}
