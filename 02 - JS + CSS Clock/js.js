'use strict'

const clock = document.querySelector('div.clock-face')
const secHand = clock.querySelector('div.second-hand')
const minHand = clock.querySelector('div.min-hand')
const hrHand = clock.querySelector('div.hour-hand')

function setTime () {
  const curr = new Date()
  const secRot = convertToClockDegrees(curr.getSeconds(), 60)
  const minRot = minClockDegrees(curr)
  const hrRot = hrClockDegrees(curr)

  secHand.style.transform = `rotate(${secRot}deg)`
  minHand.style.transform = `rotate(${minRot}deg)`
  hrHand.style.transform = `rotate(${hrRot}deg)`
}

function minClockDegrees (now) {
  return convertToClockDegrees(now.getMinutes() + now.getSeconds() / 60, 60)
}

function hrClockDegrees (now) {
  return convertToClockDegrees(now.getHours() + now.getMinutes() / 60, 12)
}

function convertToClockDegrees (num, dem) {
  return ((num / dem) * 360) + 90
}

setInterval(setTime, 1000)
setTime()
