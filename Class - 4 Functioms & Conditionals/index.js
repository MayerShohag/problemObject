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
          return num ** pow;
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
};

// console.log(Problems.reverseNumber(345));
