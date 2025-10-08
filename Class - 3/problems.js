const Problems = {
     // problem 1
     wordLength(str = "empty") {
          let totalChar = 0;
          let splited = str.trim().split("");
          splited.forEach((element, index) => {
               totalChar = index + 1;
          });
          return totalChar;
     },

     // problem 2
     wordReverse(str = "") {
          let arr = [];
          //     let splited = str.trim().split("");
          //     splited.forEach((el) => {
          //          arr.unshift(el);
          //     });
          //     return arr.join("");

          //     way 2
          for (let i = str.length; i >= 0; i--) {
               arr.push(str[i]);
          }
          return arr.join("");
     },

     // problem 3
     vowelCount(str = "empty") {
          let caseString = str.trim().toLowerCase();
          let vowel = 0;
          let arr = [];
          for (let i = 0; i < str.length; i++) {
               if (
                    caseString[i] == "a" ||
                    caseString[i] == "e" ||
                    caseString[i] == "i" ||
                    caseString[i] == "o" ||
                    caseString[i] == "e"
               ) {
                    vowel++;
                    arr.push(caseString[i]);
               }
          }
          return `vowel is {${arr.join(", ")}} and count is ${vowel}`;
     },

     // problem 4
     pascelCase(str = "empty") {
          let splited = str.trim().split(" ");
          let joined = splited[0];
          let finalWord = [];
          for (let i = 1; i < splited.length; i++) {
               let upperWord = splited[i][0].toUpperCase();
               let wordBody = splited[i].slice(1);
               let combineWord = upperWord + wordBody;
               finalWord.push(combineWord);
          }
          return joined + finalWord.join("");
     },

     // problem 5
     letterRepeat(word = "empty", letter = "0") {
          let splited = word.trim().split("");
          let count = 0;
          let arr = [];
          for (let i = 0; i < splited.length; i++) {
               if (word[i] == letter.trim()) {
                    arr.push(word[i]);
                    count++;
               }
          }
          return `${letter} appears ${count} times`;
     },

     //      problem 6
     checkPalindrome(str = "") {
          let splited = str.trim().split("");
          let arr = [];
          splited.forEach((el) => {
               arr.unshift(el);
          });
          let comparableWord = arr.join("");
          if (comparableWord === "" || comparableWord === " ") {
               return `empty text`;
          } else if (comparableWord === str.trim()) {
               return `${str} is Palindrome`;
          } else {
               return `${str} is not Palindrome`;
          }
     },

     //      problem 7
     eachNewLine(str) {
          for (let i = 0; i < str.length; i++) {
               console.log(str[i]);
          }
     },

     // problem 8
     wordCount(str = "") {
          if (str === "" || str === " ") {
               return `empty text`;
          }
          return str.trim().split(" ").length;
     },

     // problem 9
     replaceSpacer(str = "", spacer = "-") {
          //     return str.trim().split(" ").join(spacer);
          // way 2
          return str.trim().replaceAll(" ", spacer);
     },

     //      problem 10
     wordPrinting(str = "", howMuch = 5) {
          if (str === "" || str === " ") {
               return `empty text`;
          }
          for (let i = 1; i <= howMuch; i++) {
               console.log(i + ".", str.trim());
          }
     },

     //      problem 11
     extraSpaceRemove(str = "") {
          if (str === "" || str === " ") {
               return `empty text`;
          }
          return str.trim();
     },

     //      problem 12
     findLongestWord(str = "") {
          if (str === "" || str === " ") {
               return `empty text`;
          }
          let split = str.trim().split(" ");
          let max = split[0];
          for (let i = 1; i < split.length; i++) {
               if (max.length < split[i].length) {
                    max = split[i];
               }
          }
          return max;
     },

     //      problem 13
     digitCount(str = "") {
          let splited = str.trim().split("");
          let digits = 0;
          splited.forEach((el) => {
               if (!isNaN(el)) {
                    digits++;
               }
          });
          return digits;
     },

     // problem 14
     stringWithoutVowel(str) {
          if (str === "" || str === " ") return `empty text`;
          let arr = [];
          let vowel = 0;
          let caseString = str.toLowerCase().trim().split("");
          for (let i = 0; i < caseString.length; i++) {
               if (
                    !(
                         caseString[i] === "a" ||
                         caseString[i] === "e" ||
                         caseString[i] === "i" ||
                         caseString[i] === "o" ||
                         caseString[i] === "u"
                    )
               ) {
                    arr.push(caseString[i]);
               } else {
                    vowel++;
               }
          }
          return `string without vowel is {${arr.join(
               ""
          )}} \n- ${vowel} vowels removed`;
     },

     //      problem 15
     sliceString(str = "") {
          if (str === "" || str === " ") return `empty text`;
          let arr = [];
          for (let i = 0; i <= str.length; i++) {
               arr.push(str.slice(0, i));
          }
          return arr.join("\n");
     },
};
