export type Organization = {
  charityNavigatorURL: string;
  mission: string;
  websiteURL: string;
  ein: string;
  orgID: string;
  charityName?: string;
  tagLine?: string;
  followers: number; // mine
  growthPct: number; // mine
  viewCount: number; // mine
  avgMonthlyContribution: number; // mine
  friendsWhoContribute: string[]; // mine
  consecutive4StarRatings: number; // mine
  currentRating: {
    score: number;
    ratingID: number;
    publicationDate: Date;
    ratingImage: {
      small: string;
      large: string;
    };
    rating: number;
    financialRating: {
      score: number;
      rating: number;
    };
    accountabilityRating: {
      score: number;
      rating: number;
    }
  };
  category: {
    categoryName: string;
    categoryID: number;
    charityNavigatorURL: string;
    image: string;
  };
  cause: {
    causeID: number;
    causeName: string;
    charityNavigatorURL: string;
    image: string;
  };
  irsClassification: {
    deductibility: string;
    subsection: string;
    assetAmount: number;
    nteeType: string;
    incomeAmount: number,
    nteeSuffix: string,
    filingRequirement: string;
    classification: string;
    latest990: string;
    rulingDate: string;
    nteeCode: string;
    groupName: null,
    affiliation: string;
    deductibilityCode: number;
    foundationStatus: string;
    nteeClassification: string;
    accountingPeriod: string;
    exemptOrgStatus: string;
    deductibilityDetail: string;
    exemptOrgStatusCode: string;
    nteeLetter: string;
  };
  mailingAddress: {
    country: string;
    stateOrProvince: string;
    city: string;
    postalCode: string;
    streetAddress1: string;
    streetAddress2: string;
  };
};