export default class Paddle {
  constructor(game) {
    this.gameWidth = game.gameWidth;
    this.width = 150;
    this.height = 20;
    this.maxSpeed = 7;
    this.speed = 0;
    // this.jump = 0;
    this.position = {
      x: game.gameWidth / 2 - this.width / 2,
      y: game.gameHeight - this.height - 10
      // y: gameHeight / 2 - this.height / 2
    };
  }

  moveLeft() {
    this.speed = -this.maxSpeed;
  }
  moveRight() {
    this.speed = this.maxSpeed;
  }

  // moveUp() {
  //   this.jump = this.maxSpeed;
  // }

  stop() {
    this.speed = 0;
  }

  draw(ctx) {
    ctx.fillStyle = "#0ff";
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
  update(deltaTime) {
    this.position.x += this.speed;
    // this.position.y -= this.jump;

    // if (this.position.y > 500) this.position.y = 500;
    // if (this.position.y + this.height > this.height)
    //   this.position.y = this.gameHeight - this.height

    if (this.position.x < 0) this.position.x = 0;
    if (this.position.x + this.width > this.gameWidth)
      this.position.x = this.gameWidth - this.width;
  }
}
