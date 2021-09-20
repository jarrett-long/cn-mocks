import { Profile } from "./types";

export const profiles : Profile[] = [
  {
    accountID: '1',
    firstName: 'Jarrett',
    lastName: 'Long',
    donations: [
      {
        amount: 10,
        date: new Date(2021, 1, 9),
        orgID: 1,
        orgName: 'Charity: Water',
      },
      {
        amount: 10,
        date: new Date(2020, 1, 9),
        orgID: 1,
        orgName: 'Charity: Water',
      },
      {
        amount: 10,
        date: new Date(2019, 1, 9),
        orgID: 1,
        orgName: 'Charity: Water',
      },
    ],
    subscriptions: []
  }
]