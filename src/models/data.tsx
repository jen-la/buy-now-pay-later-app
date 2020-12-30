import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faSpotify, faPlaystation } from '@fortawesome/free-brands-svg-icons';

// example API response based on Yodlee API reference (GET request to /accounts)
export const exampleAccountData = { 
  "account": [ 
    { 
      CONTAINER: "bank",
      isManual: false,
      isAsset: true,
      lastUpdated: "2017-09-21T06:08:29Z",
      currentBalance: { 
        amount: 1500,
        currency: "AUD"
      },
      availableBalance: { 
        amount: 1500,
        currency: "AUD"
      },
      displayedName: "Tim",
      id: 2251053,
      balance: { 
        amount: 1500,
        currency: "AUD"
      },
      accountName: "Savings Account",
      accountNumber: "xxxx8823",
      aggregationSource: "USER",
      dataset: [ 
        { 
          lastUpdateAttempt: "2017-09-21T06:08:51Z",
          updateEligibility: "ALLOW_UPDATE",
          name: "BASIC_AGG_DATA",
          lastUpdated: "2017-09-21T06:08:51Z",
          additionalStatus: "AVAILABLE_DATA_RETRIEVED"
        }
      ],
      providerName: "CBA",
      accountStatus: "ACTIVE",
      accountType: "SAVINGS",
      providerId: "5",
      includeInNetWorth: true,
      createdDate: "2017-09-21T06:08:26Z",
      providerAccountId: 2204099
    }
  ]
};

// example API response based on Yodlee API reference (GET request to /transactions)
export const exampleTransactions = {
  transaction: [
    {
      CONTAINER: "bank",
      id: 2829798,
      amount: {
        amount: 50.00,
        currency: "AUD"
      },
      runningBalance: {
        amount: 1450,
        currency: "AUD"
      },
      baseType: "DEBIT",
      categoryType: "EXPENSE",
      categoryId: 17,
      category: "Entertainment",
      categorySource: "SYSTEM",
      highLevelCategoryId: 10000004,
      date: "2014-07-01",
      createdDate: "2014-07-01T13:42:35Z",
      lastUpdated: "2014-07-01T13:42:35Z",
      postDate: "2014-07-01",
      description: {
        original:  "ACH Withdrawal-Debit XXXXXXXX00 - PPD US BANK - XXXX",
        consumer: "Netflix subscription",
        simple: "XXXX"
      },
      isManual: false,
      sourceId: 258366,
      status: "POSTED",
      accountId: 836726,
      type: "PAYMENT",
      subType: "XXXX",
      merchant: {
        id: "XXXX",
        source: "FACTUAL",
        name: "Netflix",
        categoryLabel: ["XXXX"],
        address: {
          address1 :"XXXX",
          city :"XXXX",
          state :"XX",
          country :"XX",
          zip : 94112
        }
      }
    },
    {
      CONTAINER: "bank",
      id: 2829798,
      amount: {
        amount: 10.00,
        currency: "AUD"
      },
      runningBalance: {
        amount: 1440,
        currency: "AUD"
      },
      baseType: "DEBIT",
      categoryType: "EXPENSE",
      categoryId: 17,
      category: "Food&Drink",
      categorySource: "SYSTEM",
      highLevelCategoryId: 10000004,
      date: "2014-07-01",
      createdDate: "2014-07-01T13:42:35Z",
      lastUpdated: "2014-07-01T13:42:35Z",
      postDate: "2014-07-01",
      description: {
        original:  "ACH Withdrawal-Debit XXXXXXXX00 - PPD US BANK - XXXX",
        consumer: "Coffee",
        simple: "XXXX"
      },
      isManual: false,
      sourceId: 258366,
      status: "POSTED",
      accountId: 836726,
      type: "PAYMENT",
      subType: "XXXX",
      merchant: {
        id: "XXXX",
        source: "FACTUAL",
        name: "Toby's Estate",
        categoryLabel: ["XXXX"],
        address: {
          address1 :"XXXX",
          city :"XXXX",
          state :"XX",
          country :"XX",
          zip : 94112
        }
      }
    },
    {
      CONTAINER: "bank",
      id: 2829798,
      amount: {
        amount: 400.00,
        currency: "AUD"
      },
      runningBalance: {
        amount: 1040,
        currency: "AUD"
      },
      baseType: "DEBIT",
      categoryType: "EXPENSE",
      categoryId: 17,
      category: "Entertainment",
      categorySource: "SYSTEM",
      highLevelCategoryId: 10000004,
      date: "2014-07-01",
      createdDate: "2014-07-01T13:42:35Z",
      lastUpdated: "2014-07-01T13:42:35Z",
      postDate: "2014-07-01",
      description: {
        original:  "ACH Withdrawal-Debit XXXXXXXX00 - PPD US BANK - XXXX",
        consumer: "PS4",
        simple: "XXXX"
      },
      isManual: false,
      sourceId: 258366,
      status: "POSTED",
      accountId: 836726,
      type: "PAYMENT",
      subType: "XXXX",
      merchant: {
        id: "XXXX",
        source: "FACTUAL",
        name: "Playstation Store",
        categoryLabel: ["XXXX"],
        address: {
          address1 :"XXXX",
          city :"XXXX",
          state :"XX",
          country :"XX",
          zip : 94112
        }
      }
    },
    {
      CONTAINER: "bank",
      id: 2829798,
      amount: {
        amount: 20.00,
        currency: "AUD"
      },
      runningBalance: {
        amount: 1020,
        currency: "AUD"
      },
      baseType: "DEBIT",
      categoryType: "EXPENSE",
      categoryId: 17,
      category: "Entertainment",
      categorySource: "SYSTEM",
      highLevelCategoryId: 10000004,
      date: "2014-07-01",
      createdDate: "2014-07-01T13:42:35Z",
      lastUpdated: "2014-07-01T13:42:35Z",
      postDate: "2014-07-01",
      description: {
        original:  "ACH Withdrawal-Debit XXXXXXXX00 - PPD US BANK - XXXX",
        consumer: "Spotify Premium subscription",
        simple: "XXXX"
      },
      isManual: false,
      sourceId: 258366,
      status: "POSTED",
      accountId: 836726,
      type: "PAYMENT",
      subType: "XXXX",
      merchant: {
        id: "XXXX",
        source: "FACTUAL",
        name: "Spotify",
        categoryLabel: ["XXXX"],
        address: {
          address1 :"XXXX",
          city :"XXXX",
          state :"XX",
          country :"XX",
          zip : 94112
        }
      }
    }
  ]
};

export const merchantIcons: any = {
  Spotify: <FontAwesomeIcon icon={faSpotify} />,
  'Playstation Store': <FontAwesomeIcon icon={faPlaystation} />,
  'Toby\'s Estate': <FontAwesomeIcon icon={faCoffee} />
};