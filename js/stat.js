const CLOUD_WIDTH = 420;
const CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 50;
var GAP = 50;
var FONT_GAP = 20;
var BAR_WIDTH = 40;
var BAR_HEIGHT = 150;

let renderCloud = function(ctx,x,y,color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

window.renderStatistics = function(ctx,NAMES) {
  renderCloud(ctx, 110, 60, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, 100, 50, '#fff');
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillStyle = '#000';
  ctx.fillText('Ура вы победили!', 110, 60);
  ctx.fillText('Список результатов:', 110, 80);

  ctx.fillStyle = '#000';

  var playerTime = 10;

  for (var i = 1; i < NAMES.length; i++) {
    ctx.fillText(
      playerTime,
      (CLOUD_X + GAP) * i,
      CLOUD_Y + GAP
    );
    ctx.fillRect(
      (CLOUD_X + GAP) * i,
      CLOUD_Y + GAP  + FONT_GAP,
      BAR_WIDTH,
      BAR_HEIGHT
    );
    ctx.fillText(
      NAMES[i],
      (CLOUD_X + GAP) * i,
      CLOUD_Y + GAP + FONT_GAP*1.5 + BAR_HEIGHT
    );
  }
};


  /*
  ctx.fillText(
    playerTime,
    (CLOUD_X + GAP) * 2,
    CLOUD_Y + GAP
  );
  ctx.fillRect(
    (CLOUD_X + GAP) * 2,
    CLOUD_Y + GAP + FONT_GAP,
    BAR_WIDTH,
    BAR_HEIGHT
  );
  ctx.fillText(
    playerName,
    (CLOUD_X + GAP) * 2,
    CLOUD_Y + GAP + FONT_GAP*1.5 + BAR_HEIGHT
  );

  ctx.fillText(
    playerTime,
    (CLOUD_X + GAP) * 3,
    CLOUD_Y + GAP
  );
  ctx.fillRect(
    (CLOUD_X + GAP) * 3,
    CLOUD_Y + GAP + FONT_GAP,
    BAR_WIDTH,
    BAR_HEIGHT
  );
  ctx.fillText(
    playerName,
    (CLOUD_X + GAP) * 3,
    CLOUD_Y + GAP + FONT_GAP*1.5 + BAR_HEIGHT
  );
};
