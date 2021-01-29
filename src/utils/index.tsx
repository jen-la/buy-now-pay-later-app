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
  // create object to store merchants and spend as key value pairs
  let merchantSpend: any = { Misc: 0 };
  console.log('trans argument', trans);
  
  for (let i = 0; i < trans.length; i++) {
    if (!trans[i].merchant || (trans[i].merchant && !trans[i].merchant.hasOwnProperty('name'))) {
      // if no merchant property or merchant name, increment merchantSpend.Misc
      merchantSpend.Misc += Number(trans[i].amount.amount);
    } else if (merchantSpend.hasOwnProperty(trans[i].merchant.name)) {
      // if merchant name already a property, increment its value
      merchantSpend[trans[i].merchant.name] += Number(trans[i].amount.amount);
    } else {
      // if merchant name not already set, add it as a property
      merchantSpend[trans[i].merchant.name] = Number(trans[i].amount.amount);
    } 
    // if (trans[i].merchant && merchantSpend.hasOwnProperty(trans[i].merchant.name)) {
    //   merchantSpend[trans[i].merchant.name] += Number(trans[i].amount.amount);
    // } else if (trans[i].merchant && !merchantSpend.hasOwnProperty(trans[i].merchant.name)) {
    //   merchantSpend[trans[i].merchant.name] = Number(trans[i].amount.amount);
    // } else {
    //   merchantSpend.Misc += Number(trans[i].amount.amount);
    // } 
  }
  
  return merchantSpend;
}; 

export const reverseDate = (date: string): string => {
  const year = date.substring(0, 4);
  const month = date.substring(5, 7);
  const day = date.substring(8);
  
  return `${day}-${month}-${year}`;
};