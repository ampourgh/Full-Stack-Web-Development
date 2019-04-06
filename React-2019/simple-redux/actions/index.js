console.clear();


// People dropping off a form
export const createPolicy = (name, amount) => {
  return {
    type: 'CREATE_POLICY',
    payload: {
      name : name,
      amount : amount
    }
  }
};


// Delete Ploicy
export const deletePolicy = (name) => {
  return {
    type : 'DETETE_POLICY',
    payload : {
      name: name
    }
  }
};


// Create Claim
export const createClaim = (name, amountMoney) => {
  return {
    type : 'CREATE_CLAIM',
    payload : {
      name: name,
      amountofMoneyToCollect: amountMoney
    }
  }
};
