function getRandomNumber(min, max) {
  if (max > min || max === min && min > 0 && max > 0) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random()*(max-min+1)+min);
  }
  return 'Что-то пошло не так, введите корректные данные';
}


function checkingMaximumLength (checkedString, maxLength) {
  return checkedString.length <= maxLength;
}

const getRandomArrayElement = (elements) =>elements[getRandomNumber(0, elements.length - 1)];

export {getRandomNumber, checkingMaximumLength, getRandomArrayElement};
