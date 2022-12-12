function getRandomNumber(min, max) {
  if (max > min || max === min && min > 0 && max > 0) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random()*(max-min+1)+min);
  }
  return 'Что-то пошло не так, введите корректные данные';
}


function checkingMaximumLength (checkedString, maximumLength) {
  return checkedString.length <= maximumLength;
}

getRandomNumber(2,8);
checkingMaximumLength('fgghvvc', 8);
