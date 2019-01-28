// 3 REDUCERS (Departments)

// If someone makes a call with an oldListOfClaims of undefined, then the var will be replaced with an empty arr
const claimHistory = (oldListOfClaims = [], action) => {
  if (action.type === 'CREATE_CLAIM') {
    // ES2016 syntax:
    /*
    EXPLANATION:
    const arr = [1, 2, 3];
    [...arr, 4]
    >>> [1, 2, 3, 4]

    In reducers, when we want to make a change, we always want to create a new array
    NOT push into an existing one
    */
    return [...oldListOfClaims, action.payload];
  }
  return oldListOfClaims;
};

const accounting = (bagOfMoney=100, action)=>{
  if(action.type=== 'CREATE_CLAIM'){
    return bagOfMoney - action.payload.amountOfMoneyToCollect;
  }else if(action.type=== 'CREATE_POLICY'){
    return bagOfMoney + action.payload.amount;
  }
  return bagOfMoney;

};

const policies = (listOfPolicies = [], action)=>{
  if(action.type === 'CREATE_POLICY'){
    return [...listOfPolicies, action.payload.name];
  }else if( action.type === 'DELETE_POLICY'){
    return listOfPolicies.filter( name => name !==       action.payload.name);
  }
  return listOfPolicies;
};
