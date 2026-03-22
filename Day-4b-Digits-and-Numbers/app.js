// 1. **Split Number into Digits**

//    * Input: `N = 12345`
//    * Output: `[1, 2, 3, 4, 5]`
//    * ✨ *Extract each digit mathematically using, and return them in an array. Do not use string operations.*

// let str = '12345';
// let arr = [];

// while(str > 0){
//     arr.unshift(str % 10)
//     str = Math.floor(str / 10)
// }
// console.log(arr);

// 2. **Reverse a Number**

//    * Input: `N = 1234`
//    * Output: `4321`
//    * ✨ *Teaches how to extract and reconstruct digits using `%` and `/`.*


// let N = 1234;
// let reversedNumber = 0;

// while(N > 0){
//     reversedNumber = (reversedNumber * 10) + N % 10;
//     N = Math.floor(N / 10);
// }

// console.log(`The final reversed value is ${reversedNumber}`);

// 3. **Remove the Decimal Point Mathematically**

//    * Input: `N = 12.34`
//    * Output: `1234`
//    * ✨ *Do not use string operations.*


// let input = '12.34'
// let temp = ''

// for(let i = 0; i < input.length;i++){
//     if(input[i] !== '.'){
//         temp += input[i]
//     }
//     else{
//         continue;
//     }
// }
// console.log(temp);

// 4. **Separate Whole and Fractional Parts of a Number**

//    * Input: `N = 5.75`
//    * Output: `Whole = 5, Fraction = 0.75`
//    * ✨ *Use mathematical logic to separate the integer and fractional portions without using built-in functions. Don't use `Math.trunc()` or `Math.floor()` method.

// let input = 5.75;
// let fractionPart = input % 1;
// let wholePart = input - fractionPart;

// console.log(`The number = ${input}, whole: ${wholePart} and fraction: ${fractionPart}`);

// 5. **Generate a Decimal Number from Whole and Fractional Digits**

//    * Input: `Whole = [1, 2], Fraction = [3, 4]`
//    * Output: `12.34`
//    * ✨ *Form the number mathematically by combining the digits from both arrays using powers of 10.

// let inputWhole = [1,2];
// let inputFraction = [3,4]
// let whole;
// let fraction = 0;
// let finalOutput;
// //whole part
// for(let i = 0; i < inputWhole.length; i++){
//     if(i == 0){
//         whole = inputWhole[i]
//     }
//     else{
//         whole = whole * 10 +  inputWhole[i]
//     }
    
// }
// //fraction part
// for(let j = 0; j < inputFraction.length; j++ ){

//     fraction = fraction + (inputFraction[j] / Math.pow(10, j + 1))
// }
// finalOutput = whole + fraction
// console.log(Number(finalOutput.toFixed(inputFraction.length)));


// . **Check if a Number is a Palindrome**

//    * Input: `N = 121`
//    * Output: `Palindrome`
//    * ✨ *Compares original and reversed numbers to detect symmetry.*

// let N = 121;
// let temp = N;
// let check = 0;

// while(temp > 0){
//     check = (check * 10) + temp % 10;
//     temp = Math.floor(temp / 10)
// }

// if(check === N){
//     console.log("Palindrome");
// }
// else{
//     console.log("Not a Palindrome");
// }

// 7. **Check if a Number is an Armstrong Number (also called a Narcissistic Number)**

//    * Input: `N = 153`
//    * Output: `Armstrong Number`
//    * ✨ *Armstrong Number: `1³ + 5³ + 3³ = 153, 1⁴ + 6⁴ + 3⁴ + 4⁴ = 1634`.*

// let N = 1634
// let temp = N;
// let check = 0
// let power = temp.toString().length

// while(temp > 0){
//     let a = Math.pow(temp % 10, power) ;
//     temp = Math.floor(temp / 10);
//     check = check + a;
// }

// if(check === N){
//     console.log(`${N} is an Armstrong Number.`);
// }
// else{
//     console.log(`${N} is an Not Armstrong Number.`);
// }

// ### 🏠 **Homework / Practice Challenge**

// 1. **Find the Sum of Digits**

//    * Input: `N = 987`
//    * Output: `24`
//    * ✨ *Builds understanding of digit extraction and accumulation.*

// let N = 987;
// let temp = N
// let sum = 0
// while(temp > 0){
//     sum = sum + (temp % 10);
//     temp = Math.floor(temp / 10);
// }

// console.log(sum);


// 2. **Find the Average of Digits**

//    * Input: `N = 4567`
//    * Output: `Average = 5.5`
//    * ✨ *Combines digit sum and count for average computation.*

// let N = 4567;
// let temp = N
// let sum = 0
// let count = 0
// let average = 0
// while(temp > 0){
//     sum = sum + (temp % 10);
//     temp = Math.floor(temp / 10);
//     count++;
// }
// average = sum / count;

// console.log(`The average of ${N} is ${average}`);


// 3. **Find the Largest and Smallest Digit in a Number**

//    * Input: `N = 9483`
//    * Output: `Largest = 9, Smallest = 3`
//    * ✨ *Enhances comparison logic using loops.*
   
// let N = 9483
// let temp = N
// let smallest = 9;
// let largest = 0;

// if (N === 0) {
//     smallest = 0;
//     largest = 0;
// }

// while(temp > 0){
//     let num = temp % 10;

//     if(num > largest){
//         largest = num
//     }
    
//     if(num < smallest){
//         smallest = num
//     }

//     temp = Math.floor(temp / 10)

// }
// console.log(`The largest number is ${largest} and the smallest number is ${smallest}`);


// 4. **Check if a Number is a Strong Number**

//    * Input: `N = 145`
//    * Output: `Strong Number`
//    * ✨ *Applies factorial of each digit and sums them: `1! + 4! + 5! = 145`.*


// let N = 145;
// let temp = N;
// let sum = 0

// while(temp > 0){
//     let num = temp % 10;
//     let product = 1
//     for(let i = 1; i<= num; i++){
//         product = product * i;
//     }
//     sum = sum + product;

//     temp = Math.floor(temp/10)
// }

// if(N === sum){
//     console.log(`The number ${N} is a strong number`);
// }
// else{
//     console.log(`The number ${N} is not a strong number`);
// }

// 5. **Check if a Number is an Automorphic Number**

//    * Input: `N = 25`
//    * Output: `Automorphic Number` *(since 25² = 625 ends with 25)*
//    * ✨ *Practices modulus-based pattern matching.*

// let N = 25;
// let square = N * N;
// let length = N.toString().length
// let lastDigits = square % Math.pow(10, length);

// if(N === lastDigits){
//     console.log(`The number ${N} is a Automorphic Number.`);
// }
// else{
//     console.log(`The number ${N} is not a Automorphic Number.`);
// }

// 6. **Find the Frequency of Each Digit**

//    * Input: `N = 112233`
//    * Output: `1 → 2, 2 → 2, 3 → 2`
//    * ✨ *Combines loops and conditionals for counting repetitions.*

// let N = 112233;
// let temp = N;

// let countData = {}

// while(temp > 0){
//     let num = temp % 10

//     if(num in countData){
//         countData[num] += 1 
//     }
//     else {
//         countData[num] = 1
//     }
//     temp = Math.floor(temp / 10);
// }

// console.log(`The number ${N} has ${Object.entries(countData)}`);

// 7. **Check if a Number is a Harshad Number**

//    * Input: `N = 18`
//    * Output: `Harshad Number` *(since 18 is divisible by 1 + 8 = 9)*
//    * ✨ *Applies divisibility and digit-sum logic together.*


// let N = 18;
// let temp = N;
// let sum = 0

// while(temp > 0){
//     sum = sum + (temp % 10);
//     temp = Math.floor(temp / 10);
// }

// if(N % sum == 0){
//     console.log(`The number ${N} is a Harshed Number.`);
// }
// else{
//     console.log(`The number ${N} is not a Harshed Number.`);
// }

