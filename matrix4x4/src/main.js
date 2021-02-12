var config = {
  type: Phaser.AUTO,
  width: 400,
  height: 400,
  backgroundColor: '#fefafe',
  scene: {
    preload: preload,
    create: create
  }
};

var game = new Phaser.Game(config);

function preload ()
{

  this.load.image('0-0', 'assets/0-0.png');
  this.load.image('0-1', 'assets/0-1.png');
  this.load.image('0-2', 'assets/0-2.png');
  this.load.image('0-3', 'assets/0-3.png');

  this.load.image('1-0', 'assets/1-0.png');
  this.load.image('1-1', 'assets/1-1.png');
  this.load.image('1-2', 'assets/1-2.png');
  this.load.image('1-3', 'assets/1-3.png');

  this.load.image('2-0', 'assets/2-0.png');
  this.load.image('2-1', 'assets/2-1.png');
  this.load.image('2-2', 'assets/2-2.png');
  this.load.image('2-3', 'assets/2-3.png');

  this.load.image('3-0', 'assets/3-0.png');
  this.load.image('3-1', 'assets/3-1.png');
  this.load.image('3-2', 'assets/3-2.png');
  this.load.image('3-3', 'assets/3-3.png');

}

function create ()
{
  var parent = this;

  var xStart = 50;
  var yStart = 50;

  var xStep = 100;
  var yStep = 100;

  this.btnArray = [
    [null],
    [null],
    [null],
    [null]
  ];

  for (var yPos = 0; yPos < 4; yPos++) {
    for (var xPos = 0; xPos < 4; xPos++) {
      console.log(xPos, yPos);
      this.btnArray[xPos][yPos] = this.add.image(xStart+xPos*xStep, yStart+yPos*yStep, yPos+"-"+xPos);
      this.btnArray[xPos][yPos].setInteractive({ useHandCursor: true });
      this.btnArray[xPos][yPos].xPos = xPos;
      this.btnArray[xPos][yPos].yPos = yPos;
    }
  }

  this.input.on ( 'gameobjectdown', function (pointer, gameObject) {
    console.log(gameObject.xPos, gameObject.yPos);

    gameObject.xPos++
    if (gameObject.xPos>3) {
      gameObject.xPos=0
      gameObject.yPos++
    }
    if (gameObject.yPos>3) gameObject.yPos = 0;

    gameObject.setTexture (gameObject.yPos +"-"+ gameObject.xPos);
  });

}
