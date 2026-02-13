// 1. **Find the Maximum of Three Numbers**

// let input = [12,19,100]
// let largest = input[0]

// if(input[1] > largest){
//     largest = input[1]
// }

// if(input[2] > largest){
//     largest = input[2]
// }

// console.log(largest);

//Another Way
// let input = [12,19,100]

// let maxElement = Math.max(...input)


// 2. **Check if a Number is Positive, Negative, or Zero**

// let number = -9

// if(number > 0){
//     console.log('Positive');
// }else if(number < 0){
//     console.log('Negative');
// }else{
//     console.log('Zero');
// }

// let num = 9;

// let outcome = (num > 0) ? 'positive': 'Negative'
// console.log(outcome);


// 3. **Calculate Electricity Bill**
// * Input: `Units = 230`
// * Output: `Total Bill = ₹1500`
// * ✨ *Applies multiple ranges using chained `else if` and cumulative logic.*
// * Example Logic:

//   * 0–100 units → ₹5 per unit
//   * 101–200 units → ₹7 per unit
//   * 201–300 units → ₹10 per unit
//   * Above 300 units → ₹12 per unit

// let input = 230;

// if(input >= 0 && input <= 100){
//     console.log(`Total bill = ${input * 5}`);
// }
// else if(input >= 101 && input <= 200){
//     console.log(`Total bill = ${input * 7}`);
// }
// else if(input >= 201 && input <= 300){
//     console.log(`Total bill = ${input * 10}`);
// }
// else if(input > 300){
//     console.log(`Total bill = ${input * 12}`);
// }


// 4. **Check if a Character is a Vowel or Consonant**

// let input = 'E'
// let temp = input.toLowerCase();

// if(temp == 'a' || temp == 'e' || temp == 'i' || temp == 'o' || temp == 'u'){
//     console.log('Vowel');
// }
// else{
//     console.log('Consonent');
// }


// 5. **Check if a Year is a Leap Year**

// let year = 2026;

// if((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)){
//     console.log(`${year} is a leap year.`);
// }
// else{
//     console.log(`${year} is not a leap year`);
// }


// ### 🏠 **Homework / Practice Challenge**

// 1. **Check if a Character is Uppercase, Lowercase, Digit, or Special Character**

// let char = '/'
// let charCode = char.charCodeAt(0)

// if(charCode >= 65 && charCode <= 90){
//     console.log(`Uppercase Letter`)
// }
// if(charCode >= 97 && charCode <= 122){
//     console.log(`Lowercase Letter`)
// }
// if(charCode >= 48 && charCode <= 57){
//     console.log(`Digits`)
// }
// if((charCode >= 32 && charCode <= 47) || (charCode >= 58 && charCode <= 64) || 
// (charCode >= 91 && charCode <= 96) || (charCode >= 123 && charCode <= 126)){
//     console.log(`Special characters`)
// }

// 2. **Check Triangle Type Using Sides and Angles**

// * **Input:** `Sides = 3, 4, 5`
// * **Output:** `Right-Angled Triangle`
// * ✨ *Combines geometric reasoning + Pythagoras theorem check.*
// * Example Logic:

//   * If `a² + b² = c²` → Right-angled
//   * Else if all sides equal → Equilateral
//   * Else if any two equal → Isosceles
//   * Else → Scalene


// let sides = [1,3,4]

// if((Math.pow(sides[0], 2) + Math.pow(sides[1], 2)) === (Math.pow(sides[2], 2))){
//     console.log('Right-angled Triangle');
// }
// else if(sides[0] == sides[1] && sides[1] == sides[2]){
//     console.log('Equlateral Triangle');
// }
// else if((sides[0] === sides[1]) || (sides[0] === sides[2]) || (sides[1] === sides[2])){
//     console.log('Isosceles Triangle')
// }
// else{
//     console.log('Scalane Triangle');
// }


// 3. **Calculate Income Tax Based on Slabs**

// * **Input:** `Income = ₹7,50,000`
// * **Output:** `Tax = ₹62,500`
// * ✨ *Applies progressive slab logic similar to electricity bill but with financial context.*
// * Example Logic (example slabs):

//   * Up to ₹2,50,000 → No tax
//   * ₹2,50,001 – ₹5,00,000 → 5%
//   * ₹5,00,001 – ₹10,00,000 → 20%
//   * Above ₹10,00,000 → 30%


// let input = 1454583

// if(input >= 0 && input <= 250000){
//     console.log('No Tax');
// }
// else if(input > 250001 && input <= 500000){
//     console.log('Your salary comes under 5% Tax Slab');
//     console.log(`Taxable Amount :- Rs ${input * (5/100)}`);
// }
// else if(input > 500001 && input <= 1000000){
//     console.log('Your salary comes under 20% Tax Slab');
//     console.log(`Taxable Amount :- Rs ${input * (20/100)}`);
// }
// else{
//     console.log('Your salary comes under 30% Tax Slab');
//     console.log(`Taxable Amount :- Rs ${input * (30/100)}`);
// }