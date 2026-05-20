export async function submitForm(
  formName: string,
  data: Record<string, string>,
  resumeFile?: File
): Promise<void> {
  if (resumeFile) {
    const fd = new FormData();
    fd.append("form_name", formName);
    Object.entries(data).forEach(([k, v]) => fd.append(k, v));
    fd.append("resume", resumeFile);
    await fetch("/api/submit", { method: "POST", body: fd });
  } else {
    await fetch("/api/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ form_name: formName, data }),
    });
  }
}
