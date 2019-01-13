# REACT NOTES

## REDUX Analogy

Comparing the Redux cycle to the Insurance policy analogy

Action Creator -> Action -> Dispatch -> Reducers -> State

Person dropping off the form (Action Creator) ->
The Form (Action) ->
Form Receiver (Dispatch) ->
Departments (Reducers) ->
Compiled Department Data (State)

```JavaScript
// clears any console.log when a chnage is made in the code that updates the page
console.clear();


// 3 ACTION CREATORS

// Action Creator - People dropping off a form
const createPolicy = (name, amount) => {
  return { // Action: a form in analogy
    type: 'CREATE_POLICY',
    payload: {
      name: name,
      amount: amount
    }
  };
};

const deletePolicy = (name) => {
  return { // Action: a form in analogy
    type: 'DELETE_POLICY',
    payload: {
      name: name
    }
  };
};

const createClaim = (name, amountOfMoneyToCollect) => {
  return { // Action: a form in analogy
    type: 'CREATE_CLAIM',
    payload: {
      name: name,
      amountOfMoneyToCollect: amountOfMoneyToCollect
    }
  };
};

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
};

const accounting = (bagOfMoney, action) => {
  if (action.type === 'CREATE_CLAIM') {
    return bagOfMoney - action.payload.amountOfMoneyToCollect; // 80 returned
  } else if (action.type === 'CREATE_POLICY') {
    return bagOfMoney + action.payload.amountOfMoneyToCollect; // 120 returned in ex
  }

  return bagOfMoney;
};

const policies = (listOfPolicies = [], action) => {
  if (action.type === 'CREATE_POLICY') {
    return [...listOfPolicies, action.payload.name];
  } else if (action.type === 'DELETE_POLICY') {
    return listOfPolicies.filter(name => name !== action.payload.name);
  }

  return listOfPolicies;
}
```
