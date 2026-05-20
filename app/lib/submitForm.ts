export async function submitForm(
  formName: string,
  data: Record<string, string>
): Promise<void> {
  const endpoint = process.env.NEXT_PUBLIC_BREW_ENDPOINT!;
  const api_key = process.env.NEXT_PUBLIC_BREW_API_KEY!;

  await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ api_key, form_name: formName, data }),
  });
}
