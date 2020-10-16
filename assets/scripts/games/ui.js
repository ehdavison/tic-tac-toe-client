'use strict'

const store = require('./../store')

const signUpSuccess = function (response) {
    $('#message').text('Thank you for signing up! ' + response.user.email)
    
}
const signUpFailure = function () {
    $('#message').text('Sign up failed, please try again ' + response.user.email)
}

const signInSuccess = function (response) {
    $('#message').text('Thank you for signing in ' + response.user.email)
    store.user = response.user
}

const signInFailure = function () {
    $('#message').text('Sign in failed ' + response.user.email)
}

const signOutSuccess = function (response) {
    console.log('hello')
    $('#message').text('Sign out successful')
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

module.exports = {
    signUpSuccess,
    signUpFailure,
    signInSuccess,
    signInFailure,
    signOutSuccess,
    signOutFailure,
    changePasswordSuccess,
    changePasswordFailure
}