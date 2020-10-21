'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const events = require('./games/events')

$(() => {
  console.log('DOM is loaded')
  //game-board starts off hidden
  $('.game-board').hide()

  //sign-out starts off hidden
  $('#sign-out-form').hide()

  //change-password-form starts off hidden
  $('#change-password-form').hide()

  //new game starts off hidden
  $('#new-game-button').hide()
  
  // event listener for sign-in-form
  $('#sign-up-form').on('submit', events.onSignUp)
  $('#sign-in-form').on('submit', events.onSignIn)
  $('#sign-out-form').on('submit', events.onSignOut)
  $('#change-password-form').on('submit', events.onChangePassword)
  // attach event handler to each square
  //nevermind that for now
  // new game button
  $('#new-game-button').on('submit', events.onNewGame)
  $('.square').one('click', events.onMakeChoice)
})
