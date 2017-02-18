require('./eightpoint.css')
require('./styles.css')

const emojis = [
  'spy',
  'lion',
  'rofl',
  'sunglasses',
  'blush',
  'hugging',
  'money_face',
  'cowboy',
  'ghost',
  'shit',
  'ok',
  'ok_woman',
  'joy',
  'facepalm',
]

const SCREEN_WIDTH = screen.width
const EMOJI_MAX_WIDTH = 160

function getRandomArrayItem(arr) {
  return arr.splice([Math.floor(Math.random() * arr.length)],1)
}

function insertRandomEmoji(emojis) {
  const img = document.createElement('img')
  img.src = `assets/emojis/${getRandomArrayItem(emojis)}.png`
  img.classList.add('rain')
  img.style.left = `${Math.random() * (SCREEN_WIDTH - EMOJI_MAX_WIDTH)}px`

  body.append(img)
  setTimeout(() => {
    img.style.transform = 'translateY(130vh)'
  }, Math.round(Math.random() * 1000))

  img.addEventListener('transitionend', () => img.remove())
}

const body = document.querySelector('body')
const matheus = document.querySelector('h1')

matheus.onclick = () => {
  const arr = [...emojis]
  for (const i = 0; i < 10; i++) {
    insertRandomEmoji(arr)
  }
}


console.log('🕵 https://github.com/matheuss/website 🕵')
