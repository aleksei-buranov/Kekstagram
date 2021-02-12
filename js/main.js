"use strict";

var OBJECTS_COUNT = 25;
var AVATARS_COUNT = 6;
var USER_NAMES = [
  "Максим",
  "Александр",
  "Вадим",
  "Никита",
  "Анна",
  "Андрей",
  "Алиса",
  "Карина",
  "Ольга",
  "Арина",
];
var USER_MESSAGES = [
  "Всё отлично!",
  "В целом всё неплохо. Но не всё.",
  "Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.",
  "Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.",
  "Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.",
  "Лица у людей на фотке перекошены, как будто их избивают.Как можно было поймать такой неудачный момент ?!",
];

var getRandomInteger = function (min, max) {
  var rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

var generateComment = function () {
  var comment = {
    avatar: "img/avatar-" + getRandomInteger(1, AVATARS_COUNT) + ".svg",
    message: USER_MESSAGES[getRandomInteger(0, USER_MESSAGES.length - 1)],
    name: USER_NAMES[getRandomInteger(0, USER_NAMES.length - 1)],
  };
  return comment;
};

var generateCommentsArray = function (count) {
  var commentsArray = [];
  for (var i = 0; i < count; i++) {
    commentsArray[i] = generateComment();
  }
  return commentsArray;
};

var generateUserDescription = function () {
  var userDescription = {
    url: "photos/.jpg",
    description: "Фотография",
    likes: getRandomInteger(15, 200),
    comments: generateCommentsArray(getRandomInteger(3, 10)),
  };
  return userDescription;
};

console.log(generateUserDescription());
