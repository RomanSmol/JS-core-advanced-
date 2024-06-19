function bubbleSort(arr) {
    let n = arr.length;
    let swapped;
    do {
      swapped = false;
      for (let i = 0; i < n - 1; i++) {
        if (arr[i] > arr[i + 1]) {
          let temp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = temp;
          swapped = true;
        }
      }
      n--;
  
    } 
    while (swapped);
    return arr;
  }
  
  console.log(bubbleSort([5, 3, 8, 4, 2])); 
  console.log(bubbleSort([20, -10, 15, 0, 5]));
  console.log(bubbleSort([1, 2, 3, 4, 5])); 
  console.log(bubbleSort([5, 4, 3, 2, 1])); 
  