function sumFirstHalf(arr) {
    if (arr.length === 0) return 0; 
    let midIndex = Math.floor(arr.length / 2); 
    let sum = 0;
    for (let i = 0; i < midIndex; i++) {
      sum += arr[i];
    }
    return sum;
  }
  
  console.log(sumFirstHalf([1, 2, 3, 4])); 
  console.log(sumFirstHalf([10, 20, 30, 40, 50])); 
  console.log(sumFirstHalf([5, 5, 5, 5]));  
  console.log(sumFirstHalf([])); 
  console.log(sumFirstHalf([1, 2, 3])); 
  