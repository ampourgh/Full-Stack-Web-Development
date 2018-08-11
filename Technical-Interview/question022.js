\*
Find the Median

Sample Input 0

7
0 1 2 4 6 5 3
Sample Output 0

3
*\

findMedian = (arr) => {
    
    let n = arr.length;
    arr = bubbleSort(arr);
    let median; 
    
    if (n % 2 !== 1) {
        n = n/2;
        median = (arr[n - 1] + arr[n]) / 2;
        return median;
    } else {
        median = arr[Math.ceil(n/2) - 1]
        return median;        
    }
}

bubbleSort = (array) => {
  var swapped;
  do {
    swapped = false;
    for(var i = 0; i < array.length; i++) {
      if(array[i] && array[i + 1] && array[i] > array[i + 1]) {
        swap(array, i, i + 1);
        swapped = true;
      }
    }
  } while(swapped);
  return array;
}

swap = (array, i, j) => {
  var temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

console.log(findMedian([1, 4, 3, 8, 2, 6, 7]));
console.log(findMedian([1, 4, 3, 2, 6, 7]));
