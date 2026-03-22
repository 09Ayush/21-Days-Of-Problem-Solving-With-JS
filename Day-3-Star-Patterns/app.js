// ## 🎯 **Day 3 – Loops & Patterns**

// 1. **Print Right-Angled Star Triangle**

// * Input: `Rows = 5`
//    * Output:

//      ```
//  *
//  **
//  ***
//  ****
//  *****

// let input = 5
// let row = ""
// for(let i = 1; i<= input; i++){
//     // process.stdout.write("*" * i);
//     row += "*"
//     console.log(row);
//     // console.log("*".repeat(i));
// }

// 2. **Print Inverted Right-Angled Triangle**

//    * Input: `Rows = 5`
//    * Output:

//      ```
//  *****
//  ****
//  ***
//  **
//  *

// let input = 5
// for(let i = input; i>= 1; i--){
//     let row = ""
//     for(let j = 1; j<=i; j++){
//         row = row + "*"
//     }
//     console.log(row);
// }

// 3. **Print Pyramid Pattern**
// * Input: `Rows = 5`
//    * Output:

//     *
//    ***
//   *****
//  *******
// *********

// let input = 5;

// for(let i = 1; i<= input;i++){
//     let result = ""

//     //adding spaces
//     for(let k = 1; k<= input - i; k++){
//         result += " "
//     }

//     //adding stars
//     for(let j = 1; j <= (2 * i - 1); j++){
//         result += "*"
//     }

//     console.log(result)
// }

// 4. **Print Inverted Pyramid Pattern**

//    * Input: `Rows = 5`
//    * Output:

//  *********
//   *******
//    *****
//     ***
//      *

// let input = 5;

// for (let i = 0; i < input; i++) {
//     let rowOutput = "";

//     // Loop 1: Handle the leading spaces
//     for (let j = 0; j < i ; j++) {
//         rowOutput += " ";
//     }

//     // Loop 2: Handle the stars
//     for (let k = 0; k < (2 * (input - i) - 1); k++) {
//         rowOutput += "*";
//     }
//     console.log(rowOutput);
// }

// 5. **Print Hollow Square Pattern**

//    * Input: `Rows = 5`
//    * Output:

//      ```
// *****
// *   *
// *   *
// *   *
// *****
//      ```
//    * ✨ *Practices conditional printing within nested loops.*

// let input = 5
// for(let i = 1; i<=input; i++){
//     let output = ''

//     if(i === 1 || i === input){
//         for(let j = 1; j <= input; j++){
//             output+= '*'
//         }
//         console.log(output);
//     }
//     else{
//         for(let j = 1; j<= input; j++){
//             if(j === 1 || j === input){
//                 output += '*'
//             }
//             else{
//                 output += ' '
//             }
//         }
//         console.log(output);
//     }

// }

// let input = 5
// for(let i = 1; i<=input; i++){
//     let output = ''

//     for(let j = 1; j<= input; j++){
//        if(i == 1 || i == input || j == 1 || j == input){
//             output += '*'
//         }
//         else{
//             output += ' '
//         }
//     }
//     console.log(output);
// }

// 6. **Print Hollow Pyramid Pattern**

//    * Input: `Rows = 5`
//    * Output:

//      ```
//      *
//     * *
//    *   *
//   *     *
//  *********
//      ```
//    * ✨ *Combines conditionals and symmetrical logic in loops.*

// let input = 5
// for(let i = 1; i<=input; i++){
//     let str = ''

//     //outer spacing
//     for (let k = 1; k <= input - i; k++) {
//         str += ' ';
//     }

//     //star and inner spacing
//     for(let j = 1; j<= 2 * i -1; j++){
//         if(j == 1 || i == 1 || i == input || j == (2 * i - 1)){
//             str += '*'
//         }
//         else{
//             str += ' '
//         }
//     }
//     console.log(str);
// }

// 7. **Print Alternating Binary Triangle**

//    * Input: `Rows = 5`
//    * Output:

//      ```
// 1
// 0 1
// 1 0 1
// 0 1 0 1
// 1 0 1 0 1
//      ```
//    * ✨ *Combines parity logic with nested loops.*

// let input = 5;
// for (let i = 1; i <= input; i++) {
//   let str = "";
//   for (let j = 1; j <= i; j++) {
//     if (i % 2 != 0)  {
//         if(j % 2 != 0){
//             str += "1 "
//         }
//         else{
//             str += "0 "
//         }
//     }
//     else{
//         if(j % 2 != 0){
//             str += "0 "
//         }
//         else{
//             str += "1 "
//         }
//     }
//   }
//   console.log(str);
// }

// ### 🏠 **Homework / Practice Challenge**

// 1. **Print Hollow Inverted Pyramid**

//    * Input: `Rows = 5`
//    * Output:

//      ```
//      *********
//       *     *
//        *   *
//         * *
//          *
//      ```
//    * ✨ *Focuses on conditionally printing edges and spaces.*

// let input = 5

// for(let i = 1; i<= input; i++){
//     let str = ""

//     for(let k = input; k > (input - i) + 1; k--){
//         str += " "
//     }

//     for(let j = 1; j <= (2 * input) - (2 * i - 1); j++){
//         if(i == 1){
//             str += "*"
//         }
//         else{
//             if(j === 1 || j === ((2 * input) - (2 * i - 1))){
//                 str += "*"
//             }
//             else{
//                 str += " "
//             }
//         }
//     }

//     console.log(str);
// }

// 2. **Print Butterfly Pattern**

//    * Input: `Rows = 5`
//    * Output:

//      ```

// *       *
// **     **
// ***   ***
// **** ****
// *********
// **** ****
// ***   ***
// **     **
// *       *
//      ```
//    * ✨ *Combines multiple sections with symmetry logic.*

// let n = 5
// for (let i = 1; i <= n; i++) {

//     let str1 = ""
//     // upper left side pattern
//     for (let j = 1; j <= i; j++) {
//         str1 += "*"
//    }

//     // Upper Spaces
//     for (let k = 1; k <= (2 * n) - (2 * i) - 1; k++) {
//         if(i == n){
//             break
//         }
//         str1 += " "
//     }
//     //Upper right side pattern
//     for (let l = 1; l <= i; l++) {
//         if(l == 5){
//             break
//         }
//         str1 += "*"
//     }

//     console.log(str1);
// }

// for (let a = 1; a <= n - 1; a++) {
//     let str2 = ""

//     //Lower left star pattern
//     for (let b = 1; b <= n - a; b++) {
//         str2 += "*"
//     }

//     //Lower space Pattern
//     for (let c = 1; c <= (2 * a) - 1; c++) {
//         str2 += " "
//     }

//     //Lower right star pattern
//     for (let d = 1; d <= n - a; d++) {
//         str2 += "*"
//     }
//     console.log(str2);
// }

// 3. **Print Diamond Pattern**

//    * Input: `Rows = 3`
//    * Output:

//      ```
//          *
//         ***
//        *****
//         ***
//          *

// let input = 3;
// for (let i = 1; i <= input + (input - 1); i++) {
//   let str = "";

//   if (i <= input) {
//     //upper space
//     for (let j = 1; j <= input - i; j++) {
//       str += " ";
//     }

//     //upper stars
//     for (let k = 1; k <= 2 * i - 1; k++) {
//       str += "*";
//     }
//   }
//   else{

//     let n = i - input ;
//     //lower spaces
//     for(let a = 1; a <= n  ; a++){
//       str += " "
//     }

//     //lower stars
//     for(let b = 1; b <= 2 * (input - n) - 1; b++){
//       str += "*"
//     }
//   }
//   console.log(str);
// }


// 4. **Print Hourglass Pattern**

//    * Input: `Rows = 5`
//    * Output:

//      ```
//      *********
//       *******
//        *****
//         ***
//          *
//         ***
//        *****
//       *******
//      *********
//      ```
//    * ✨ *Practices combining inverse loops and symmetrical shapes.*

// let input = 5
// for(i = 1; i <= input; i++){

//     let str = ''

//     //Upper Spaces
//     if(i > 1){
//         for(let b = 1; b <= i - 1; b++){
//             str += ' '
//         }
//     }

//     //Upper Pattern
//     for(let a = 1; a <= (2 * input) - (i * 2) + 1; a++){
//         str += '*'
//     }
//     console.log(str);
// }

// for(j = 1; j <= input - 1; j++){
//     let str = ''

//     //lower spaces
//     if(j < input - 1){
//         for (let a = 2; a <= input - j; a++) {
//             str += ' ';
//         }
//     }

//     //lower stars
//     for(let k = 1; k <= 2 * j + 1; k++){
//         str += '*'
//     }

//     console.log(str);
// }

// 5. **Print Hollow Diamond Pattern**

//    * Input: `Rows = 3`
//    * Output:

//      ```
//          *
//         * *
//        *   *
//         * *
//          *

// let input = 3;

// for(let i = 1; i<= input; i++){
//     let str = ""
//     //upper spaces
//     for(let a = 1; a <= input - i; a++){
//         str += " "
//     }
//     //upper stars;
//     for(let b = 1; b <= 2 * i - 1; b++){
//         if(b == 1 || b == (2 * i) - 1){
//             str += "*"
//         }
//         else{
//             str += " "
//         }
//     }
//     console.log(str);
// }

// for(let j = 1; j <= input - 1; j++){
//     let str = ""
//     //lower spaces
//     for(let a = 1; a <= j; a++){
//         str += " "
//     }

//     //lower stars
//     for(let b = 1; b <= (2 * input) - (j * 2) -1; b++){
//         if(b == 1 || b == (2 * input) - (j * 2) -1){
//             str += "*"
//         }
//         else{
//             str += " "
//         }
//     }

//     console.log(str)
// }

// 6. **Print Rhombus Pattern**

//    * Input: `Rows = 5`
//    * Output:

//      ```
//          *****
//         *****
//        *****
//       *****
//      *****

// let input = 5;
// for(i = 1; i<= input; i++){
//     let str = ""

//     //spaces
//     if(i < input){
//         for(b = 1; b <= input - i; b++){
//         str += " "
//         }
//     }

//     //stars
//     for(a = 1; a <= input; a++){
//         str += "*"
//     }

//     console.log(str);
// }
