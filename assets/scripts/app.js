'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const events = require('./games/events')

$(() => {
  //game-board starts off hidden
  $('.game-board').hide()

  //sign-out starts off hidden
  $('#sign-out-form').hide()

  //change-password-form starts off hidden
  $('#change-password-form').hide()

  //new game starts off hidden
  $('#new-game-button').hide()

  //view games starts off hidden
  $('#view-games-button').hide()

  //sign up starts off hidden
  $('#sign-up-form').hide()

  //sign in starts off hidden
  $('#sign-in-form').hide()
  
  // event listener for sign-in-form
  $('#sign-up-form').on('submit', events.onSignUp)
  $('#sign-in-form').on('submit', events.onSignIn)
  $('#sign-out-form').on('submit', events.onSignOut)
  $('#change-password-form').on('submit', events.onChangePassword)

  // new game button
  $('#new-game-button').on('submit', events.onNewGame)
  $('#view-games-button').on('submit', events.onViewGames)

  // show signup/signin
  $('#show-sign-up').on('submit', events.onShowSignUp)
  $('#show-sign-in').on('submit', events.onShowSignIn)

  // on show account
  $('#show-account').hide()
  $('#show-account').on('submit', events.onShowAccount)
})
