export function sendEmail(data) {
  const apiEndpoint = '/api/email';

  const response = fetch(apiEndpoint, {
    method: 'POST',
    body: JSON.stringify(data),
  }).then((res) => res.json());

  return response;
}
