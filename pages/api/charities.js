const appId = '0af4709f';
const appKey = '5b0b1d5fbab8d51a4862963bad0afa73'
const creds = `app_id=${appId}&app_key=${appKey}`;
const baseURL = `https://api.data.charitynavigator.org/v2`;

export async function fetchOrganizations (options = {}) {
  const path = '/Organizations';

  const response = await fetch(`${baseURL}${path}?${creds}`);

  if (!response.ok) {
    console.error(response.statusText);
    throw new Error('An error occured. Please try again');
  }

  const data = await response.json();
  return data;
}
