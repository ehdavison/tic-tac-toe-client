'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const events = require('./games/events')

$(() => {
  console.log('DOM is loaded')
  // event listener for sign-in-form
  $('#sign-up-form').on('submit', events.onSignUp)
  $('#sign-in-form').on('submit', events.onSignIn)
  $('#sign-out-form').on('submit', events.onSignOut)
  $('#change-password-form').on('submit', events.onChangePassword)
  // attach event handler to each square
  //nevermind that for now
  // new game button
  $('#new-game-button').on('submit', events.onNewGame)
  $('#zero').one('click', events.onMakeChoice)
  $('#one').one('click', events.onMakeChoice)
  $('#two').one('click', events.onMakeChoice)
  $('#three').one('click', events.onMakeChoice)
  $('#four').one('click', events.onMakeChoice)
  $('#five').one('click', events.onMakeChoice)
  $('#six').one('click', events.onMakeChoice)
  $('#seven').one('click', events.onMakeChoice)
  $('#eight').one('click', events.onMakeChoice)
})
