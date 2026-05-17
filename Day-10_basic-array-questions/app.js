// # 🏫 Class Questions (7 Problems)

// ### 1️⃣ Find the Maximum and Minimum Element

// * **Input:** `[10, 25, 3, 18]`
// * **Output:** `Max = 25`, `Min = 3`

// let arr = [10, 24, 4, 18];
// let max = arr[0];
// let min = arr[0];

// for(let i = 0; i <= arr.length; i++){

//     if(max < arr[i]){
//         max = arr[i]
//     }

//     if(min > arr[i]){
//         min = arr[i]
//     }
// }

// console.log(min, max);

// ### 2️⃣ Reverse an Array (Manual Method Only)

// * **Input:** `[1, 2, 3, 4, 5]`
// * **Output:** `[5, 4, 3, 2, 1]`
  
//   ✨ Two pointer technique, no `reverse()`.

// let arr = [1, 2, 3, 4, 5];
// let leftIndex = 0
// let rightIndex = arr.length - 1

// while(leftIndex < rightIndex){
//     let temp = arr[leftIndex]
//     arr[leftIndex] = arr[rightIndex]
//     arr[rightIndex] = temp;

//     leftIndex++;
//     rightIndex--;
// }

// console.log(arr);

// ### 3️⃣ Check if an Array is Sorted (Ascending)

// * **Input:** `[1, 2, 3, 4, 5]`
// * **Output:** `Sorted`

// let input = [1, 2, 3, 4, 5];
// let output = true
// for(let a = 1; a < input.length; a++){
//     if(input[a] < input[a - 1]){
//         output = false
//     }
// }

// console.log(output);

// ### 4️⃣ Remove All Duplicates From an Array (Use filter method)

// * **Input:** `[1, 2, 2, 3, 3, 4]`
// * **Output:** `[1, 2, 3, 4]`

// let arr = [1,2,2,3,3,4]
// let output = arr.filter((ele, index) => arr.indexOf(ele) === index)
// console.log(output);

// ### 5️⃣ Merge Two Arrays Without Using concat or spread

// * **Input:** `[1, 2, 3]` and `[4, 5]`
// * **Output:** `[1, 2, 3, 4, 5]`

// let arr1 = [1,2,3] , arr2 = [4,5];
// let finalArr = [];

// for(item of arr1){
//     finalArr.push(item)
// }

// for(item of arr2){
//     finalArr.push(item)
// }

// console.log(finalArr);

// # 🏠 Homework Questions (7 Problems)

// ### 1️⃣ Find the Second Largest Element

// * **Input:** `[10, 20, 4, 45, 99]`
// * **Output:** `45`

// let arr = [10, 20, 4, 45, 99];
// arr.sort((a,b) => a - b)
// console.log(arr[arr.length - 2]);

// ### 2️⃣ Rotate an Array to the Right by K Steps

// * **Input:** `[1, 2, 3, 4, 5]`, `K = 2`
// * **Output:** `[4, 5, 1, 2, 3]`
// let k = 2;
// let arr = [1, 2, 3, 4, 5]
// let steps = k % arr.length;
// let removedItems = arr.splice(-steps)

// arr.unshift(...removedItems);

// console.log(arr);

// ### 3️⃣ Check if Two Arrays Are Equal (Same Order)

// * **Input:** `[1, 2, 3]` vs `[1, 2, 3]`
// * **Output:** `Equal`

// let arr1 = [1,2,3], arr2 = [1,2,3];
// let result = 'Equal'
// for(let i = 0; i < arr1.length; i++){
//     if(arr1[i] === arr2[i]){
//         result = 'Equal'
//     }
//     else{
//         result = "Not Equal"
//     }
// }

// console.log(result);

// ### 4️⃣ Count Even and Odd Numbers in an Array

// * **Input:** `[2, 5, 7, 8, 10]`
// * **Output:** `Even = 3`, `Odd = 2`
// let arr = [2,5,7,8,10];
// let even = 0, odd = 0;
// for(item of arr){

//     if(item % 2 == 0){
//         even++
//     }
//     else{
//         odd++
//     }
// }

// console.log(even, odd);

// ### 5️⃣ Find All Unique Pairs Whose Sum Equals a Target

// * **Input:** `[1, 2, 3, 4, 5]`, target = 6
// * **Output:** `(1,5), (2,4)`

// let arr = [1,2,3,4,5], target = 6

// for(num of arr){
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] === num){
//             continue;
//         }

//         if(arr[i] + num === target){
//             console.log(`(${arr[i]},${num})`);
//         }
//     }
// }

// ### 6️⃣ Left Shift an Array by One Position

// * **Input:** `[1, 2, 3, 4]`
// * **Output:** `[2, 3, 4, 1]`
//   ✨ Manual shifting, moving first element to end.

// let arr = [1,2,3,4], k = 1;

// let removedItems = arr.shift();
// arr.push(removedItems)

// console.log(arr);


// ### 7️⃣ Count How Many Times an Element Appears in an Array

// * **Input:** array = `[1, 4, 4, 4, 2]`, element = `4`
// * **Output:** `3`

// let arr = [1,4,4,4,2]
// let element = 4;
// let iteration = 0;

// for(num of arr){
//     if(num === element){
//         iteration++
//     }
// }
// console.log(iteration);