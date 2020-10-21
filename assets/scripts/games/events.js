'use strict'

const getFormFields = require('./../../../lib/get-form-fields')
const ui = require('./ui')
const api = require('./api')
const { makeMove } = require('./api')
const { blockParams } = require('handlebars')
const store = require('../store')


const onSignUp = function (event) {
    event.preventDefault()
    const form = event.target
    const data = getFormFields(form)
    api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
    event.preventDefault()
    const form = event.target
    const data = getFormFields(form)
    api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onSignOut = function (event) {
    event.preventDefault()
    api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onChangePassword = function (event) {
    event.preventDefault()
    const form = event.target
    const data = getFormFields(form)
    api.changePassword(data)
        .then(ui.changePasswordSuccess)
        .catch(ui.changePasswordFailure)
}


// new game button functionality

const onNewGame = function (event) {
    event.preventDefault()
    api.newGame()
    .then(ui.newGameSuccess)
    .catch(ui.newGameFailure)
}

let cells = ["", "", "", "", "", "", "", "", ""]

let over = false
let currentChoice = 'X'

const onMakeChoice = function (event) {
    event.preventDefault()
    const box = $(event.target)
    box.text(currentChoice)
    const data = {
        game: {
            cell: {
                index: box.data('cell-index'),
                value: currentChoice
            },
            over: over
        }
    }
    
    determineTie()
    horizontalWinner()
    verticalWinner()
    diagonalWinner()
    
    api.makeMove(data)
    .then(ui.makeMoveSuccess)
    .catch(ui.makeMoveFailure)
    currentChoice = currentChoice === 'X'?'O':'X'
}

// let playerOneVictory = false
// let playerTwoVictory = false

const horizontalWinner = function () {
    console.log('hello')
    if (store.game.cells[0] === 'X' && store.game.cells[1] === 'X' && store.game.cells[2] === 'X') {
        $('#message').text('Top Row X Victory')
        // playerOneVictory = true
        // console.log(playerOneVictory)
    } else if (store.game.cells[3] === 'X' && store.game.cells[4] === 'X' && store.game.cells[5] === 'X') {
        $('#message').text('Middle Row X Victory')
        playerOneVictory === true
    } else if (store.game.cells[6] === 'X' && store.game.cells[7] === 'X' && store.game.cells[8] === 'X') {
        $('#message').text('Bottom Row X Victory')
        playerOneVictory === true
    } else if (store.game.cells[0] === 'O' && store.game.cells[1] === 'O' && store.game.cells[2] === 'O') {
        $('#message').text('Top Row O Victory')
    } else if (store.game.cells[3] === 'O' && store.game.cells[4] === 'O' && store.game.cells[5] === 'O') {
        $('#message').text('Middle Row O Victory')
    } else if (store.game.cells[6] === 'O' && store.game.cells[7] === 'O' && store.game.cells[8] === 'O') {
        $('#message').text('Bottom Row O Victory')
    } 
}

const verticalWinner = function () {
    if (store.game.cells[0] === 'X' && store.game.cells[3] === 'X' && store.game.cells[6] === 'X') {
        $('#message').text('Left Column X Victory')
    } else if (store.game.cells[1] === 'X' && store.game.cells[4] === 'X' && store.game.cells[7] === 'X') {
        $('#message').text('Middle Column X Victory')
    } else if (store.game.cells[2] === 'X' && store.game.cells[5] === 'X' && store.game.cells[8] === 'X') {
        $('#message').text('Right Column X Victory')
    } else if (store.game.cells[0] === 'O' && store.game.cells[3] === 'O' && store.game.cells[6] === 'O') {
        $('#message').text('Left Column O Victory')
    } else if (store.game.cells[1] === 'O' && store.game.cells[4] === 'O' && store.game.cells[7] === 'O') {
        $('#message').text('Middle Column O Victory')
    } else if (store.game.cells[2] === 'O' && store.game.cells[5] === 'O' && store.game.cells[8] === 'O') {
        $('#message').text('Right Column O Victory')
    } 
}

const diagonalWinner = function () {
    if (store.game.cells[0] === 'X' && store.game.cells[4] === 'X' && store.game.cells[8] === 'X') {
        $('#message').text('Diagonal X Victory')
    } else if (store.game.cells[6] === 'X' && store.game.cells[4] === 'X' && store.game.cells[2] === 'X') {
        $('#message').text('Diagonal X Victory')
    } else if (store.game.cells[0] === 'O' && store.game.cells[4] === 'O' && store.game.cells[8] === 'O') {
        $('#message').text('Diagonal O Victory')
    } else if (store.game.cells[6] === 'O' && store.game.cells[4] === 'O' && store.game.cells[2] === 'O') {
        $('#message').text('Diagonal O Victory')
    }
}

// Determining a tie
let turn = 0
const countTurn = function () {
    turn++
}
const determineTie = function () {
    countTurn()
    console.log(turn)
    if (turn === 9) {
        $('#message').text("It's a tie!")
    }
}

module.exports = {
    onSignUp,
    onSignIn,
    onSignOut,
    onChangePassword,
    onNewGame,
    onMakeChoice,
    horizontalWinner,
    verticalWinner,
    diagonalWinner

}