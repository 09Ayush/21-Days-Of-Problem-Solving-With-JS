// ### **1️⃣ Reverse a String (Manual Method Only)**
// - **Input:** `"javascript"`
// - **Output:** `"tpircsavaj"`
//   ✨ _Use a loop — no `.reverse()`._

// let input = "javascript"
// let reversedStr = ""

// for(let i = input.length - 1; i >= 0; i--){
//     reversedStr = reversedStr +  input[i] ;
// }

// console.log(reversedStr);

// ### **2️⃣ Check if a String is a Palindrome**

// - **Input:** `"racecar"`
// - **Output:** `Palindrome`
//   ✨ _Compare characters from both ends using two-pointer logic._

// let input = "racecar"
// let reversedStr = ""
// let strLength = input.length - 1
// let bool = true;
// for(let i = strLength; i >= 0; i--){
//     reversedStr = reversedStr +  input[i] ;
// }

// for(let i = 0; i <= strLength; i++){
//     if(input[i] === reversedStr[i]){
//         continue;
//     }
//     else{
//         bool = false;
//     }
// }

// if(bool){
//     console.log(`Palindrome`);
// }
// else{
//     console.log(`Not Palindrome`);
// }

// ### **3️⃣ Count Frequency of Each Character**

// - **Input:** `"banana"`
// - **Output:** `{ b:1, a:3, n:2 }`
//   ✨ _Teaches hash maps / JS objects + iteration._

// let input = 'banana'
// let wordFrequency = {}

// for(let i = 0; i < input.length; i++){
//     let word = input[i]
//     if(word in wordFrequency){
//         wordFrequency[word] += 1;
//     }
//     else{
//         wordFrequency[word] = 1;
//     }
// }

// console.log(wordFrequency);

// ### **4️⃣ Find the Most Frequent Character in a String**

// - **Input:** `"success"`
// - **Output:** `Most frequent: s (3 times)`
//   ✨ _Builds on frequency map — find maximum occurrence._

// ---

// let input = 'success'
// let wordFrequency = {}
// let maxFrequency = {}
// let count = 0;
// let maxLetter = ''
// for(let i = 0; i < input.length; i++){
//     let word = input[i]
//     if(word in wordFrequency){
//         wordFrequency[word] += 1;

//         if(wordFrequency[word] > count){
//             count = wordFrequency[word];
//             maxLetter = word;
//         }

//     }
//     else{
//         wordFrequency[word] = 1;
//     }
// }
// maxFrequency[maxLetter] = wordFrequency[maxLetter]
// console.log(maxFrequency);

// ### **5️⃣ Check if Two Strings Are Anagrams (Without Sorting)**

// - **Input:** `"listen"`, `"silent"`
// - **Output:** `Anagram`
//   ✨ _Use character frequency comparison — no `.sort()`._

// let str1 = "listen";
// let str2 = "silent";

// function checkAnagrams(str1, str2) {
//   if (str1.length != str2.length) {
//     return "Not Anagram";
//   }

//   let wordFrequency = {};

//   for (let i = 0; i < str1.length; i++) {
//     let word = str1[i];
//     if (word in wordFrequency) {
//       wordFrequency[word] += 1;
//     } else {
//       wordFrequency[word] = 1;
//     }
//   }

//   //comparison
//   for (let j = 0; j < str2.length; j++) {
//     let word = str2[j];
//     if (!(word in wordFrequency) || wordFrequency[word] === 0) {
//       return "Not Anagram";
//     } else {
//       wordFrequency[word] -= 1;
//     }
//   }
//   return "Anagram"
// }
// console.log(checkAnagrams(str1, str2));


// ### **6️⃣ Find the First Non-Repeating Character**

// - **Input:** `"aabbcddeff"`
// - **Output:** `c`
//   ✨ _Requires 2-pass algorithm:
//   first count → then find first unique._

// let input = "aabbcddeff";
// let wordFrequency = {}
// let leastFrequencyList = [];

// for(let i = 0; i < input.length; i++){
//     let word = input[i]
//     if(word in wordFrequency){
//         wordFrequency[word] += 1;
//     }
//     else{
//         wordFrequency[word] = 1;
//     }
// }

// for(let char in wordFrequency){
//     if(wordFrequency[char] === 1){
//         leastFrequencyList.push(char)
//     }
// }
// let leastIndex = input.indexOf(leastFrequencyList[0]);
// let char = input[leastIndex];

// for(let i = 1; i < leastFrequencyList.length; i++){
//     if(input.indexOf(leastFrequencyList[i]) < leastIndex){
//         leastIndex = input.indexOf(leastFrequencyList[i]);
//         char = input[leastIndex]
//     }
// }

// console.log(char);

// # 🏠 **Homework Questions (7 Challenging Problems)**

// ### **1️⃣ Remove All Duplicate Characters (Keep First Occurrence)**

// - **Input:** `"programming"`
// - **Output:** `"progamin"`
//   ✨ _Use a visited set + build new string._

// let input = "Programming";
// let output = "";
// let uniqueLetters = new Set();

// for(let i = 0; i < input.length; i++){
//     uniqueLetters.add(input[i])
// }

// for(let char of uniqueLetters){
//     output += char
// }
// console.log(output);

// ### **2️⃣ Check if a String Contains Only Alphabets (No Regex)**

// - **Input:** `"HelloWorld123"`
// - **Output:** `False`
//   ✨ _Use ASCII ranges manually._

// let input = "HelloWorld123";
// let output = true;

// for(let char of input){
//     if(char.charCodeAt(0) >= 48 && char.charCodeAt(0) <= 57){
//         output = false;
//     }
// }

// console.log(output);
 
// ### **3️⃣ Reverse Only the Words in a Sentence**

// - **Input:** `"I love coding"`
// - **Output:** `"coding love I"`
//   ✨ _Split manually or build reverser yourself._

// let input = "I love coding";
// let str = ""
// let arr = []
// let reversedStr = "";

// //separating the string
// for(let char of input){

//     if(char === " "){
//         arr.push(str)
//         str = ""
//     }
//     else{
//         str += char
//     }
//     if(input.indexOf(char) === input.length - 1){
//         arr.push(str)
//     }
// }

// //reversing the string
// for(let i = arr.length - 1; i >= 0; i--){
//     if(i == 0){
//         reversedStr += arr[i]
//     } else{
//         reversedStr += arr[i] + " ";
//     }
// }
// console.log(reversedStr);


// ### **4️⃣ Find the Longest Word in a Sentence**

// - **Input:** `"coding is beautiful"`
// - **Output:** `"beautiful"`
//   ✨ _Manual scanning + longest tracking._

// let input = "coding is beautiful";
// let largestCount = 0;
// let count = 0;
// let str = ''
// let largestWord = ''
// for(let i = 0; i < input.length; i++){
//     if(input[i] === " "){
//         if(count > largestCount){
//             largestCount = count;
//             largestWord = str;
//         }
//         count = 0
//         str = ''
//     }
//     else{
//         count += 1;
//         str += input[i]
//     }

//     if(i === input.length - 1){
//         if(count > largestCount){
//             largestCount = count;
//             largestWord = str
//         }
//     }
// }

// console.log(largestWord);

// ### **5️⃣ Count the Number of Words (Manually Without split)**

// - **Input:** `"  hi   there  world "`
// - **Output:** `3 words`
//   ✨ _Detect transitions from space → non-space using logic._

// let input = "  hi   there  world ";
// let count = 0;
// let wordCount = 0;

// for(let i = 0; i < input.length; i++){
//     if(input[i] === " "){
//         if(count > 0){
//             wordCount += 1;
//         }
//         count = 0
//     }
//     else{
//         count += 1;
//     }
// }
// console.log(wordCount);

// ### **6️⃣ Find All Substrings of a String (No Built-ins)**

// - **Input:** `"abc"`
// - **Output:** `a, ab, abc, b, bc, c`
//   ✨ _Nested loops + substring construction._


// let input = "abc";
// let subString = [];
// for(let i = 0; i < input.length; i++){
//     let tempstr = ''
//     for(let j = i; j < input.length; j++){
//         tempstr += input[j];
//         subString.push(tempstr)
//     }
// }
// let outputStr = subString.join(", ")
// console.log(outputStr);

// ### **7️⃣ Compress a String (Basic Run-Length Encoding)**

// - **Input:** `"aaabbccccd"`
// - **Output:** `"a3b2c4d1"`
//   ✨ _Count consecutive characters and build encoded output._

// let input = "aaabbccccd";
// let countObj = {};
// let outputStr = "";
// for(let i = 0; i < input.length; i++){
//     let char = input[i]
//     if(char in countObj){
//         countObj[char] += 1;
//     }
//     else{
//         countObj[char] = 1
//     }
// }

// for(let key in countObj){
//     outputStr += key + countObj[key]
// }
// console.log(outputStr);
