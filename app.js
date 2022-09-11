const dateInput = document.querySelector("#date-input");
const buttonEl = document.querySelector("#button");
const outputEl = document.querySelector("#output");

const convertDateToString = (date) => {
  let dateStr = { day: '', month: '', year: "" };
  if (date.day < 10) {
    dateStr.day = "0" + date.day;
  } else {
    dateStr.day += date.day;
  }
  if (date.month < 10) {
    dateStr.month = "0" + date.month;
  } else {
    dateStr.month += date.month;
  }
  dateStr.year += date.year;
  return dateStr;
}

const getDateVariations = (date) => {
  const dateStr = convertDateToString(date);
  let ddmmyyyy = dateStr.day + dateStr.month + dateStr.year;
  let mmddyyyy = dateStr.month + dateStr.day + dateStr.year;
  let yyyymmdd = dateStr.year + dateStr.month + dateStr.day;
  let ddmmyy = dateStr.day + dateStr.month + dateStr.year.slice(2);
  let mmddyy = dateStr.month + dateStr.day + dateStr.year.slice(2);
  let yymmdd = dateStr.year.slice(2) + dateStr.month + dateStr.day;
  return [ddmmyyyy, mmddyyyy, yyyymmdd, ddmmyy, mmddyy, yymmdd];
}

const reverseString = (str) => str.split("").reverse().join("");

const checkForPalindrome = (str) => str === reverseString(str);

const checkPalindromeForAllDateFormats = (date) => {
  const dateArr = getDateVariations(date);
  let flag = false;
  dateArr.forEach(date => {
    if (checkForPalindrome(date)) {
      flag = true;
    }
  });
  return flag;
}

buttonEl.addEventListener("click", () => {
  const date = dateInput.value.split("-");
  const dateObj = {
    day: Number(date[2]),
    month: Number(date[1]),
    year: Number(date[0])
  }
  const isPalindrome = checkPalindromeForAllDateFormats(dateObj);
  if (isPalindrome) {
    outputEl.textContent = 'Yes, your birthday is a palindrome :D';
  } else {
    outputEl.textContent = 'Oops, your birthday is not a palindrome :('
  }
});