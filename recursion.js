/** product: calculate the product of an array of numbers. */

function product(nums, index = 0) {
  if (index === nums.length) return 1;
  return nums[index] * product(nums, index + 1);
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, index = 0, currLonest = 0) {
  if (index === words.length) return currLonest;
  currLonest = Math.max(words[index].length, currLonest);
  return longest(words, index + 1, currLonest);
}

/** everyOther: return a string with every other letter. */

function everyOther(str, index = 0, newString = "") {
  if (index >= str.length) return newString;
  newString += str[index];
  return everyOther(str, index + 2, newString);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, index = 0) {
  let leftIndex = index;
  let rightIndex = str.length - index - 1;
  if (leftIndex >= rightIndex) return true;
  if (str[leftIndex] !== str[rightIndex]) return false;
  return isPalindrome(str, index + 1);
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, index = 0) {
  if (index === arr.length) return -1;
  if (arr[index] === val) return index;
  return findIndex(arr, val, index + 1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, index = 0, revStr = "") {
  if (revStr.length === str.length) return revStr;
  revStr += str[str.length - 1 - index];
  return revString(str, index + 1, revStr)
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let strArray = [];
  for (let key in obj) {
    if (typeof obj[key] === "string") strArray.push(obj[key]);
    if (typeof obj[key] === "object") strArray.push(...gatherStrings(obj[key]));
  }
  return strArray;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, left = 0, right = arr.length) {
  if (left > right) return -1;

  let middle = Math.floor((right + left) / 2);
  if (arr[middle] === val) return middle;

  if (arr[middle] > val) return binarySearch(arr, val, left, middle - 1);
  return binarySearch(arr, val, middle + 1, right);
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
