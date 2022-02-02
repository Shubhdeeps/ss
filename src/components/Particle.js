import { randomIntFromRange } from '../utils/utils'


export default function Particle (x, y, radius, color, mouse, c) {
    this.x = x
    this.y = y
    this.radius = radius
    this.color = color
    this.radian = Math.random() * Math.PI * 2
    this.velocity = 0.01
    this.distanceFromCenter = randomIntFromRange(20, 380);
    this.lastMouse = {x: x, y: y};
  

  this.draw = function(lastPoint) {
    c.beginPath()
    c.strokeStyle = this.color;
    c.lineWidth = this.radius;
    c.moveTo(lastPoint.x, lastPoint.y)
    c.lineTo(this.x, this.y)
    c.stroke()
    c.closePath()
  }

  this.update = function() {
      const lastPoint = {x: this.x, y: this.y}
      this.radian += this.velocity
      //drag
      this.lastMouse.x += (mouse.x - this.lastMouse.x) * 0.05;
      this.lastMouse.y += (mouse.y - this.lastMouse.y) * 0.05;

      //circular
      this.x = this.lastMouse.x + Math.cos(this.radian) * this.distanceFromCenter * 2
      this.y = this.lastMouse.y + Math.sin(this.radian) * this.distanceFromCenter 
      this.draw(lastPoint)
  }
}