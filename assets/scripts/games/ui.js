'use strict'

const store = require('./../store')
const { winCondition } = require('./events')

const signUpSuccess = function (response) {
    $('#message').text('Thank you for signing up! ' + response.user.email)
    
}
const signUpFailure = function () {
    $('#message').text('Sign up failed, please try again ' + response.user.email)
}

const signInSuccess = function (response) {
    $('#message').text('Thank you for signing in ' + response.user.email)
    $('#sign-out-form').show()
    $('#change-password-form').show()
    $('#new-game-button').show()
    $('#view-games-button').show()
    $('#sign-up-form').hide()
    $('#welcome').hide()
    store.user = response.user
}

const signInFailure = function () {
    $('#message').text('Sign in failed ' + response.user.email)
}

const signOutSuccess = function (response) {
    console.log('hello')
    $('#message').text('Sign out successful')
    $('#sign-up-form').show()
    $('#change-password-form').hide()
    $('#new-game-button').hide()
    $('.game-board').hide()
    $('#view-games-button').hide()
    $('#sign-out-form').hide()
    store.user = null
}

const signOutFailure = function () {
    $('#message').text('Sign out failed, please try again ' + response.user.email)
}

const changePasswordSuccess = function (response) {
    $('#message').text('Password change successful')
}

const changePasswordFailure = function () {
    $('#message').text('Password change failed, try again')
}

const newGameSuccess = function (response) {
    $('#message').text('You have started a new game. Good luck!')
    $('.game-board').show()
    store.game = response.game
    store.game.cells = ['', '', '',  '', '', '', '', '', '']
    store.data.game.over = false
    console.log(store.data.game.over)
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
    console.log(cells)
    
    
}

const makeMoveFailure = function (response) {
    $('#message').text('Move Failed')
}

const viewGamesSuccess = function (response) {
     
    $('#message').text('You have played ' + response.games.length + ' games!')
}

const viewGamesFailure = function () {
    console.log('something is not right')
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