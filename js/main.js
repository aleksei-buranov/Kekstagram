"use strict";

var OBJECTS_COUNT = 25;
var AVATARS_COUNT = 6;
var COMMENTS_MIN = 3;
var COMMENTS_MAX = 10;
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

var PICTURE_TEMPLATE = document
  .querySelector("#picture")
  .content.querySelector(".picture");
var PICTURES = document.querySelector(".pictures");

var getRandomInteger = function (min, max) {
  var rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

var shuffleArray = function (a) {
  var j;
  var x;
  var i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
};

var generateIntegerArray = function (count) {
  var a = [];
  for (var i = 0; i < count; i++) {
    a[i] = i + 1;
  }
  return a;
};

var generateDescriptionsArray = function (count) {
  var photoIndexes = generateIntegerArray(count);
  photoIndexes = shuffleArray(photoIndexes);
  var descriptionsArray = [];
  for (var i = 0; i < count; i++) {
    var photoIndex = photoIndexes.splice(-1, 1);
    descriptionsArray[i] = generateUserDescription(photoIndex);
  }
  return descriptionsArray;
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

var generateUserDescription = function (photoIndex) {
  var userDescription = {
    url: "photos/" + photoIndex + ".jpg",
    description: "Фотография",
    likes: getRandomInteger(15, 200),
    comments: generateCommentsArray(
      getRandomInteger(COMMENTS_MIN, COMMENTS_MAX)
    ),
  };
  return userDescription;
};

var renderPictures = function (picDescriptions) {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < picDescriptions.length; i++) {
    var pictureElement = PICTURE_TEMPLATE.cloneNode(true);
    var pictureImg = pictureElement.querySelector(".picture__img");
    var pictureLikes = pictureElement.querySelector(".picture__likes");
    var pictureComments = pictureElement.querySelector(".picture__comments");

    pictureImg.src = picDescriptions[i].url;
    pictureLikes.textContent = picDescriptions[i].likes;
    pictureComments.textContent = picDescriptions[i].comments.length;

    fragment.append(pictureElement);
  }
  PICTURES.append(fragment);
};

var picDescriptions = generateDescriptionsArray(OBJECTS_COUNT);

renderPictures(picDescriptions);
