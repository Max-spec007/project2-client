const config = require('./config')
const store = require('./store')
const currentUser = require('./currentUser')

const signUp = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: data
  })
}

const signIn = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data: data
  })
}

const signOut = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    data: '{}',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const changePassword = function (data) {
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: data
  })
}

const groceryListSubmit = function (data) {
  return $.ajax({
    url: config.apiUrl + '/groceries',
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: data
  })
}

// const onDelete = function (data)
//   return $.ajax({
//     url: config.apiUrl + '/groceries',
//     method: 'DELETE',
//     data: '{}',
//     headers: {
//     Authorization: 'Bearer ' + store.user.token
//   },
// })
// }

// const listHistory = function () {
//   return $.ajax({
//     url: config.apiUrl + '/groceries',
//     method: 'GET',
//     headers: {
//       Authorization: 'Bearer ' + store.user.token
//     }
//   })
// }

// const onSquaresClick = function (data, playerValue, gamesOver) {
//   return $.ajax({
//     url: config.apiUrl + '/games/' + currentPlay.game._id,
//     method: 'PATCH',
//     headers: {
//       Authorization: 'Bearer ' + store.user.token
//     },
//     data: {
//       game: {
//         cell: {
//           index: data,
//           value: playerValue
//         },
//         over: gamesOver
//       }
//     }
//   })
// }

module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword,
  groceryListSubmit,
  currentUser
  // delete
  // gamesHistory,
  // onSquaresClick,
  // currentPlay
}