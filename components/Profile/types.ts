export type Profile = {
  avatarImg: string,
  accountID: string,
  firstName: string,
  lastName: string,
  donations: {
    amount: number,
    orgID: number,
    orgName: string,
    date: Date
  }[],
  subscriptions: {
    orgID: number,
    orgName: string,
    monthlyAmount: number,
  }[]
}