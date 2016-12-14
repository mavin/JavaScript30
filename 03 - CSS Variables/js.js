'use strict'

const d = window.document
const inputs = d.querySelectorAll('div.controls>input')

function handleUpdate () {
  var val = (this.dataset.sizing) ? this.value + this.dataset.sizing : this.value
  console.log(val)
  d.documentElement.style.setProperty(`--${this.name}`, val)
}

inputs.forEach(i => { i.addEventListener('change', handleUpdate, false) })
inputs.forEach(i => { i.addEventListener('mousemove', handleUpdate, false) })
