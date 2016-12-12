const keys = document.querySelector('div.keys')
const d = window.document

function captureKey (e) {
  const ele = keys.querySelector(`div.key[data-key="${e.keyCode}"]`)
  const aud = d.querySelector(`audio[data-key="${e.keyCode}"]`)

  if (!aud) return
  ele.classList.add('playing')
  aud.currentTime = 0
  aud.play()
}

function removePlayingClass (e) {
  if (e.propertyName !== 'transform') return
  this.classList.remove('playing')
}

Array.prototype.forEach.call(keys.children, k => { k.addEventListener('transitionend', removePlayingClass, false) })

window.addEventListener('keydown', captureKey)
