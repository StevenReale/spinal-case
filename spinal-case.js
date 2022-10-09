function spinalCase(str) {
  const charArr = str.split("");  //converts string into array

  //iterates through array
  for (let i = 0; i < charArr.length; i++) {
    //ensures first letter is lowercase
    if (i==0) {
      charArr[i] = charArr[i].toLowerCase();
    }
    //if a character after the first is capitalized, sends it to lower case. If is also preceded by a lower-case letter, splices "-" before it.
    else if (/[A-Z]/.test(charArr[i])) {
      charArr[i] = charArr[i].toLowerCase();
      if (/[a-z]/.test(charArr[i-1])) {
        charArr.splice(i, 0, "-");
      }
    }
    //if the current character is a space or underscore, changes it to "-"
    else if (charArr[i] == " "| charArr[i] == "_") {
      charArr[i]="-"
    }
  }
  //converts array back into a string and returns
  return charArr.join("");

}

console.log(spinalCase('AllThe-small Things'));
