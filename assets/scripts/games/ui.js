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
}

const signInFailure = function () {
    $('#message').text('Sign in failed ' + response.user.email)
}

module.exports = {
    signUpSuccess,
    signUpFailure,
    signInSuccess,
    signInFailure
}