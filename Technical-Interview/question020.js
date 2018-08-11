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

countingSort = (arr) => {
    
    arr = bubbleSort(arr);
    
    console.log(arr);
    
    let count = [];
    let counter = 0;
    
    for (i = 0; i < 100; i++) {
        if (arr[0] == i) {
            while(arr[0] == i) {
                counter += 1;
                arr.shift();
            }         
        } 
        count.push(counter);
        counter = 0;
    }
    
    return count
    
}

console.log(countingSort([4, 5, 3, 0, 3, 3, 2, 1, 0, 0, 0, 0]));
