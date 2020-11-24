'use strict'

const store = require('./../store')
const { winCondition } = require('./events')

const signUpSuccess = function (response) {
    $('#message').text('Thank you for signing up! ' + response.user.email)
    $('#sign-up-form')[0].reset()
    $('#sign-up-form').hide()
    $('#sign-in-form').show()
    $('#show-sign-in').hide()
    $('#show-sign-up').show()
    
}
const signUpFailure = function () {
    $('#message').text('Sign up failed, please try again')
    $('#sign-up-form')[0].reset()
}

const signInSuccess = function (response) {
    $('#message').text('Thank you for signing in ' + response.user.email)
    $('#new-game-button').show()
    $('#view-games-button').show()
    $('#sign-in-form')[0].reset()
    $('#welcome').hide()
    //hide sign in/sign up
    $('#sign-in-form').hide()
    $('#sign-up-form').hide()
    $('#show-sign-up').hide()
    $('#show-account').show()
    store.user = response.user
}

const signInFailure = function (response) {
    $('#message').text('Incorrect username or password')
    $('#sign-in-form')[0].reset()
}

const signOutSuccess = function (response) {
    $('#message').text('Sign out successful')
    $('#sign-up-form').hide()
    $('#change-password-form').hide()
    $('#new-game-button').hide()
    $('.game-board').hide()
    $('#view-games-button').hide()
    $('#sign-out-form').hide()
    $('#sign-in-form').hide()
    $('#sign-in-form')[0].reset()
    $('#show-sign-in').show()
    $('#show-sign-up').show()
    $('#show-account').hide()
    store.user = null
}

const signOutFailure = function () {
    $('#message').text('Sign out failed, please try again ')
}

const changePasswordSuccess = function (response) {
    $('#message').text('Password change successful')
    $('#change-password-form')[0].reset()
    
}

const changePasswordFailure = function () {
    $('#message').text('Password change failed, try again')
    $('#change-password-form')[0].reset()
}

const newGameSuccess = function (response) {
    $('#message').text('You have started a new game. Good luck!')
    $('.game-board').show()
    store.game = response.game
    store.game.cells = ['', '', '',  '', '', '', '', '', '']
    store.data.game.over = false
    $('.square').text('')
    
    
}

const newGameFailure = function () {
    $('#message').text('New Game Creation Failed.')
}

const makeMoveSuccess = function (response) {
    // $('#message').text('Move Successful')
    store.game = response.game
    const cells = store.game.cells
    const square = $('.square')
    for(let i = 0; i < cells.length; i++) {
        if(cells[i]) {
            $(square[i]).text(cells[i])
        }
    }
    $('#message').text('Nice Moves!')
    
    
}

const makeMoveFailure = function (response) {
    $('#message').text('Move Failed')
}

const viewGamesSuccess = function (response) {
     
    $('.game-number-display').text('You have played ' + response.games.length + ' games!')
}

const viewGamesFailure = function () {
    $('#message').text('View Games Failed')
}


module.exports = {
    signUpSuccess,
    signUpFailure,
    signInSuccess,
    signInFailure,
    signOutSuccess,
    signOutFailure,
    changePasswordSuccess,
    changePasswordFailure,
    newGameSuccess,
    newGameFailure,
    makeMoveSuccess,
    makeMoveFailure,
    viewGamesSuccess,
    viewGamesFailure
}