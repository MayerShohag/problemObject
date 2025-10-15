const Problems = {
     // problem 1
     sumOfDigit(num) {
          let sum = 0;
          while (num > 0) {
               let lastDigit = num % 10;
               sum += lastDigit;
               num = Math.floor(num / 10);
          }
          return sum;
     },

     // problem 2
     checkUpperLowerCase(str = "") {
          if (str == "") return `empty text`;
          let splited = str.trim().split("");
          let upperCaseArr = [];
          let lowerCaseArr = [];
          let upperCaseCount = 0;
          let lowerCaseCount = 0;
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

     // problem 3
     findFirstLastLetter(str) {
          let trimmed = str.trim();
          if (trimmed == "" || trimmed == " ") return `empty text!`;
          return `${trimmed[0]} ${trimmed[trimmed.length - 1]}`;
     },

     // problem 4
     checkPrime(num) {
          if (num <= 1) return false;
          for (let i = 2; i * i <= num; i++) {
               if (num % i === 0) return false;
          }
          return true;
     },

     // problem 5
     reverseNumber(num = 0) {
          // let str = num.toString();
          // let splited = str.trim().split("");
          // let arr = [];
          // splited.forEach((el) => {
          //      arr.unshift(el);
          // });
          // return Number(arr.join(""));

          // way 2
          let arr = [];
          while (num > 0) {
               let lastDigit = num % 10;
               arr.push(lastDigit);
               num = Math.floor(num / 10);
          }
          return Number(arr.join(""));
     },

     // problem 6
     powNumber(num, pow) {
          // return Math.pow(num, pow)
          // way 2
          return num ** pow;
     },

     // problem 7
     findMin(num) {
          let arr = [];
          while (num > 0) {
               let last = num % 10;
               arr.unshift(last);
               num = Math.floor(num / 10);
          }
          let small = arr[0];
          for (let i = 1; i < arr.length; i++) {
               if (small > arr[i]) {
                    small = arr[i];
               }
          }
          return small;
     },

     // problem 8
     removeDigits(str = "") {
          if (str == "" || str == " " || str == undefined)
               return `no word entered!`;
          let splited = str.trim().split("");
          let arr = splited.filter((el) => {
               if (isNaN(el)) {
                    return el;
               }
          });
          return arr.join("");
     },

     // problem 9
     wordCount(str) {
          let trimmed = str.trim().replaceAll(/\s+/g, " ");
          let count = 1;
          for (let i = 0; i < trimmed.length; i++) {
               if (trimmed[i] === " ") {
                    count++;
               }
          }
          return count;
     },

     // problem 10
     factorial(num) {
          let value = 1;
          // for (let i = 1; i <= num; i++) {
          //      value *= i;
          // }
          // return value;

          // way 2
          let i = 1;
          while (i <= num) {
               value *= i;
               i++;
          }
          return value;
     },

     // problem 11
     perfectNumber(num) {
          let sum = 0;
          for (let i = 1; i < num; i++) {
               if (num % i == 0) {
                    sum += i;
               }
          }
          if (!(sum == num)) return `${num} is not a Perfect Number`;
          return `${num} is a Perfect Number`;
     },

     // problem 12
     celciusToFahrenheit(celcius) {
          return `${(celcius * 9) / 5 + 32}°F`;
     },

     // problem 13
     randomNumber(num) {
          if (num == undefined) return `no value entered`;
          let random = Math.floor(Math.random() * num + 1);
          if (random % 2 !== 0) return `Random Odd Number: ${random}`;
          return `Random Even Number: ${random}`;
     },

     // problem 14
     squareRoot(num) {
          return Math.sqrt(num);
     },

     // problem 15
     countSpecialChar(str = "") {
          if (str === "" || str === " ") return `no value entered`;
          let specialChar = "~`@#$%^&*()-_=+[]{}'|.,/";
          let split = specialChar.split("");
          let count = 0;
          split.forEach((el) => {
               if (str.includes(el)) return count++;
          });
          return count;
     },

     // extra problem
     getDivisor(num) {
          let divisorArray = [];
          for (let i = 1; i < num; i++) {
               if (num % i == 0) {
                    divisorArray.push(i);
               }
          }
          return divisorArray;
     },

     // extra problem
     split(str, split = "") {
          let trimmedString = str.trim().replaceAll(/\s+/g, " ");
          let splitArray = [];
          for (let i = 0; i < trimmedString.length; i++) {
               splitArray.push(trimmedString[i]);
          }
          return splitArray;
     },
};
