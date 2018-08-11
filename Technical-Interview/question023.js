/*You have an array of integers, and for each index you want to find the product of every integer except the integer at that index.

Write a function getProductsOfAllIntsExceptAtIndex() that takes an array of integers and returns an array of the products.*/

nestedLoop = () => {
  let array =  [1, 7, 3, 4];
  let solution = [];
  
  for (i = 0; i < array.length; i++) {
    index = array.shift();
    let sum = null; 
    for (j = 0; j < array.length; j++) {
      if(sum !== null) {
        sum *= array[j];
      } else {
        sum = array[j];
      }
      
    }
    solution.push(sum);
    array.push(index);
  }
  return solution
}

notNested = () => {
  const array =  [1, 7, 3, 4];
        arraySet = [];
        arraySet1 = [];
        sum = null;

  for (var i = 0; i < array.length; i++) {
    if(sum !== null) {
      sum *= array[i];
    } else {
      sum = array[i];
    }
    arraySet.push(sum)
  }
  
  arraySet.unshift(1)
  console.log(arraySet);
  sum = null;

  for (var j = array.length - 1; j > -1; j--) {
    sum1 = null;
    if(sum !== null && j !== 0) {
      sum *= array[j];
    } else if (sum === null && j !== 0) {
      sum = array[j];
    }
    
    sum1 = sum;
    
    if (j !== 0 && j !== array.length) {
      sum1 *= arraySet[j - 1]
    }
    
    if (j === array.length - 1) {
      sum1 = arraySet[j]
    }
    arraySet1.push(sum1);
    
  }
  return arraySet1;
}

console.log(nestedLoop());
console.log(notNested());
