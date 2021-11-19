const canvas = document.getElementById('canvas')
canvas.height = window.innerHeight
canvas.width = window.innerWidth

const ctx = canvas.getContext('2d')

let prevX = null
let prevY = null

ctx.lineWidth = 5

let draw = false

let clrs = document.querySelectorAll('.clr')

clrs = Array.from(clrs)

clrs.forEach((clr) => {
  clr.addEventListener('click', () => {
    ctx.strokeStyle = clr.dataset.clr
  })
})

const clearBtn = document.querySelector('.clear')
clearBtn.addEventListener('click', () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
})

const saveBtn = document.querySelector('.save')
saveBtn.addEventListener('click', () => {
  const data = canvas.toDataURL('imag/png')
  const a = document.createElement('a')
  a.href = data
  a.download = 'sketch.png'
  a.click()
})

window.addEventListener('mousedown', (e) => { draw = true })
window.addEventListener('mouseup', (e) => { draw = false })
window.addEventListener('touchstart', (e) => { draw = true })
window.addEventListener('touchend', (e) => { draw = false })

window.addEventListener('mousemove', (e) => {
  if (prevX === null || prevY === null || !draw) {
    prevX = e.clientX
    prevY = e.clientY
    return
  }
  const currentX = e.clientX
  const currentY = e.clientY

  ctx.beginPath()
  ctx.moveTo(prevX, prevY)
  ctx.lineTo(currentX, currentY)
  ctx.stroke()

  prevX = currentX
  prevY = currentY
})
window.addEventListener('touchmove', (e) => {
  if (prevX === null || prevY === null || !draw) {
    prevX = e.clientX
    prevY = e.clientY
    return
  }
  const currentX = e.clientX
  const currentY = e.clientY

  ctx.beginPath()
  ctx.moveTo(prevX, prevY)
  ctx.lineTo(currentX, currentY)
  ctx.stroke()

  prevX = currentX
  prevY = currentY
})
