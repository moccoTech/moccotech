export async function sendEmail(data) {
  const apiEndpoint = '/api/email';

  const res = await fetch(apiEndpoint, {
    method: 'POST',
    body: JSON.stringify(data),
  });
  const response = await res.json();

  return response;
}
