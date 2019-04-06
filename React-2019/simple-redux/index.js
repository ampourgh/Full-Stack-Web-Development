console.clear();


// People dropping off a form
const createPolicy = (name, amount) => {
  return {
    type: 'CREATE_POLICY',
    payload: {
      name : name,
      amount : amount
    }
  }
};



// Delete Ploicy

const deletePolicy = (name) => {
  return {
    type : 'DETETE_POLICY',
    payload : {
      name: name
    }
  }
};



// Create Claim

const createClaim = (name, amountMoney) => {

  return {
    type : 'CREATE_CLAIM',
    payload : {
      name: name,
      amountofMoneyToCollect: amountMoney
    }
  }
};



// Reducers



const claimsHistory = (oldListOfClaims = [], action) => {

  if(action.type == 'CREATE_CLAIM') {

    return [...oldListOfClaims, action.payload];

  }

  return oldListOfClaims;

};



const accounting = (currentBagOfMoney = 100, action) => {

  if(action.type == 'CREATE_CLAIM') {

    return currentBagOfMoney - action.payload.amountofMoneyToCollect;

  } else if(action.type == 'CREATE_POLICY') {

    return currentBagOfMoney + action.payload.amount;

  }

  return currentBagOfMoney;

};



const policies = (listOfPolicies = [], action) => {

  if(action.type == 'CREATE_POLICY') {

    return [...listOfPolicies, action.payload.name];

  } else if(action.type == 'DETETE_POLICY') {

    return listOfPolicies.filter(theName => theName !== action.payload.name);

  }



  return listOfPolicies;

};



const { createStore, combineReducers } = Redux;



const ourDepartments = combineReducers({

  accounting: accounting,

  claimsHistory: claimsHistory,

  policies: policies

});

const store = createStore(ourDepartments);

store.dispatch(createPolicy('Emerson', 40));
store.dispatch(createPolicy('Lee', 10));
store.dispatch(createPolicy('Julia', 50));

store.dispatch(createClaim('Julia', 50));
store.dispatch(createClaim('Julia', 20));

store.dispatch(deletePolicy('Lee'));

console.log(store.getState());
