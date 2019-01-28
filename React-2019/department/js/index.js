
store.dispatch(createPolicy('Emerson', 40));
store.dispatch(createPolicy('Elisia', 10));
store.dispatch(createPolicy('Julia', 50));

store.dispatch(createClaim('Julia', 50));
store.dispatch(createClaim('Julia', 20));

// store.dispatch(deletePolicy('Elisia'));

console.log(store.getState());

var numberOfClaims = store.getState().claimHistory.length;
var claims = store.getState().claimHistory;
var i;

for (i = 0; i < numberOfClaims; i++) {
  var node = document.createElement("LI");
  var textnode = document.createTextNode(claims[i].name + " " + claims[i].amountOfMoneyToCollect);
  node.appendChild(textnode);
  document.getElementById("listOfClaims").appendChild(node);
}


var numberOfPolicies = store.getState().policies.length;
var policies1 = store.getState().policies;
var j;

for (j = 0; j < numberOfPolicies; j++) {
  var node = document.createElement("LI");
  var textnode = document.createTextNode(policies1[j]);
  node.appendChild(textnode);
  document.getElementById("policies").appendChild(node);
}
