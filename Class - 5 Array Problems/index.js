const Problems = {
     // Problem 1:
     sumArrayElement(arr) {
          if (arr === undefined) return `no value entered!`;
          return arr.reduce((acc, current) => acc + current, 0);
     },

     // problem 2
     largestNumber(arr) {
          if (arr === undefined) return `no value entered!`;
          let max = arr[0];
          for (let i = 1; i < arr.length; i++) {
               if (max < arr[i]) {
                    max = arr[i];
               }
          }
          return max;
     },

     // problem 3
     smallestNumber(arr) {
          if (arr === undefined) return `no value entered!`;
          let min = arr[0];
          for (let i = 1; i < arr.length; i++) {
               if (min > arr[i]) {
                    min = arr[i];
               }
          }
          return min;
     },

     // problem 4
     evenCount(arr) {
          if (arr === undefined) return `no value entered!`;
          let filter = [];
          arr.filter((el) => {
               if (el % 2 == 0) {
                    filter.push(el);
               }
          });
          return `Total ${
               filter.length
          } digits are Even in the given array and the digits are {${filter.join(
               ","
          )}} `;
     },

     // problem 5
     oddCount(arr) {
          if (arr === undefined) return `no value entered!`;
          let filter = [];
          arr.filter((el) => {
               if (!(el % 2 == 0)) {
                    filter.push(el);
               }
          });
          return `Total ${
               filter.length
          } digits are Odd in the given array and the digits are {${filter.join(
               ","
          )}} `;
     },

     //      problem 6
     findGreaterThan(arr, greaterThan = 10) {
          if (arr === undefined) return `no value entered!`;
          let filter = [];
          arr.filter((el) => {
               if (el > greaterThan) {
                    filter.push(el);
               }
          });
          return filter;
     },

     //      problem 7
     doubleEachNumber(arr) {
          if (arr === undefined) return `no value entered!`;
          let double = [];
          arr.map((el) => double.push(el * 2));
          return double;
     },

     // problem 8
     convertUpperCase(arr) {
          if (arr === undefined) return `no value entered!`;
          let uppercase = [];
          arr.forEach((el) => {
               uppercase.push(el.toUpperCase());
          });
          return uppercase;
     },

     // problem 9
     findString(arr) {
          if (arr === undefined) return `no value entered!`;
          let filter = [];
          arr.filter((el) => {
               if (isNaN(el)) {
                    filter.push(el);
               }
          });
          return filter;
     },

     // problem 10
     wordLength(arr) {
          if (arr === undefined) return `no value entered!`;
          let sumLetter = 0;
          arr.forEach((el) => {
               sumLetter += el.length;
          });
          return sumLetter;
     },

     //      problem 11
     findIndex(arr, value) {
          if (arr === undefined) return `no value entered!`;
          let indexValue;
          let returnValue = -1;
          arr.forEach((el, index) => {
               if (el == value) indexValue = index;
          });
          return indexValue;
     },
     // problem 12
     removeDuplicate(arr) {
          if (arr === undefined) return `no value entered!`;
          // let newArr = [...new Set(arr)]
          // return newArr

          // way 2
          let pushArr = [];
          arr.forEach((el, index, loopArr) => {
               if (loopArr.indexOf(el) === index) {
                    pushArr.push(el);
               }
          });
          return pushArr;
     },

     // problem 13
     sortElement(arr) {
          if (arr === undefined) return `no value entered!`;
          let realDigit = this.removeDuplicate(arr);
          return realDigit.sort((a, b) => a - b);
     },

     // problem 14
     reverseArray(arr) {
          if (arr === undefined) return `no value entered!`;
          let reverseArray = [];
          // for (let i = arr.length - 1; i >= 0; i--) {
          //      reverseArray.push(arr[i]);
          // }

          // way 2
          arr.forEach((el) => reverseArray.unshift(el));
          return reverseArray;
     },

     // problem 15
     firstEven(arr, evenNumber = 0) {
          if (arr === undefined) return `no value entered!`;
          let firstIndex = [];
          arr.forEach((el) => {
               if (el % 2 == 0) {
                    firstIndex.push(el);
               }
          });
          return firstIndex[evenNumber];
     },

     // problem 16
     findFirstIndex(arr, greaterThan = 5) {
          if (arr === undefined) return `no value entered!`;
          let firstIndex = [];
          arr.forEach((el, index) => {
               if (el > greaterThan) {
                    firstIndex.push(index);
               }
          });
          return Number(firstIndex.join("")[0]);
     },
};
