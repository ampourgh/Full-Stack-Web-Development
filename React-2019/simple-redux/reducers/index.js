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
