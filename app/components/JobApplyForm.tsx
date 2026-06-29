"use client";

import { useState } from "react";
import { submitForm } from "../lib/submitForm";

function Field({ label, type, placeholder, name }: { label: string; type: string; placeholder: string; name: string }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[12px] font-semibold text-[var(--text-primary)]">{label}</label>
      <input name={name} type={type} placeholder={placeholder}
        className="h-10 px-3 border border-[var(--border)] rounded-xl text-[13.5px] text-[var(--text-primary)] bg-[var(--surface-soft)] outline-none focus:border-[var(--brand-blue)] transition-colors" />
    </div>
  );
}

export function JobApplyForm({
  role,
  location = "New Delhi",
  formName = "careers-apply",
}: {
  role: string;
  location?: string;
  formName?: string;
}) {
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [status, setStatus] = useState<"idle" | "submitting" | "done">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(
      Array.from(fd.entries())
        .filter(([k]) => k !== "resume")
        .map(([k, v]) => [k, String(v)])
    );
    data.role = role;
    data.location = location;
    try {
      await submitForm(formName, data, resumeFile ?? undefined);
      setStatus("done");
    } catch {
      setStatus("idle");
    }
  };

  if (status === "done") {
    return (
      <div className="flex flex-col items-center gap-4 py-10">
        <div className="h-12 w-12 rounded-full bg-emerald-500 flex items-center justify-center">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M5 12l4 4L19 6" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </div>
        <p className="text-[15px] font-semibold text-[var(--text-primary)]">Application submitted!</p>
        <p className="text-[13px] text-[var(--text-muted)] text-center">Our team will review and reach out within 3 business days.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid grid-cols-2 gap-3">
        <Field label="Full Name *" name="full_name" type="text" placeholder="Your full name" />
        <Field label="Email Address *" name="email" type="email" placeholder="you@example.com" />
      </div>
      <Field label="Phone Number" name="phone" type="tel" placeholder="+91 XXXXX XXXXX" />
      <div className="flex flex-col gap-1.5">
        <label className="text-[12px] font-semibold text-[var(--text-primary)]">CA Status *</label>
        <select name="ca_status" className="w-full h-10 px-3 border border-[var(--border)] rounded-xl text-[13.5px] text-[var(--text-primary)] bg-[var(--surface-soft)] outline-none focus:border-[var(--brand-blue)] transition-colors">
          <option value="">Select your qualification</option>
          <option>Qualified CA</option>
          <option>Semi-qualified CA (Inter / IPCC cleared)</option>
          <option>CA Final Appearing</option>
          <option>Other</option>
        </select>
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="text-[12px] font-semibold text-[var(--text-primary)]">Resume / CV *</label>
        <label className="border-2 border-dashed border-[var(--border)] rounded-xl p-4 text-center cursor-pointer hover:border-[var(--brand-blue)] transition-colors">
          <input type="file" accept=".pdf,.doc,.docx" className="hidden"
            onChange={(e) => { const f = e.target.files?.[0]; if (f) setResumeFile(f); }} />
          {resumeFile
            ? <p className="text-[13px] text-[var(--brand-blue)] font-medium">✓ {resumeFile.name}</p>
            : <p className="text-[12.5px] text-[var(--text-muted)]"><span className="font-semibold text-[var(--brand-blue)]">Click to upload</span> or drag &amp; drop<br />PDF or DOCX, max 5 MB</p>
          }
        </label>
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="text-[12px] font-semibold text-[var(--text-primary)]">Why Accountables? (optional)</label>
        <textarea name="why_accountables" rows={3} placeholder="Tell us what excites you about this role..."
          className="w-full px-3 py-2.5 border border-[var(--border)] rounded-xl text-[13.5px] text-[var(--text-primary)] bg-[var(--surface-soft)] outline-none focus:border-[var(--brand-blue)] transition-colors resize-none" />
      </div>
      <button type="submit" disabled={status === "submitting"} className="btn-primary w-full justify-center !h-11">
        {status === "submitting" ? "Submitting…" : "Submit Application"}
      </button>
    </form>
  );
}
