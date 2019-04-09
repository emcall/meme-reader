//input: alphanumeric string. no spaces, alphabetical, caps then lowercase, then numerals if desired

// TODO make this save output instead of just printing it to console

function jsonConverter (fontName, inputStr) {
  //first remove any whitespace characters
  const str = inputStr.replace(/\s+/g, '');
  const strSplit = str.split();
  let upper = false;
  let numerals = false;

  switch (strSplit.length) {
    case 26: {
      console.log('one case no numbers. All characters will be treated as lowercase')
      break;
    }
    case 36: {
      console.log('one case + numbers. All characters will be treated as lowercase')
      numerals = true;
      break;
    }
    case 52: {
      console.log('two case no numbers')
      upper = true;
      break;
    }
    case 62: {
      console.log('two case + numbers')
      upper = true;
      numerals = true;
      break;
    }
    default: {
      console.log(`The string you provided contains ${strSplit.length} characters, which is not a valid alphabet length. Please include the entire alphabet and try again.`)
      return;
    }
  }//end switch

  let alphabet = [];
  //each entry in array should be `"${strSplit[i]" : "${String.fromCharCode(97+i)}"`

  for (let i = 0; i < 26; i++){
    //add lowers to alphabet
  }
  if (upper){
    for (let i = 26; i < 52; i++){
      //add uppers to alphabet
    }
  }
  if (upper && numerals){
    for (let i = 52; i < 62; i++){
      //add numerals to alphabet
    }
  }
  else if (numerals) {
    for (let i = 26; i < 36; i++){
      //add numerals to alphabet
    }
  }

//last step is smooshing it all together.
//start with "${fontName}" : [
//then the alphabet array with commas between
//then ]

}
