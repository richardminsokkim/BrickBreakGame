import { detectCollision } from "./collisionDetection";

export default class Ball {
  constructor(game) {
    this.gameWidth = game.gameWidth;
    this.gameHeight = game.gameHeight;

    this.game = game;

    this.image = document.getElementById("img_ball");

    this.size = 16;
    this.reset();
  }

  reset() {
    this.speed = { x: 4, y: -2 };
    this.position = { x: 10, y: 400 };
  }

  draw(ctx) {
    ctx.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.size,
      this.size
    );
  }

  update(deltaTime) {
    this.position.x += this.speed.x;
    this.position.y += this.speed.y;

    // checking to see if the ball is hiting the wall on left or right of the screen
    if (this.position.x + this.size > this.gameWidth || this.position.x < 0) {
      this.speed.x = -this.speed.x;
    }
    // checking to see if the ball is hitting the wall on the top or bottom of the screen
    // if (this.position.y + this.size > this.gameHeight || this.position.y < 0) {
    //   this.speed.y = -this.speed.y;
    // }
    //checking to see instead of above just to see if ball is hitting top or bottome
    //hitting top of wall
    if (this.position.y < 0) {
      this.speed.y = -this.speed.y;
    }
    //hitting bottom of wall
    if (this.position.y + this.size > this.gameHeight) {
      this.game.lives--;
      this.reset();
    }
    //check collision with paddle (has been refactored into a function detectCollision to save timee)
    // let bottomOfBall = this.position.y + this.size;
    // let topOfPaddle = this.game.paddle.position.y;
    // let leftSideOfPaddle = this.game.paddle.position.x;
    // let rightSideOfPaddle =
    //   this.game.paddle.position.x + this.game.paddle.width;

    // if (
    //   bottomOfBall >= topOfPaddle &&
    //   this.position.x >= leftSideOfPaddle &&
    //   this.position.x + this.size <= rightSideOfPaddle
    // ) {
    if (detectCollision(this, this.game.paddle)) {
      this.speed.y = -this.speed.y;
      this.position.y = this.game.paddle.position.y - this.size;
    }
  }
}
