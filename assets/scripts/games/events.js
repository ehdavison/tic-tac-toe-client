'use strict'

const getFormFields = require('./../../../lib/get-form-fields')
const ui = require('./ui')
const api = require('./api')
const { makeMove } = require('./api')
const { blockParams } = require('handlebars')

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

// use the jquery event function '.one' to trigger placing 
//either an X or and O



let cells = ["", "", "", "", "", "", "", "", ""]

// function that cycles between x and o
// const choices = ['x', 'o', 'x', 'o', 'x', 'o', 'x', 'o', 'x']
let over = false
let currentChoice = 'X'
const xOrO = function () {
    api.makeMove(currentChoice)
    if(currentChoice === 'X') {
        return currentChoice = 'O'
        
    } else if (currentChoice === 'O') {
        return currentChoice = 'X'
    }
}

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
    api.makeMove(data)
    .then(ui.makeMoveSuccess)
    .catch(ui.makeMoveFailure)
    currentChoice = currentChoice === 'X'?'O':'X'
}

module.exports = {
    onSignUp,
    onSignIn,
    onSignOut,
    onChangePassword,
    onNewGame,
    onMakeChoice
}