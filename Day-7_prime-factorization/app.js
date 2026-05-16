// ## **1. Find the Prime Factorization (Return as an Array)**

// - **Input:** `N = 84`
// - **Output:** `[2, 2, 3, 7]`

// function primeFactorization(n) {
//   let factors = [];
//   let divisor = 2;

//   while (n >= 2) {
//     if (n % divisor === 0) {
//       factors.push(divisor);
//       n = n / divisor;
//     } else {
//       divisor++;
//     }
//   }
//   return factors;
// }

// console.log(primeFactorization(84));

// ## **2. Factorization in Exponent Form**

// - **Input:** `N = 360`
// - **Output:** `"2^3 × 3^2 × 5^1"`

// function primeFactorization(n) {
//   let factors = {};
//   let divisor = 2;
//   let str = "";
//   while (n >= 2) {
//     if (n % divisor === 0) {
//         if(divisor in factors){
//             factors[divisor] += 1;
//             n = n / divisor;
//         }
//         else{
//             factors[divisor] = 1;
//             n = n/ divisor;
//         }
//     } else {
//       divisor++;
//     }
//   }
//   const keys = Object.keys(factors);
//   const keysLength = Object.keys(factors).length
//   keys.forEach((key, index) =>{
//     if(index === keysLength - 1){
//         str = str + key + "^" + factors[key];
//     }
//     else{
//         str = str + key + "^" + factors[key] + " x ";
//     }
//   })

//   return str
// }
// console.log(primeFactorization(360));

// ## **3. Distinct Prime Factor Count**

// - **Input:** `N = 100`
// - **Output:** `Distinct Prime Factors = 2`
//   (Because 100 → 2, 5)

// function primeFactorization(n) {
//   let factors = [];
//   let divisor = 2;
//   while (n >= 2) {
//     if (n % divisor === 0) {
//         if(factors.includes(divisor)){
//             n = n / divisor;
//         }
//         else{
//             factors.push(divisor)
//             n = n/ divisor;
//         }
//     } else {
//       divisor++;
//     }
//   }
//   return factors
// }
// console.log(primeFactorization(100));

// ## **4. Check if a Number Is a Powerful Number**

// A number is **powerful** if every prime factor appears with an exponent ≥ 2.

// - **Input:** `N = 36`
// - **Output:** `Powerful Number`
//   (36 → 2² × 3² → all exponents ≥ 2)

// function primeFactorization(n) {
//   let factors = {};
//   let divisor = 2;
//   let str = "";
//   while (n >= 2) {
//     if (n % divisor === 0) {
//         if(divisor in factors){
//             factors[divisor] += 1;
//             n = n / divisor;
//         }
//         else{
//             factors[divisor] = 1;
//             n = n/ divisor;
//         }
//     } else {
//       divisor++;
//     }
//   }
//   const values = Object.values(factors);
//   let result = true;
//   values.forEach((value) =>{
//     if(value <= 1){
//         result =  false
//     }
//   })

//   return result
// }

// console.log(primeFactorization(12));

// # 🏠 **Homework Questions**

// ## **1. Find the Product of All Distinct Prime Factors**

// - **Input:** `N = 150`
// - **Output:** `Product = 2 × 3 × 5 = 30`

// function primeFactorization(n) {
//   let factors = [];
//   let divisor = 2;
//   while (n >= 2) {
//     if (n % divisor === 0) {
//         if(factors.includes(divisor)){
//             n = n / divisor;
//         }
//         else{
//             factors.push(divisor)
//             n = n/ divisor;
//         }
//     } else {
//       divisor++;
//     }
//   }
//   let product = factors.reduce((product, crrvalue) =>{
//     return product * crrvalue;
//   }, 1)

//   return product
// }

// console.log(primeFactorization(150));

// ## **2. Check if a Number Is a Square-Free Number**

// A number is **square-free** if none of its prime factors repeat.

// - **Input:** `N = 30`
// - **Output:** `Square-Free Number`
//   (2 × 3 × 5 → no repeats)

// function primeFactorization(n) {
//   let factors = {};
//   let divisor = 2;
//   while (n >= 2) {
//     if (n % divisor === 0) {
//         if(divisor in factors){
//             factors[divisor] += 1;
//             n = n / divisor;
//         }
//         else{
//             factors[divisor] = 1;
//             n = n/ divisor;
//         }
//     } else {
//       divisor++;
//     }
//   }
//   const values = Object.values(factors);
//   const bool = true;
//   values.forEach((val) =>{
//     if(val > 1){
//         bool = false
//     }
//   })

//   if(bool == true){
//     console.log(`Square-Free Number`);
//   }
//   else{
//     console.log(`Not a Square-Free Number`);
//   }
// }
// console.log(primeFactorization(30));

// ## **3. Check if a Number Is a Smith Number**

// A composite number whose **sum of digits = sum of digits of prime factors**.

// - **Input:** `N = 666`
// - **Output:** `Smith Number`

// function primeFactorization(n) {
//   let factors = [];
//   let divisor = 2;
//   let numberSum = 0;
//   let temp = n;

//   while (n >= 2) {
//     if (n % divisor === 0) {
//       factors.push(divisor);
//       n = n / divisor;
//     } else {
//       divisor++;
//     }
//   }
//   if (factors.length <= 1) return "Not a Smith Number (Primes excluded)";

//   while (temp > 0) {
//     numberSum = numberSum + (temp % 10);
//     temp = Math.floor(temp / 10);
//   }

//   let factorSum = factors.reduce((sum, val) =>{
//     let tempVal = val;
//     let valSum = 0;

//     while( tempVal > 0){
//         valSum += tempVal % 10;
//         tempVal = Math.floor(tempVal/10)
//     }
//     return sum + valSum;
//   },0)

//   return numberSum === factorSum ? "Smith Number" : "Not a Smith Number";
// }

// console.log(primeFactorization(666));

// ## **4. Check if a Number Is an Ugly Number**

// Ugly numbers have only **2, 3, 5** as prime factors.

// - **Input:** `N = 18`
// - **Output:** `Not Ugly`
//   (Because 18 → 2 × 3 × 3 → allowed)
// - **Input:** `N = 14`
// - **Output:** `Not Ugly`
//   (Contains 7)

// function uglyNumber(n) {
//   let factors = {};
//   let divisor = 2;

//   if (n >= 1) {
//     while (n >= 2) {
//       if (n % divisor === 0) {
//         if (divisor in factors) {
//           factors[divisor] += 1;
//           n = n / divisor;
//         } else {
//           factors[divisor] = 1;
//           n = n / divisor;
//         }
//       } else {
//         divisor++;
//       }
//     }

//     let bool = true;
//     Object.entries(factors).forEach((key, value) =>{
//         if(key === 2 || key === 3 || key === 5){
//             if(value === 1){
//                 bool = true;
//             }
//             else{
//                 bool = false;
//             }
//         }
//         else{
//             bool = false
//         }
//     })

//     if(bool == true){
//         return `Ugly Number.`
//     }
//     else{
//         return `Not Ugly Number.`
//     }
//   }
//   else {
//     return `Re-enter the number.`;
//   }
// }

// console.log(uglyNumber(18));

// ## **5. Check if a Number Is a Kaprekar Number**

// Square the number → split → sum should give the original number.

// - **Input:** `N = 45`
// - **Output:** `Kaprekar Number`
//   (45² = 2025 → 20 + 25 = 45)

// let n = 45;
// let squaredNumber = Math.pow(n, 2)
// let numLength = squaredNumber.toString().length
// let finalArr = []
// let tempArr = []
// let tempNum = squaredNumber;

// while(tempNum > 0){
//     let num = tempNum % 10;
//     tempArr.push(num)
//     tempNum = Math.floor(tempNum/ 10);
// }
// tempArr.reverse()
// let tempStr = "";
// for(let i = 0; i <= tempArr.length - 1; i++){
//     tempStr += tempArr[i]

//     if(i === ((tempArr.length / 2) - 1)){
//         let num = Number(tempStr)
//         finalArr.push(num)
//         tempStr = ""
//     }
//     if(i === tempArr.length - 1){
//         let num = Number(tempStr)
//         finalArr.push(num)
//     }
// }

// let finalNumber = 0;
// for(let i = 0; i <= finalArr.length - 1; i++){
//     finalNumber += finalArr[i];
// }

// if(n === finalNumber){
//     console.log(`Kaprekar Number`);
// }
// else{
//     console.log(`Not a Kaprekar Number`);
// }

// ## **6. Check if a Number Is a Happy Number**

// Repeatedly replace the number with the sum of squares of its digits.
// If it becomes **1**, it is Happy.

// - **Input:** `N = 19`
// - **Output:** `Happy Number`

// let N = 19;

// function happyNumber(num, seen = new Set()){

//     //Base case.
//     if(num === 1){
//         return `Happy Number.`
//     }

//     // 2. Base Case: We found a loop (Unhappy)!
//     if (seen.has(num)) return "Not a Happy Number.";

//     seen.add(num)
//     let current = num;
//     let tempNum = 0;

//     while(current > 0){
//         let n = current % 10;
//         tempNum += Math.pow(n, 2)
//         current = Math.floor(current/10)
//     }

//     return happyNumber(tempNum, seen)
// }

// console.log(happyNumber(19));

// ## **7. Number Base Conversion (Any Base to Any Base)**

// - **Input:** `Number = "101101", From Base = 2, To Base = 10`
// - **Output:** `45`

// function numberBaseConversion(input, from, to) {
//   let output = 0;
//   let tempNum = input;

//   // Base 2 to 10;
//   if (from === 2 && to === 10) {
//     for (let i = 0; i < input.toString().length; i++) {
//       let num = tempNum % 10;
//       if (num === 1) {
//         output = output + Math.pow(2, i);
//       }
//       tempNum = Math.floor(tempNum / 10);
//     }
//   }
//   //Base 2 to 8 (by 3-bit rule)
//   else if (from === 2 && to === 8) {
//     let bitPosition = 0;
//     let tempNum = input;
//     let tempOutput = 0;
//     let arr = [];

//     while (tempNum > 0) {
//       let digit = tempNum % 10;
//       if (digit === 1) {
//         tempOutput += Math.pow(2, bitPosition);
//       }

//       tempNum = Math.floor(tempNum / 10);
//       bitPosition++;

//       if (bitPosition === 3 || tempNum === 0) {
//         arr.push(tempOutput);
//         tempOutput = 0;
//         bitPosition = 0;
//       }
//     }
//     arr.reverse();
//     for (const num of arr) {
//       output = output * 10 + num;
//     }
//   }

//   //Base 2 to Base 6;
//   //first we will convert base 2 --> base 10 then base 10 --> base 6;
//   else if (from === 2 && to === 6) {
//     let firstOutput = 0;
//     for (let i = 0; i < input.toString().length; i++) {
//       let num = tempNum % 10;
//       if (num === 1) {
//         firstOutput = firstOutput + Math.pow(2, i);
//       }
//       tempNum = Math.floor(tempNum / 10);
//     }
//     //base 10 number
//     let digit = firstOutput;
//     let arr = [];
//     while (digit > 0) {
//       let remainder = digit % 6;
//       let quotient = Math.floor(digit / 6);
//       digit = quotient;
//       arr.push(remainder);
//     }
//     arr.reverse();

//     for (const num of arr) {
//       output = output * 10 + num;
//     }
//   }
//   //base 10 to base 2
//   else if (from === 10 && to === 2) {
//     let tempNum = input;
//     let arr = [];
//     while (tempNum > 0) {
//       let remainder = tempNum % 2;
//       let quotient = Math.floor(tempNum / 2);
//       arr.push(remainder);
//       tempNum = quotient;
//     }
//     output = arr.reverse();
//   }
//   //base 10 to base 8
//   else if (from === 10 && to === 8) {
//     let tempNum = input;
//     let arr = [];
//     while (tempNum > 0) {
//       let remainder = tempNum % 8;
//       let quotient = Math.floor(tempNum / 8);
//       arr.push(remainder);
//       tempNum = quotient;
//     }
//     output = arr.reverse();
//   }
//   //base 10 to base 6
//   else if (from === 10 && to === 6) {
//     let tempNum = input;
//     let arr = [];
//     while (tempNum > 0) {
//       let remainder = tempNum % 6;
//       let quotient = Math.floor(tempNum / 6);
//       arr.push(remainder);
//       tempNum = quotient;
//     }
//     output = arr.reverse();
//   }
//   //base 8 to base 2;
//   else if(from === 8 && to === 2){
//     const lookup = {
//         '0': '000', '1': '001', '2': '010', '3': '011',
//         '4': '100', '5': '101', '6': '110', '7': '111'
//     }
//     let tempNum = input;
//     let binaryString = "";

//     while(tempNum > 0){
//       let digit = tempNum % 10;
//       binaryString = lookup[digit] + binaryString
//       tempNum = Math.floor(tempNum / 10);
//     }
//     output = binaryString.replace(/^0+/, "") || "0";

//   }
//   //base 8 to base 10
//   else if(from === 8 && to === 10){
//     let temp = input;
//     let totalSum = 0
//     for(let i = 0; i < input.toString().length; i++){
//       let num = temp % 10;
//       totalSum = totalSum + num * Math.pow(8,i)
//       temp = Math.floor(temp / 10);
//     }
//     output = totalSum;
//   }
//   //base 8 to base 6
//   else if(from === 8 && to === 6){
//     //base 8 to base 10
//     let temp = input;
//     let totalSum = 0
//     for(let i = 0; i < input.toString().length; i++){
//       let num = temp % 10;
//       totalSum = totalSum + num * Math.pow(8,i)
//       temp = Math.floor(temp / 10);
//     }
//     //now base 10 to base 6
//     let finalTemp = totalSum;
//     let arr = [];
//     while (finalTemp > 0) {
//       let remainder = finalTemp % 6;
//       let quotient = Math.floor(finalTemp / 6);
//       arr.push(remainder);
//       finalTemp = quotient;
//     }
//     // output = arr.reverse().join("");
//     arr.reverse().forEach(digit => {
//     output = output * 10 + digit;
//   });
//   }

//   return output;
// }

// console.log(numberBaseConversion(123, 8, 6));

// function numberBaseConversion(input, from, to) {
//     if (input === 0 || input === "0") return 0;

//     let decimalValue = 0;
//     let inputStr = input.toString();
//     let power = 0;

//     // STEP 1: Convert to Decimal with VALIDATION
//     for (let i = inputStr.length - 1; i >= 0; i--) {
//         let digit = parseInt(inputStr[i], from); 
        
//         // VALIDATION: Check if the digit is valid for the 'from' base
//         if (isNaN(digit) || digit >= from) {
//             return `Error: Invalid digit "${inputStr[i]}" for Base ${from}`;
//         }

//         decimalValue += digit * Math.pow(from, power);
//         power++;
//     }

//     // STEP 2: Convert Decimal to 'to' base
//     let result = "";
//     while (decimalValue > 0) {
//         let remainder = decimalValue % to;
//         result = remainder.toString(to) + result; 
//         decimalValue = Math.floor(decimalValue / to);
//     }

//     // Return as number if it's strictly digits, otherwise string
//     return /^\d+$/.test(result) ? parseInt(result) : result;
// }

// // TEST CASES:
// console.log(numberBaseConversion(102, 2, 10));  // "Error: Invalid digit "2" for Base 2"
// console.log(numberBaseConversion("G", 16, 10)); // "Error: Invalid digit "G" for Base 16"
// console.log(numberBaseConversion("AF", 16, 10)); // 175 (Valid)


// ## **8. Swap Variable without using third variable**

// - **Input:** `a = 5, b = 6`
// - **Output:** `a = 6, b = 5`

// let a = 5;
// let b = 6;
// a = a + b;
// b = a - b;
// a = a - b;
// console.log(`a = ${a} and b = ${b}`);