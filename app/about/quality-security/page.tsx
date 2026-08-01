import type { Metadata } from "next";
import { PageShell } from "../../components/PageShell";
import { PageHero } from "../../components/PageHero";

export const metadata: Metadata = {
  title: "QMS & ISMS - Accountables",
  description:
    "Accountables is certified to ISO 9001:2015 for Quality Management and ISO/IEC 27001:2022 for Information Security, reflecting our commitment to internationally recognized standards.",
};

export default function QualitySecurityPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Quality & Information Security"
        title="Quality, trust, and"
        highlight="security"
        serif={{ inHighlight: "security" }}
        description=""
      />

      {/* ── Overview ─────────────────────────────────────────── */}
      <section className="pb-12 border-b border-[var(--border)]">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="max-w-3xl">
            <p className="text-[16px] leading-[1.7] text-[var(--text-secondary)]">
              At Accountables, quality, trust, and security are at the heart of everything we do. As a finance and accounting partner, we understand that our clients rely on us not only for technical expertise but also for consistency, accuracy, and the secure handling of their information.
            </p>
            <br/>
            <p className="text-[16px] leading-[1.7] text-[var(--text-secondary)]">
              Our operations are driven by well-defined processes, strong governance, and a culture of continuous improvement to ensure we consistently deliver reliable, high-quality services while protecting the confidentiality of the information entrusted to us. These management systems are certified to ISO 9001:2015 for Quality Management and ISO/IEC 27001:2022 for Information Security, reflecting our commitment to internationally recognized standards.
            </p>
          </div>

          {/* Certification badges */}
          <div className="flex flex-wrap gap-4 mt-12">
            {[
              { code: "ISO 9001:2015", label: "Quality Management" },
              { code: "ISO/IEC 27001:2022", label: "Information Security" },
            ].map((cert) => (
              <div
                key={cert.code}
                className="flex items-center gap-4 rounded-2xl border border-[var(--border)] bg-white px-6 py-5"
              >
                <span
                  className="h-10 w-10 rounded-xl flex items-center justify-center text-[18px] text-white flex-shrink-0"
                  style={{ background: "linear-gradient(135deg, var(--brand-navy), var(--brand-blue))" }}
                >
                  ✓
                </span>
                <div>
                  <div className="text-[15px] font-semibold text-[var(--text-primary)]">{cert.code}</div>
                  <div className="text-[12px] text-[var(--text-muted)]">{cert.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Quality Management & Information Security ─────────── */}
      <section className="py-12 border-b border-[var(--border)]">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid lg:grid-cols-2 gap-5 md:gap-6">
            {/* Quality Management */}
            <div className="card p-7 md:p-8 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <span
                  className="h-10 w-10 rounded-xl flex items-center justify-center text-[18px] text-[var(--brand-blue)]"
                  style={{ background: "linear-gradient(135deg, #eff6ff, #dbeafe)" }}
                >
                  ◆
                </span>
                <h3 className="text-[17px] font-semibold text-[var(--text-primary)]">Quality Management</h3>
              </div>
              <p className="text-[14px] leading-[1.7] text-[var(--text-secondary)]">
                Quality is embedded into every stage of our service delivery. Through standardized processes, ongoing performance reviews, and a commitment to continuous improvement, we ensure that every engagement is delivered with accuracy, consistency, and professionalism.
              </p>
              <p className="text-[13px] font-semibold text-[var(--text-muted)] uppercase tracking-[0.14em]">
                Our Quality Management System supports our commitment to:
              </p>
              <ul className="flex flex-col gap-2.5">
                {[
                  "Consistent and reliable service delivery.",
                  "Continuous improvement of our processes.",
                  "Clear accountability across every engagement.",
                  "Compliance with applicable professional, regulatory, and client requirements.",
                  "Delivering a high standard of client service.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[14px] leading-[1.6] text-[var(--text-secondary)]">
                    <span
                      className="mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0"
                      style={{ background: "var(--brand-blue)" }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Information Security */}
            <div className="card p-7 md:p-8 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <span
                  className="h-10 w-10 rounded-xl flex items-center justify-center text-[18px] text-[var(--brand-blue)]"
                  style={{ background: "linear-gradient(135deg, #eff6ff, #dbeafe)" }}
                >
                  ⬡
                </span>
                <h3 className="text-[17px] font-semibold text-[var(--text-primary)]">Information Security</h3>
              </div>
              <div className="flex flex-col gap-3">
                <p className="text-[14px] leading-[1.7] text-[var(--text-secondary)]">
                  Protecting our clients' financial and business information is fundamental to the way we operate. We have established robust information security practices to safeguard the confidentiality, integrity, and availability of data throughout every stage of our engagement.
                </p>
                <p className="text-[14px] leading-[1.7] text-[var(--text-secondary)]">
                  Our Information Security Management System provides a structured framework for managing information securely and continuously strengthening our security practices.
                </p>
              </div>
              <p className="text-[13px] font-semibold text-[var(--text-muted)] uppercase tracking-[0.14em]">
                Our approach includes:
              </p>
              <ul className="flex flex-col gap-2.5">
                {[
                  "Protecting confidential client and business information.",
                  "Managing information security risks through robust controls.",
                  "Secure handling, storage, and processing of information.",
                  "Ongoing monitoring and continual improvement.",
                  "Promoting a culture of information security across our organization.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[14px] leading-[1.6] text-[var(--text-secondary)]">
                    <span
                      className="mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0"
                      style={{ background: "var(--brand-blue)" }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── What This Means for Our Clients ───────────────────── */}
      <section className="py-12 bg-[var(--surface-soft)] border-t border-[var(--border)]">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="rounded-[24px] md:rounded-[32px] border border-[var(--border)] bg-white p-8 md:p-12">
            <h2 className="display text-[24px] sm:text-[28px] md:text-[32px] font-semibold text-[var(--text-primary)] leading-[1.1]">
              What This Means for{" "}
              <span className="accent">Our Clients</span>
            </h2>
            <div className="mt-5 max-w-3xl">
              <p className="text-[16px] leading-[1.7] text-[var(--text-secondary)]">
                For our clients, this means working with a partner whose processes are designed to deliver consistent outcomes while protecting sensitive information. Our management systems are independently certified to internationally recognized ISO standards, providing additional assurance that quality and information security are embedded in the way we work.
              </p>
              <p className="mt-3 text-[16px] leading-[1.7] text-[var(--text-secondary)]">
                Whether supporting businesses with accounting, bookkeeping, payroll, financial reporting, tax compliance, or advisory services, we remain committed to delivering dependable solutions with professionalism, transparency, and accountability.
              </p>
              <p className="mt-3 text-[16px] leading-[1.7] font-medium text-[var(--text-primary)]">
                At Accountables, accountability is more than our name—it's the standard that defines how we work and the trust we build with every client.
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
