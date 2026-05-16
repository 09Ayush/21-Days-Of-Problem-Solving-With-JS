// ### **1️⃣ Find if One String Is a Substring of Another (Manual Method)**

// - **Input:**
//   Main string: `"hellothere"`
//   Target string: `"there"`

// let mainString = "emergency";
// let targetString = "gem";
// let result = false;
// for(let i = 0; i <= mainString.length - targetString.length; i++){
//     let match = true;
//     for(let j = 0; j < targetString.length; j++){

//         if(mainString[i + j] !== targetString[j]){
//             match = false;
//             break;
//         }
//     }
//     if(match){
//         result = true;
//     }

// }
// console.log(result);

// ### **2️⃣ Manual Substring Search (Without Using indexOf)**

// - **Input:** text = `"hello world"`, pattern = `"wor"`
// - **Output:** `Found at index 6`
//   ✨ _Classic naive pattern matching algorithm (two nested loops)._

// let mainString = "hello world";
// let targetString = "ld";
// let index = -1;
// let result = false;
// for(let i = 0; i <= mainString.length - targetString.length; i++){
//     let match = true;

//     for(let j = 0; j < targetString.length; j++){
//         if(mainString[i + j] !== targetString[j]){
//             match = false;
//             break;
//         }
//     }

//     if(match){
//         result = true
//         index = i;
//         break;
//     }
// }

// if(result){
//     console.log(`found at index ${index}`);
// }
// else{
//     console.log(`Not Found`);
// }

// ### **3️⃣ Check if One String is Rotation of Another**

// - **Input:** `"abcde"`, `"cdeab"`
// - **Output:** `Rotation`
//   ✨ _Use the trick: second string must be inside `(s1 + s1)`._

// let str1 = "abcde";
// let str2 = "cdeab";

// function checkRoatation() {
//   if (str1.length !== str2.length) {
//     return false
//   }

//   let combined = str1 + str2;
//   return combined.includes(str2);
// }
// console.log(checkRoatation(str1, str2) ? `Rotation` : `Not Roatation`);

// # 🏠 **Homework Questions**
// ### **1️⃣ Count Frequency of Each Word in a Sentence**

// - **Input:** `"i love coding and i love javascript"`
// - **Output:** `{ i:2, love:2, coding:1, and:1, javascript:1 }`
//   ✨ _Word parsing + map building._

// let sentence = "i love coding and i love javascript";
// let wordCount = {}
// let wordList = sentence.split(" ")

// for(let i = 0; i < wordList.length; i++){

//     if(wordList[i] in wordCount){
//         wordCount[wordList[i]] += 1
//     }
//     else{
//         wordCount[wordList[i]] = 1
//     }
// }
// console.log(wordCount);

// ### **2️⃣ Check If a String Is a Pangram**

// - **Input:** `"The quick brown fox jumps over the lazy dog"`
// - **Output:** `Pangram`
//   ✨ _Check if all 26 letters exist._

// let input = "The quick brown fox jumps over the lazy dog";
// input = input.toLowerCase();

// let charRecord = {};
// for (let i = 0; i < input.length; i++) {
//   let char = input.charCodeAt(i)

//   if(code >= 97 && code <= 122){
//     charRecord[code] = true
//   }
// }
// let keysFound = Object.keys(charRecord).length;

// if(keysFound === 26){
//     console.log("Panagram");
// }
// else{
//     console.log(`not a panagram`);
// }
// console.log(result);

// ### **3️⃣ Remove All Duplicate Words From a Sentence**

// - **Input:** `"this is is a test test string"`
// - **Output:** `"this is a test string"`
//   ✨ _Track seen words, build cleaned sentence._

// let input = "this is is a test test string";
// let processedInput = input + " ";
// let word = "";
// let uniqeWords = [];
// let output = "";
// for (let i = 0; i < processedInput.length; i++) {

//   if (input[i] === " ") {
//     if(word.length > 0 && !uniqeWords.includes(word)){
//         uniqeWords.push(word)
//     }
//     word = ""
//   } else {
//     word += processedInput[i];
//   }
// }

// for(let val of uniqeWords){
//     output = output + val + " "
// }

// console.log(output);

// ### **4️⃣ Find the Longest Palindromic Substring (Brute Force Allowed)**

// - **Input:** `"babad"`
// - **Output:** `"bab"` or `"aba"`
//   ✨ _Check all substrings; teaches brute-force reasoning._

// let input = "babad";
// let wordArr = [];
// let palindromeWord = []

// for(let i = 0; i < input.length; i++){
//     let word = ''
//     for(let j = i; j < input.length; j++){
//         word += input[j]
//         wordArr.push(word);
//     }
// }

// for(let a = 0; a < wordArr.length; a++){
//     let word = wordArr[a];

//     if(word.length === 1){
//         continue
//     }
//     else{
//         let count = 0;
//         let reversedword = ''
//         for(let b = word.length - 1; b >= 0; b--){
//             reversedword += word[b]
//         }
//         if(reversedword === word){
//             palindromeWord.push(word)
//         }
//     }
// }

// let maxLen = Math.max(...palindromeWord.map(word => word.length));

// let allLongest = palindromeWord.filter(word => word.length === maxLen);
// console.log("All Longest Palindromes:", allLongest);

// ### **5️⃣ Find All Anagram Pairs in an Array of Strings**

// - **Input:** `["cat", "tac", "act", "dog"]`
// - **Output:** `["cat","tac","act"]`

// let input = ["cat", "tac", "act", "dog"];
// let output = [];
// let tempArr = [];
// for (let j = 0; j < input.length; j++) {
//     tempWord = input[j].split("").sort().join("");
//     tempArr.push(tempWord)
// }

// for (let i = 0; i < input.length; i++) {
//   let tempWord = input[i].split("").sort().join("");

//   let wordCount = tempArr.filter(word => word === tempWord).length
//   if(tempWord === tempArr[i] && wordCount  > 1){
//     output.push(input[i])
//   }
// }

// console.log(output);

// ### **6️⃣ Find the Longest Substring Without Repeating Characters (Sliding Window)**

// - **Input:** `"abcabcbb"`
// - **Output:** `"abc"`
//   ✨ _Introduction to sliding windows, hash maps, and window shrinking logic._

// let mainString = "abcabcbb";
// let targetString = "abc";
// let result = false;
// for(let i = 0; i <= mainString.length - targetString.length; i++){
//     let match = true;
//     for(let j = 0; j < targetString.length; j++){

//         if(mainString[i + j] !== targetString[j]){
//             match = false;
//             break;
//         }
//     }
//     if(match){
//         result = true;
//     }

// }
// console.log(result);