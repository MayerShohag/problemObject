const Problems = {
     // problem 1
     checkEvenOdd(num = 0) {
          if (num === 0) return `${num} is Zero`;
          return num % 2 === 0 ? "Even" : "Odd";
     },

     // problem 2
     checkPosNeg(num) {
          if (num === 0) return `${num} is Zero`;
          if (num > 0) {
               return `${num} is positive value`;
          } else {
               return `${num} is negative value`;
          }
     },

     // problem 3
     findMax(num1 = 0, num2 = 0) {
          if (num1 === 0 || num2 === 0)
               return `${num1} have no value to compare`;
          return num1 > num2 ? num1 + " is Big" : num2 + " is Big";
     },

     // problem 4
     findMaxThree(num1 = 0, num2 = 0, num3 = 0) {
          if (num1 === 0 || num2 === 0 || num3 === 0)
               return `method want 3 value`;
          if (num1 > num2 && num1 > num3) {
               return `${num1} is Big`;
          } else if (num2 > num1 && num2 > num3) {
               return `${num2} is Big`;
          } else {
               return `${num3} is Big`;
          }
     },

     // problem 5
     leapYear(num = 0) {
          if (num === 0) return `No year entered`;
          if ((num % 4 == 0) & (num % 100 != 0) || num % 400 == 0) {
               return `${num} is a Leap Year`;
          } else {
               return `${num} is not a Leap Year`;
          }
     },

     // problem 6
     voteEligibility(num = 0) {
          if (num === 0 || num < 0 || num > 120) return `he/she is not alive!`;
          return num > 18 ? `${num} is eligible` : `${num} is not eligible`;
     },

     // problem 7
     checkDivisibility(num = 0, count) {
          if (num === 0) return `0 is Zero`;
          for (let i = 1; i <= count; i++) {
               if (i % 5 === 0 && i % 11 === 0) {
                    console.log(i);
               }
          }
          return num % 5 === 0 && num % 11 === 0
               ? `${num} is Divisible`
               : `${num} is not Divisible`;
     },

     // problem 8
     gradeCalculator(grade) {
          if (grade === 0 || grade > 100) return `out of grade`;
          if (grade == 100 || grade >= 80) {
               return `A+`;
          } else if (grade == 79 || grade >= 70) {
               return `A`;
          } else if (grade == 69 || grade >= 60) {
               return `A-`;
          } else if (grade == 59 || grade >= 50) {
               return `B`;
          } else if (grade == 49 || grade >= 40) {
               return `C`;
          } else if (grade == 39 || grade >= 33) {
               return `D`;
          } else if (grade >= 0 || grade <= 32) {
               return `You're failed the examination!`;
          }
     },

     // problem 9
     checkUpperLowerCase(str = "") {
          if (str == "") return `empty text`;
          let splited = str.trim().split("");
          let upperCaseArr = [];
          let upperCaseCount = 0;
          let lowerCaseCount = 0;
          let lowerCaseArr = [];
          splited.forEach((element) => {
               if (element === element.toUpperCase()) {
                    if (!(element == " ")) {
                         upperCaseArr.push(element);
                         upperCaseCount++;
                    }
               } else {
                    lowerCaseArr.push(element);
                    lowerCaseCount++;
               }
          });
          return `{${upperCaseArr.join(
               ","
          )}} total ${upperCaseCount} letter is UpperCase from given word \n{${lowerCaseArr.join(
               ","
          )}} total ${lowerCaseCount} letter is LowerCase from given word`;
     },

     // problem 10
     checkVowelConsonant(str = "") {
          let caseString = str.toLowerCase();
          let vowelArr = [];
          let consonantArr = [];
          for (let i = 0; i < caseString.length; i++) {
               if (
                    caseString[i] === "a" ||
                    caseString[i] === "e" ||
                    caseString[i] === "i" ||
                    caseString[i] === "o" ||
                    caseString[i] === "u"
               ) {
                    vowelArr.push(caseString[i]);
               } else {
                    consonantArr.push(caseString[i]);
               }
          }
          return `{${vowelArr.join(
               ","
          )}} is Vowel letter \n{${consonantArr.join(
               ","
          )}} is Consonant letter`;
     },

     // problem 11
     checkMultiply(num = 0) {
          if (num === "" || num === " ") return `empty text`;
          return num % 3 == 0 && num % 7 == 0
               ? `${num} is multiplied by 3 or 7`
               : `${num} is not multiplied by 3 or 7`;
     },

     // problem 12
     simpleCalculator(num1 = 0, operator = "+", num2 = 0) {
          if (operator == "+") {
               return num1 + num2;
          } else if (operator == "-") {
               return num1 - num2;
          } else if (operator == "/") {
               return num1 / num2;
          } else if (operator == "*") {
               return num1 * num2;
          } else if (operator == "%") {
               return num1 % num2;
          } else if (operator == "**") {
               return num1 ** num2;
          }
     },

     // problem 13
     checkProfitLoss(cost = 0, selling = 0) {
          if (cost == "" || cost == " ") return `no value entered`;
          if (!(cost > selling)) return `+${selling - cost}tk Profit`;
          return `-${cost - selling}tk Loss`;
     }
};
