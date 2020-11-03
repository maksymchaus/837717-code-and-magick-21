'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLOR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

var getWizard = function () {
  var wizardObject = {
    fullName: WIZARD_NAMES[Math.floor(Math.random() * WIZARD_NAMES.length)] +
      ' ' +
      WIZARD_SURNAME[Math.floor(Math.random() * WIZARD_SURNAME.length)],
    coatColor: COAT_COLOR[Math.floor(Math.random() * COAT_COLOR.length)],
    eyesColor: EYES_COLOR[Math.floor(Math.random() * EYES_COLOR.length)]
  }
  return wizardObject;
};

var getWizards = function () {
  var data = [];
  for (var i = 0; i < 4; i++) {
    data.push(getWizard());
  }
  return data;
};

var wizardsMocks = getWizards();

var renderWizard = function (wizardObject) {
  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizardObject.fullName;
  wizardElement.querySelector('.wizard-coat').style.fill = wizardObject.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizardObject.eyesColor;

  return wizardElement;
};

var renderWizards = function (data) {
  var similarListElement = document.querySelector('.setup-similar-list');
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < data.length; i++) {
    fragment.appendChild(renderWizard(data[i]))
  }
  similarListElement.appendChild(fragment);
}

var showPopup = function () {
  document.querySelector('.setup').classList.remove('hidden');
  document.querySelector('.setup-similar').classList.remove('hidden');
}

renderWizards(wizardsMocks);
showPopup();

// --------------------------Открытие/закрытие окна настройки персонажа--------------
var setupWindow = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setupWindow.querySelector('.setup-close');
var setupIcon = document.querySelector('.setup-open-icon');
var setupInput = document.querySelector('.setup-user-name');
var setupButton = document.querySelector('.setup-submit');

setupOpen.addEventListener('click', function () {
  setupWindow.classList.remove('hidden');
});

setupClose.addEventListener('click', function () {
  setupWindow.classList.add('hidden');
});

document.addEventListener('keydown', function (evt) {
  if (setupInput == document.activeElement && evt.key === 'Escape') {
    return evt;
  } else {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      setupWindow.classList.add('hidden');
    }
  }
});

setupIcon.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    setupWindow.classList.remove('hidden');
  }
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    setupWindow.classList.add('hidden');
  }
});

// -----------------Изменение цвета мантии,глаз и фаербола персонажа по нажатию------------
var wizardCoat = document.querySelector('.setup-wizard .wizard-coat');
var wizardEyes = document.querySelector('.setup-wizard .wizard-eyes');
var fireball = document.querySelector('.setup-fireball-wrap');
var inputEyesColor = document.querySelector('.setup-wizard-coat-color');
var inputCoatColor = document.querySelector('.setup-wizard-eyes-color');
var inputFireballColor = document.querySelector('.setup-fireball-color');

wizardCoat.addEventListener('click', function () {
  var randomCoatColor = COAT_COLOR[Math.floor(Math.random() * COAT_COLOR.length)];
  wizardCoat.style.fill = randomCoatColor;
  inputCoatColor.value = randomCoatColor;
});

wizardEyes.addEventListener('click', function () {
  var randomEyesColor = EYES_COLOR[Math.floor(Math.random() * EYES_COLOR.length)];
  wizardEyes.style.fill = randomEyesColor;
  inputEyesColor.value = randomEyesColor;
});

fireball.addEventListener('click', function () {
  var randomFireballColor = FIREBALL_COLOR[Math.floor(Math.random() * FIREBALL_COLOR.length)];
  fireball.style.background = randomFireballColor;
  inputFireballColor.value = randomFireballColor;
});

