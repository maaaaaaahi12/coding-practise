// getongray interview asked question *****10
// find occurencess in a sentences
const info = "apple is good grape is not good grape is cheaper than apple";
function findoccurenece(str) {
  let result = {};
  str.split(" ").map((item) => {
    result[item] = (result[item] || 0) + 1;
  });
  return result;
}
console.log(findoccurenece(info), "occurences");

// Interview asked question *****5
//find first non repeating character
const input = "BALREDDYMAHESH";
function nonrepeatingcharacter(str) {
  let result = {};
  let nonrepeat = [];
  str.split("").map((item) => {
    result[item] = (result[item] || 0) + 1;
  });
  for (let char of str) {
    if (result[char] == 1) {
      nonrepeat.push(char);
    }
  }
  return nonrepeat ? nonrepeat : null;
}
console.log(nonrepeatingcharacter(input), "nonrepeating charcters");

// interview asked question HCL occurence and swap the output of object as key as value and value as key - {value : key} *****5
function findoccurenece(array) {
  const result = {};
  let swap = [];
  for (i = 0; i < array.length; i++) {
    result[array[i]] = (result[array[i]] || 0) + 1;
  }
  for (let [key, value] of Object.entries(result)) {
    swap.push({ [value]: Number(key) });
  }
  return swap;
}
console.log(findoccurenece([1, 2, 3, 3, 4, 4]), "array");

// 11/02/26 probelm 1
//count vowels in given stri
// ng
const str = "Maheshhsuteoooospv";

function findVowels(str) {
  return str.match(/[aeiou]/gi)?.length || 0;
}
console.log(findVowels(str));

// 11/02/26 probelm2
// Check if a string is a palindrome.
function checkPalindrome(str) {
  return str.split().reverse().join("") === str;
}
console.log(checkPalindrome("tat"));

//12/02/26 problem 1
// Remove duplicates from array of objects
const data = [
  { id: 1, name: "Mahesh" },
  { id: 2, name: "Ravi" },
  { id: 1, name: "Mahesh" },
];
const unique = data.filter(
  (item, index, arr) => index === arr.findIndex((obj) => obj.id === item.id),
);
console.log(unique);

//12/02/26 probelm 2
//Reverse words but not characters and also reverse characters also
const inp = "i Love India W";
console.log(
  inp
    .split(" ")
    .map((item) => item.split("").reverse().join(""))
    .join(" "),
);

//12/02/26 probelm 3
// const input = 'ganeshh venkyi roshani'; output : roshani;
const input2 = "ganeshh venkyi roshani";
function findHighuniqueletters(input2) {}
console.log(findHighuniqueletters(input2));

// 16/02/26
//Complete the square sum function so that it squares each number passed into it and then sums the results together.
//For example, for [1, 2, 2] it should return 9 because 1*1 + 2*2 like
function squareSum(numbers) {
  return numbers.reduce((acc, cur) => acc + cur * cur, 0);
}
console.log(squareSum([1, 2, 2]));

//16/02/26
//You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.
function isValidWalk(walk) {
  if (walk.length !== 10) {
    return false;
  }

  let north = 0;
  let south = 0;
  let west = 0;
  let east = 0;

  for (i = 0; i <= walk.length - 1; i++) {
    if (walk[i] === "n") {
      north++;
    }
    if (walk[i] === "s") {
      south++;
    }
    if (walk[i] === "w") {
      west++;
    }
    if (walk[i] === "e") {
      east++;
    }
   
  }
   return south === north && west === east;
}
console.log(isValidWalk(["n", "s", "w", "e", "n", "s", "w", "e", "n", "s"]));
