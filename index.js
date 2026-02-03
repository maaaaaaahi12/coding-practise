// getongray interview question *****
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

// Interview question *****5
//find first non repeating character
const input = "BALREDDYMAHESH";
function nonrepeatingcharacter(str) {
  let result = {};
  str.split("").map((item) => {
    result[item] = (result[item] || 0) + 1;
  });
  for(let char of str){
    if(result [char] == 1){
        return char
    }
  }
  return null
}
console.log(nonrepeatingcharacter(input), "nonrepeating charcter");
