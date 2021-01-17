import { CategorySpend, MerchantSpend } from '../models/index'; 

export const formatCardBalance = (balance: number): string | undefined => {
  if (String(balance).length < 4) {
    return;
  }

  let balanceArr = String(balance).split('');
  for (let i = balanceArr.length - 3; i >= 0; i -= 3) {
    balanceArr.splice(i, 0, ',');
  }

  return balanceArr.join('');
};

export const aggregateCategorySpend = (trans: any[]): CategorySpend => {
  let categorySpend: any = {};

  for (let i = 0; i < trans.length; i++) {
    if (categorySpend.hasOwnProperty(trans[i].category)) {
      categorySpend[trans[i].category] += Number(trans[i].amount.amount);
    } else {
      categorySpend[trans[i].category] = Number(trans[i].amount.amount);
    }
  }

  return categorySpend;
}; 

export const aggregateMerchantSpend = (trans: any[]): MerchantSpend => {
  let merchantSpend: any = { Misc: 0 };

  for (let i = 0; i < trans.length; i++) {
    if (trans[i].merchant.name && merchantSpend.hasOwnProperty(trans[i].merchant.name)) {
      merchantSpend[trans[i].merchant.name] += Number(trans[i].amount.amount);
    } else if (trans[i].merchant.name && !merchantSpend.hasOwnProperty(trans[i].merchant.name)) {
      merchantSpend[trans[i].merchant.name] = Number(trans[i].amount.amount);
    } else {
      merchantSpend.Misc += Number(trans[i].amount.amount);
    } 
  }

  return merchantSpend;
}; 

export const reverseDate = (date: string): string => {
  const year = date.substring(0, 4);
  const month = date.substring(5, 7);
  const day = date.substring(8);
  
  return `${day}-${month}-${year}`;
};