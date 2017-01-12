const c = document.getElementById("bounceBox");
const ctx = c.getContext("2d");


class BouncingBalls {
  constructor(ballCount, boundary=800) {
    this.balls = [];
    this.boundary = boundary;

    // populates canvas with initial set of circles with random coordinates
    for (let i = 0; i < ballCount; i++) {
      this.balls.push([
      Math.floor(Math.random() * this.boundary),
      Math.floor(Math.random() * this.boundary)
      ]);
      this.ball(this.balls[i][0], this.balls[i][1]);
    }
  }

  ball(x0=0, y0=0, r=10, a=0, b=Math.PI*2) {
    // generates and filled black ball on our graph
    ctx.beginPath();
    ctx.arc(x0, y0, r, a, b);
    ctx.fill();
  }

  moveBalls(speedX = 10, speedY = 10, r = 10) {
    let vx = null;
    let vy = null;
    let xDir = null;
    let yDir = null;
    let count = 0;
    setInterval (() => {
      // clear the graph and regenerate all points incremented by the velocity
      ctx.clearRect(0, 0, c.width, c.height);
      this.balls.forEach((b, i) => {
        xDir = Math.random();
        yDir = Math.random();
        vx = speedX;
        vy = speedY;

        // randomly choose direction of movement
        if (xDir < 0.5) vx = speedX * -1;
        if (yDir < 0.5) vy = speedY * -1;

        // if the ball is at the boundary, reverse its direction
        if ((this.balls[i][0] + vx) < 0 + r || this.balls[i][0] > this.boundary - r) vx = -vx;
        if ((this.balls[i][1] + vy) < 0 + r || this.balls[i][1] > this.boundary - r) vy = -vy;

        // increment each coordinate by the corresponding velocity and draw it
        this.balls[i][0] += vx;
        this.balls[i][1] += vy;
        this.ball(this.balls[i][0], this.balls[i][1]);
      });
    }, 200)

  }
}

const bounceHouse = new BouncingBalls(50);
bounceHouse.moveBalls();