'use strict'

const getFormFields = require('./../../../lib/get-form-fields')
const ui = require('./ui')
const api = require('./api')

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

module.exports = {
    onSignUp,
    onSignIn,
    onSignOut,
    onChangePassword
}