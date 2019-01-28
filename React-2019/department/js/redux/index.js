console.log(Redux);

const { createStore, combineReducers } = Redux;

const ourDepartments = combineReducers({
  accounting: accounting,
  claimHistory:claimHistory,
  policies: policies
});

const store = createStore(ourDepartments);
