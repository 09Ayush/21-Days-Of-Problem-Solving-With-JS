//1. Split Number into Digits
// let str = '12345'
// let arr = []

// while(str > 0){
//     arr.unshift(str % 10)
//     str = Math.floor(str / 10)
// }
// console.log(arr);

// 2. **Remove the Decimal Point Mathematically**

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

// 3. **Separate Whole and Fractional Parts of a Number**

//    * Input: `N = 5.75`
//    * Output: `Whole = 5, Fraction = 0.75`

// let input = 5.75;

// let fractionPart = input % 1;
// let wholePart = input - fractionPart;

// console.log(`The number = ${input}, whole: ${wholePart} and fraction: ${fractionPart}`);

// 4. **Count Whole and Fractional Digits Separately**

// * Input: `N = 12.345`
// * Output: `Whole Count = 2, Fraction Count = 3`

// let input = 5.75676756;
// let wholeCount = 0;
// let fractionCount = 0;
// let fractionPart = Number((input % 1).toFixed(10));
// let wholePart = input - fractionPart;

// while (wholePart > 0) {
//   wholePart = wholePart / 10;
//   wholePart = Math.floor(wholePart);
//   wholeCount++;
// //   console.log(temp);
// }

// while (fractionPart > 0) {
//   let temp = fractionPart * 10;
//   temp = Number((temp % 1).toFixed(10));
//   fractionCount++;
//   fractionPart = temp;
// }
// console.log(`The number = ${input} and the whole count: ${wholeCount} and the fraction count: ${fractionCount}`);

// 5. **Generate a Decimal Number from Whole and Fractional Digits**

// Input: `Whole = [1, 2], Fraction = [3, 4]`
//    * Output: `12.34`

let inputWhole = [1,2];
let inputFraction = [3,4]
let whole;
let fraction = 0;
let finalOutput;
//whole part
for(let i = 0; i < inputWhole.length; i++){
    if(i == 0){
        whole = inputWhole[i]
    }
    else{
        whole = whole * 10 +  inputWhole[i]
    }
    
}
// //fraction part
// for(let j = 0; j < inputFraction.length; j++ ){

//     fraction = fraction + (inputFraction[j] / Math.pow(10, j + 1))
// }
// finalOutput = whole + fraction
// console.log(Number(finalOutput.toFixed(inputFraction.length)));

//By using build-in methods

// const inputWhole = [1, 2];
// const inputFraction = [3, 4];

// const whole = inputWhole.reduce((acc, digit) => acc * 10 + digit, 0);
// const fraction = inputFraction.reduce((acc, digit, i) => acc + digit / Math.pow(10, i + 1), 0);

// const finalOutput = Number((whole + fraction).toFixed(inputFraction.length));
// console.log(finalOutput);


