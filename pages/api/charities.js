const appId = '0af4709f';
const appKey = '5b0b1d5fbab8d51a4862963bad0afa73'
const creds = `app_id=${appId}&app_key=${appKey}`;
const baseURL = `https://api.data.charitynavigator.org/v2`;

export async function getOrganizations (options = {}) {
  const path = '/Organizations';

  const response = await fetch(`${baseURL}${path}?${creds}`);

  if (!response.ok) {
    console.error(response.statusText);
    throw new Error('An error occured. Please try again');
  }

  const data = await response.json();
  return data;
}

export const charities = [
  {
    id: 123,
    link: '/charities/123',
    title: 'Charity 1',
    description: 'lorem ipsum',
    stars: 1,
    avgMonthly: 15,
    followers: 100000,
    growthPct: 100,
    viewCount: 100000,
  },
  {
    id: 124,
    link: '/charities/123',
    title: 'Charity 2',
    description: 'lorem ipsum',
    stars: 2.5,
    avgMonthly: 2,
    followers: 100,
    growthPct: 100,
    viewCount: 100001,
  },
  {
    id: 125,
    link: '/charities/123',
    title: 'Charity 3',
    description: 'lorem ipsum',
    stars: 3,
    avgMonthly: 4,
    followers: 5980,
    growthPct: 200,
    viewCount: 100002,
  },
  {
    id: 126,
    link: '/charities/123',
    title: 'Charity 4',
    description: 'lorem ipsum',
    stars: 5,
    avgMonthly: 6,
    followers: 1994,
    growthPct: 400,
    viewCount: 100003,
  },
];
