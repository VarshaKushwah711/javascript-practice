// 6. Add an element to the end of the array [1, 2, 3].

//method 1
let arr = [1,2,3];
arr[arr.length] = 4;
console.log(arr);

//method 2
arr.push(5);
console.log(arr);

//method 3
arr.splice(arr.length,0,6);
console.log(arr);