// // 1. Print Numbers from 1 to N
// let num = 5;

// for(let i = 1; i<=num;i++){
//     console.log(i);
//     // process.stdout.write(i + " ");
// }

// // 2. Print Numbers from N to 1 without changing the loop condition of above question
// let num = 5;

// for(let i = 1; i<=num;i++){
//     console.log(num - i + 1);
// }

// //3. Print All Even Numbers from 1 to N
// let num = 10;

// for(let i = 1; i<=num;i++){
//     if(i % 2 == 0){
//         console.log(i);
//     }
// }


// // 4. Sum of First N Natural Numbers

// let num = 10;
// let sum = 0

// for(let i = 1; i<= num; i++){
//     sum += i;
// }
// console.log(`The total of ${num} numbers is : ${sum}`);

// // 5. Product (Factorial) of N

// let num = 5;
// let output = 1;

// for(let i = 1; i<=num; i++){
//     output *= i
// }

// console.log(`The Factorial of ${num} is : ${output}`);

// // 6. Sum of All Even Numbers up to N

// let num = 10;
// let output = 0

// for(let i = 1; i<=num;i++){
//     if(i % 2 == 0){
//         output += i
//     }
// }

// console.log(output);


// // 7. Print Squares of Numbers from 1 to N

// let num = 5;

// for(let i = 1; i<=num; i++){
//     console.log(i * i);
// }



// //  **Homework / Practice Challenge**

// // 1. **Print all numbers divisible by 3 and 5 up to N**

// let num = 30;

// for(let i = 1; i<=num;i++){

//     if(i % 3 == 0 && i % 5 == 0){
//         console.log(i);
//     }
// }


// // 2. **Find the sum of all odd numbers up to N**

// let num = 15;
// let output = 0

// for(let i = 1; i<=num;i++){
//     if(i % 2 != 0){
//         output += i
//     }
// }

// console.log(output);

// // 3. **Print the cubes of numbers from 1 to N**

// let num = 5;

// for(let i = 1; i<=num;i++){

//     console.log(i * i * i);
// }



// // 4. **Print only the numbers that are both even and perfect squares**

// let limit = 20
// console.log(`Even perfect squares up to ${limit}:`);
    
// for (let i = 1; i <= limit; i++) {
//     const root = Math.sqrt(i);
//     console.log(object);
//     // Check if even AND check if root is a whole number
//     if (i % 2 === 0 && root === Math.floor(root)) {
//         console.log(`${i} is even and a perfect square root`);
//     }
// }