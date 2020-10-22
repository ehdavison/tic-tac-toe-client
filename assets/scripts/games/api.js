'use strict'

const config = require('./../config')
const store = require('./../store')
const events = require('./events')

const signUp = function (data) {
    return $.ajax ({
        url: config.apiUrl + '/sign-up',
        method: 'POST',
        data: data
    })
}

const signIn = function (data) {
    return $.ajax ({
        url: config.apiUrl + '/sign-in',
        method: 'POST',
        data: data
    })
    
}

const signOut = function (formData) {
    return $.ajax ({
        url: config.apiUrl + '/sign-out',
        method: 'DELETE',
        headers: {
            Authorization: 'Bearer ' + store.user.token
          }
    })
}

const changePassword = function (data) {
    return $.ajax ({
        url: config.apiUrl + '/change-password',
        method: 'PATCH',
        headers: {
            Authorization: 'Bearer ' + store.user.token
          },
          data: data
        })
}

const newGame = function () {
    return $.ajax ({
        url: config.apiUrl + '/games',
        method: 'POST',
        headers: {
            Authorization: 'Bearer ' + store.user.token
          }
    })
}

const makeMove = function (data) {
    return $.ajax ({
        url: config.apiUrl + '/games/' + store.game._id,
        method: 'PATCH',
        headers: {
            Authorization: 'Bearer ' + store.user.token
          },
        data: data
    })
}



module.exports = {
    signUp,
    signIn,
    signOut,
    changePassword,
    newGame,
    makeMove
}