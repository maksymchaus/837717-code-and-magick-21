var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 50;
var DIAGRAM_X = 200;
var GAP = 50;
var FONT_GAP = 20;
var BAR_WIDTH = 40;
var BAR_HEIGHT = 150;
var shadow = 'rgba(0, 0, 0, 0.7)';
var cloudColor = '#fff';
var colorBlack = '#000';
var colorRed = 'hsl(355, 90%, 45%)';

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var renderTitle = function (ctx) {
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillStyle = colorBlack;
  ctx.fillText('Ура вы победили!', 110, 60);
  ctx.fillText('Список результатов:', 110, 80);
}

var renderNames = function (ctx, names) {
  ctx.font = '18px PT Mono';
  ctx.fillStyle = colorBlack;
  for (var i = 0; i < names.length; i++) {
    ctx.fillText(
      names[i],
      (CLOUD_X + GAP) + (GAP + BAR_WIDTH) * i,
      CLOUD_Y + GAP + FONT_GAP * 1.5 + BAR_HEIGHT
    );
  }
};

var renderTimes = function (ctx, times) {
  for (var i = 0; i < times.length; i++) {
    ctx.fillText(
      Math.round(times[i]),
      (CLOUD_X + GAP) + (GAP + BAR_WIDTH) * i,
      CLOUD_Y + GAP
    )
  }
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

var getRandomInt = function (max) {
  return Math.random().toPrecision(1) * 100;
}

var renderDiagram = function (ctx, names, times) {
  var maxTime = getMaxElement(times);
  for (var i = 0; i < times.length; i++) {
    var randomColor = getRandomInt(101);
    ctx.fillStyle = 'hsl(240,' + randomColor + '%, 50%)';
    if (names[i] === 'Вы') {
      ctx.fillStyle = colorRed;
    }
    ctx.fillRect(
      (CLOUD_X + GAP) + (GAP + BAR_WIDTH) * i,
      (CLOUD_Y + 150 + GAP + FONT_GAP),
      BAR_WIDTH,
      -(BAR_HEIGHT * times[i]) / maxTime
    );
  }
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, 110, 60, shadow);
  renderCloud(ctx, 100, 50, cloudColor);
  renderTitle(ctx);
  renderNames(ctx, names);
  renderTimes(ctx, times);
  renderDiagram(ctx, names, times);
};
