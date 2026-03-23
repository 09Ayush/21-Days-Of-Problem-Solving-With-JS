// 1. **Print All Factors of a Number**

//    * **Input:** `N = 24`
//    * **Output:** `[1, 2, 3, 4, 6, 8, 12, 24]`

// let N = 24;
// let factors = [];

// for(let i = 1; i <= N; i++){
//     if(N % i == 0){
//         factors.push(i);
//     }
//     else{
//         continue;
//     }
// }

// console.log(`The factors of number ${N} are ${factors}`);

// 2. **Print All Multiples of a Number up to N**

//    * **Input:** `Number = 4, Limit = 30`
//    * **Output:** `[4, 8, 12, 16, 20, 24, 28]`

// let num = 4;
// let limit = 30
// let list = []

// for(let i = 1; i< limit; i++){
//     let tempNum = num * i;

//     if(tempNum < limit){
//         list.push(tempNum)
//     }
//     else
//         break
// }

// console.log(`All the multiples of number ${num} with the limit of ${limit} are: ${list}`);

// 3. **Find the HCF (Highest Common Factor) or GCD of Two Numbers**

//    * **Input:** `12, 18`
//    * **Output:** `HCF = 6`

// let N1 = 12;
// let N2 = 18;
// let commonFactors = []
// let limit = Math.min(N1, N2);

// for(let i = 1; i <= limit; i++){
//     if(N1 % i === 0 && N2 % i == 0){
//         commonFactors.push(i)
//     }
// }

// let gcd = Math.max(...commonFactors);
// console.log(`The HCF of ${N1} and ${N2} is ${gcd}`);

// 4. **Find the LCM (Least Common Multiple) of Two Numbers**

//    * **Input:** `12, 18`
//    * **Output:** `LCM = 36`

// let N1 = 12;
// let N2 = 18;
// let commonFactors = []
// let limit = Math.min(N1, N2);

// for(let i = 1; i <= limit; i++){
//     if(N1 % i === 0 && N2 % i == 0){
//         commonFactors.push(i)
//     }
// }
// let gcd = Math.max(...commonFactors);
// let LCM = Math.abs(N1 * N2) / gcd;

// console.log(`The LCM of ${N1} and ${N2} is ${LCM}`);


// ## 🏠 **Homework Questions**

// 1. **Count the Total Number of Factors of a Number**

//    * **Input:** `N = 24`
//    * **Output:** `8 Factors`

// let N = 24;
// let count = 0;
// for(let i = 1; i<= N; i++){

//     if(N % i === 0){
//         count += 1;
//     }
// }

// console.log(`The number ${N} has ${count} factors.`);

// 2. **Sum of All Factors of a Number**

//    * **Input:** `N = 12`
//    * **Output:** `Sum = 28`

// let N = 12;
// let sum = 0;
// for(let i = 1; i<= N; i++){

//     if(N % i === 0){
//         sum += i;
//     }
// }

// console.log(`Sum of All Factors of Number ${N} is ${sum}`);

// 3. **Find the Greatest Factor of a Number (Other Than Itself)**

//    * **Input:** `N = 36`
//    * **Output:** `18`

// let N = 36;
// let Factors = []

// for(let i = 1; i <= N; i++){
//     if(N % i === 0 ){
//         Factors.push(i)
//     }
// }

// let max = Math.max(...Factors);
// let secondMax = 0;

// for(let num of Factors){
//     if(num > max){
//         secondMax = max;
//         max = num
//     }
//     else if(num > secondMax && num < max){
//         secondMax = num
//     }
// }

// console.log(`The second max GCD of ${N} is ${secondMax}`);

// 4. **Check if a Number is a Perfect Number**

//    * **Input:** `N = 28`
//    * **Output:** `Perfect Number`
//    * If sum of all proper divisors = number → Perfect Number.

// let N = 28;
// let sum = 0
// for(let i = 1; i<= N; i++){

//     if(i === N){
//         continue
//     }
//     else if(N % i == 0){
//         sum += i
//     }
// }

// if(sum === N){
//     console.log(`${N} is a perfect number.`);
// }
// else{
//     console.log(`${N} is not a perfect number.`);
// }


// 5. **Find the HCF and LCM of Three Numbers**

//    * **Input:** `8, 12, 16`
//    * **Output:** `HCF = 4, LCM = 48`

// let N1 = 8;
// let N2 = 12;
// let N3 = 16
// let hcf = HCF(N1, N2);
// let finalHcf = HCF(hcf, N3);

// let lcm1 = LCM(N1, N2, HCF(N1, N2))
// let finalLCM = LCM(lcm1, N3, HCF(lcm1, N3))

// console.log(`The HCF: ${finalHcf} and The LCM: ${finalLCM}`);


// function HCF(a,b){
//     let commonFactors = []
//     let limit = Math.min(a,b)

//     for(let i = 1; i <= limit; i++){
//     if(a % i === 0 && b % i === 0){
//         commonFactors.push(i)
//         }
//     }
//     let HCF = Math.max(...commonFactors);
//     return HCF
// }

// function LCM(a,b,hcf){
//     let output = Math.abs(a * b)/ hcf;
//     return output;
// }
