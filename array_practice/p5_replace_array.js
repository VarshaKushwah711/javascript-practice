// 5. Replace the third element in the array [1, 2, 3, 4, 5] with 99.

// method 1
let arr = [1,2,3,4,5];
console.log(arr);
arr[2] = 99;
console.log(arr);

//method 2
let arr2 = [1,2,3,4,5];
console.log(arr2);
arr2.splice(2,1,99);
console.log(arr2);

//method 3
let arr3 = [1,2,3,4,5];
console.log(arr3);
const newArr = arr3.map((value, index) => index === 2 ? 99 : value);
console.log(newArr);