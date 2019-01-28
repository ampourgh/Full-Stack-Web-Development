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
