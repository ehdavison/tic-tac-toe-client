'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  console.log('DOM is loaded')
  // event listener for sign-in-form
  $('#sign-up-form').on('submit', events.onSignUp)
})
