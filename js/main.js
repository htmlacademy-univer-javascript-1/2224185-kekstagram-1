const MESSAGES  = ['Всё отлично!', 'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];

const NAMES = ['Зигмунд', 'Оксана', 'Степан', 'Рафаэль', 'Мария', 'Ольга', 'Николай', 'Казимир', 'Фрида', 'Александр'];

const DESCRIPTIONS = [
  'Это я и мой кот',
  'Пора второго завтракка',
  'Заплатите чеканной монетой',
  'Обиды будут не долгими',
  'Он назвал меня котом',
  'Яхта, парус...',
  'Солнце вышло покурить',
  'Это было красиво',
  'Почему не на орлах',
  'Пьяный гиртарист',
  'Мертвый анархист'
];

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

let commentId = 0;
const MIN_VALUE = 1;
const MAX_VALUE = 6;
const createComments = () => ({
  id: commentId++,
  avatar: `img/avatar${getRandomNumber(MIN_VALUE, MAX_VALUE)}.svg`,
  message: getRandomArrayElement(MESSAGES),
  name: getRandomArrayElement(NAMES)
});

let publicationId = 0;
const MIN = 15;
const MAX = 200;
const commentsCount = getRandomNumber(2,8);
const createPublication = () => ({
  id: publicationId++,
  url: `photos/${this.id}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomNumber(MIN, MAX),
  comment: Array.from({length: commentsCount}, createComments)
});

const NUMBER_OF_PICTURES = 25;
// eslint-disable-next-line no-undef
//сonsole.log(getRandomNumber(4,10));
// eslint-disable-next-line no-console
//console.log(checkingMaximumLength('knlh;', 6));
const photosArray = Array.from({length: NUMBER_OF_PICTURES}, createPublication);
// eslint-disable-next-line no-undef, no-unused-expressions, no-console
console.log(photosArray);


