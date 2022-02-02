import { useEffect, useRef } from 'react';
import { randomColor } from '../utils/utils'
import Particle from './Particle'

const Canvas = () => {
  // creating canvas
  const canvasRef = useRef(null)
  useEffect(() => {
    getCanvas(canvasRef.current)
  }, [canvasRef])

  return<canvas ref={canvasRef}></canvas>
}


const getCanvas = (canvas) => {
  
  const colors = ['#2185C5', '#7ECEFD', '#FFF6E5', '#FF7F66']
  const c = canvas.getContext('2d')  

  const innerHeight = window.innerHeight
  const innerWidth = window.innerWidth
  canvas.width = innerWidth
  canvas.height = innerHeight

  const mouse = {
    x: innerWidth / 2,
    y: innerHeight / 2
  }

  // Event Listeners
  window.addEventListener('mousemove', (event) => {
    mouse.x = event.clientX
    mouse.y = event.clientY
  })

  window.addEventListener('resize', () => {
    canvas.width = innerWidth
    canvas.height = innerHeight

    init()
  })


  // Implementation
let particles;
function init() {
  particles = []

  for (let i = 0; i < 800; i++) {
        const radius = (Math.random() * 2) + 1;
        particles.push(new Particle(canvas.width/2, canvas.height/2, radius, randomColor(colors), mouse, c))
  }
}

// Animation Loop
function animate() {
  requestAnimationFrame(animate)
     c.fillStyle = 'rgba(0, 0, 0, 0.05)';
    c.fillRect(0, 0, canvas.width, canvas.height);

   particles.forEach(particle => {
        particle.update()
   })
}

init()
animate()

}




export default Canvas