// 1. **Check if a Number is Prime**

//    - **Input:** `7`
//    - **Output:** `Prime Number`

// function isPrime(num) {
//   let factorsCount = 0;
//   for (let i = 1; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) {
//       factorsCount++;
//       const otherPair = num / i;
//       if (i !== otherPair) factorsCount++;
//     }
//   }

//   return factorsCount === 2;
// }

// console.log(isPrime(7));

// 2. **Check if two Numbers are Co-Prime**

//    - **Input:** `(7, 8)`
//    - **Output:** `Co-Prime`

// function coPrime(a,b){
//     let arr1 = []
//     let arr2 = []

//     for(let i = 1; i<=a; i++){
//         if(a % i === 0){
//             arr1.push(i)
//         }
//     }

//     for(let i = 1; i<=b; i++){
//         if(b % i === 0){
//             arr2.push(i)
//         }
//     }

//     const set2 = new Set(arr2);

//     let commonFactors = arr1.filter(item => set2.has(item));
//     return commonFactors.length === 1
// }

// 3. **Print Fibonacci Series up to N Terms**

//    - **Input:** `N = 10`
//    - **Output:** `0, 1, 1, 2, 3, 5, 8, 13, 21, 34`

// function fibonacciSeries(N) {
//   let a = 0;
//   let b = 1;
//   let fibonacciSeriesList = [];
//   for (let i = 1; i <= N; i++) {
//     if (i === 1) {
//       fibonacciSeriesList.push(a);
//     }
//     if (i === 2) {
//       fibonacciSeriesList.push(b);
//     }
//     if (i > 2) {
//       let sum = a + b;
//       a = b;
//       b = sum;
//       fibonacciSeriesList.push(sum);
//     }
//   }

//   return fibonacciSeriesList
// }

// console.log(fibonacciSeries(10));

// 4. **Find the Nth Fibonacci Number**

//    - **Input:** `N = 8`
//    - **Output:** `13`

// function fibonacciSeriesOfNth(N) {
//   let a = 0;
//   let b = 1;
//   for (let i = 1; i <= N - 2; i++) {
//     let sum = a + b;
//     a = b;
//     b = sum;

//     if(i === N - 2){
//         return sum
//     }
//   }
// }

// console.log(fibonacciSeriesOfNth(10));

// 5. **Check if a Number Belongs to the Fibonacci Series**

//    - **Input:** `21`
//    - **Output:** `Yes`

// function numberExistInFibonacci(N) {
//   let a = 0;
//   let b = 1;
//   let bool;
//   for (let i = 1; i <= N - 2; i++) {
//     let sum = a + b;
//     a = b;
//     b = sum;

//     if(sum === N){
//         bool = true;
//         break
//     }else{
//         bool = false;
//     }
//   }
//   return bool;
// }

// console.log(numberExistInFibonacci(35));

// ## 🏠 **Homework Questions**

// 1. **Print All Prime Numbers up to N**

//    - **Input:** `N = 20`
//    - **Output:** `2, 3, 5, 7, 11, 13, 17, 19`

// function primeList(num) {

//   let primeList = [];
//   for (let i = 1; i <= num; i++) {
//     let factorsCount = 0;
//     for (let j = 1; j <= Math.sqrt(i); j++) {
//       if (i % j === 0) {
//         factorsCount++;
//         const otherPair = i / j;
//         if (j !== otherPair) factorsCount++;
//       }
//     }

//     if(factorsCount === 2){
//         primeList.push(i)
//     }
//   }
//   return primeList;
// }
// console.log(primeList(20));

// 2. **Sum of All Prime Numbers till N**

//    - **Input:** `N = 10`
//    - **Output:** `Sum = 17`

// function primeList(num) {

//   let sum = 0;
//   for (let i = 1; i <= num; i++) {
//     let factorsCount = 0;
//     for (let j = 1; j <= Math.sqrt(i); j++) {
//       if (i % j === 0) {
//         factorsCount++;
//         const otherPair = i / j;
//         if (j !== otherPair) factorsCount++;
//       }
//     }

//     if(factorsCount === 2){
//         sum += i;
//     }
//   }
//   return sum;
// }
// console.log(primeList(10));

// 3. **Check if Two Numbers are Twin Primes**

//    - **Input:** `(3, 5)`
//    - **Output:** `Twin Primes`

// function twinPrime(n1, n2) {
//   let numbers = [n1, n2];
//   let obj = {};
//   for (let a = 0; a <= numbers.length - 1; a++) {
//   let factorsCount = 0;

//     for (let b = 1; b <= Math.sqrt(numbers[a]); b++) {
//       if (numbers[a] % b === 0) {
//         factorsCount++;
//         const otherPair = numbers[a] / b;
//         if (b !== otherPair) factorsCount++;
//       }
//     }
//     if(factorsCount === 2){
//         obj[numbers[a]] = 2;
//     }
//   }

//   if(obj[numbers[0]] === 2 && obj[numbers[1]] === 2){
//     if(numbers[0] - numbers[1] === 2){
//         return true;
//     }
//     else{
//         return false;
//     }
//   }

// }

// console.log(twinPrime(3,5));

// 4. **Print All Fibonacci Numbers up to a Given Limit**

//    - **Input:** `Limit = 100`
//    - **Output:** `0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89`

// let limit = 100;
// let a = 0;
// let b = 1;
// let fibonacciList = []
// for(let i = 1; i <= limit; i++){
//     if(i == 1){
//         fibonacciList.push(a)
//     }

//     if(i == 2){
//         fibonacciList.push(b);
//     }

//     if(i > 2){
//         sum = a + b;
//         a = b;
//         b = sum;
//         fibonacciList.push(sum)
//     }
// }
// console.log(fibonacciList);

// 5. **Generate Fibonacci Numbers Within a Range**

//    - **Input:** `Start = 10, End = 100`
//    - **Output:** `13, 21, 34, 55, 89`

// let start = 10;
// let end = 100;
// let a = 0;
// let b = 1;
// let fibonacciList = []
// let bool = true

// while(bool){
//     sum = a + b;
//     a = b;
//     b = sum;
//     if(sum >= start && sum <= end){
//         fibonacciList.push(sum)
//     }

//     if(sum >= end){
//         break;
//     }
// }
// console.log(fibonacciList);

// 6. **Find the Sum of Even Fibonacci Numbers up to N Terms**

//    - **Input:** `N = 10`
//    - **Output:** `Sum = 44` (`2 + 8 + 34`)

// let N = 10;
// let a = 0;
// let b = 1;
// let output = 0;

// for(let i = 1; i <= N; i++){
//     sum = a + b;
//     a = b;
//     b = sum;
//     if(sum % 2 == 0){
//         output += sum
//     }
// }
// console.log(output);

// 7. **Check if the Sum of Two Consecutive Fibonacci Numbers is Prime**

//    - **Input:** `(5 + 8)`
//    - **Output:** `13 is Prime`

// function fibonacciIsPrime(a, b) {
//   let num = a + b;
//   let factorsCount = 0;
//   for (let i = 1; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) {
//       factorsCount++;
//       const otherPair = num / i;
//       if (i !== otherPair) factorsCount++;
//     }
//   }
//   if(factorsCount === 2){
//     return true
//   }
//   else{
//     false
//   }
// }

// console.log(fibonacciIsPrime(5,8));

// 8. **Print First N Prime Fibonacci Numbers**

//    - **Input:** `N = 5`
//    - **Output:** `2, 3, 5, 13, 89`

// function nPrimeFibonacciNumbers(N) {
//   let a = 0;
//   let b = 1;
//   let arr = [];

//   while (true) {
//     let factorsCount = 0;
//     let sum = a + b;
//     a = b;
//     b = sum;
//     for (let i = 1; i <= Math.sqrt(sum); i++) {
//       if (sum % i === 0) {
//         factorsCount++;
//         const otherPair = sum / i;
//         if (i !== otherPair) factorsCount++;
//       }
//     }
//     if (factorsCount === 2) {
//       arr.push(sum);
//     } 
//     else {
//       continue;
//     }

//     if (arr.length === N) {
//       break;
//     }
//   }

//   return arr;
// }

// console.log(nPrimeFibonacciNumbers(5));