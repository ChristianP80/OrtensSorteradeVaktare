import { FETCH_CATEGORIES, FETCH_CHUCKJOKE, FETCH_SOMEONEELSEJOKE, FETCH_CHUCKJOKEWITHCATEGORY } from './types'
import axios from 'axios'

export const fetchChuckJoke = () => dispatch  => {
  axios.get('http://api.icndb.com/jokes/random')
    .then((response) => {
      console.log(response);
      dispatch ({
        type: FETCH_CHUCKJOKE,
        payload: response
      })
    })
}
// fetch using ajax below
// export const fetchChuckJoke = () => dispatch => {
//     fetch('http://api.icndb.com/jokes/random')
//       .then(response => response.json())
//       .then(result => dispatch({
//           type: FETCH_CHUCKJOKE,
//           payload: result
//       })
//   )
// }
export const fetchCategories = () => dispatch => {
  axios.get('https://api.chucknorris.io/jokes/categories')
    .then((response) => {
      console.log(response);
      dispatch ({
        type: FETCH_CATEGORIES,
        payload: response
      })
    })
}

// export const fetchCategories = () => dispatch => {
//         fetch('https://api.chucknorris.io/jokes/categories')
//         .then(response => response.json())
//         .then(result => dispatch({
//             type: FETCH_CATEGORIES,
//             payload: result
//         })
//     )
// }

export const fetchSomeOneElsesData = () =>  dispatch => {
  var firstName = document.getElementById('firstName').value;
  var lastName = document.getElementById('lastName').value;
  var adress = ('http://api.icndb.com/jokes/random' + '?firstName=' + firstName + '&amp&lastName=' + lastName)
  axios.get(adress)
    .then((response) =>{
      console.log(response);
      dispatch({
        type: FETCH_SOMEONEELSEJOKE,
        payload: response
      })
    })
 }


// export const fetchSomeOneElsesData = () =>  dispatch => {
//   var firstName = document.getElementById('firstName').value;
//   var lastName = document.getElementById('lastName').value;
//   var adress = ('http://api.icndb.com/jokes/random' + '?firstName=' + firstName + '&amp&lastName=' + lastName)
//   console.log(firstName, lastName);
//   console.log(adress);
//   fetch(adress)
//     .then(response => response.json())
//     .then(result => dispatch({
//       type: FETCH_SOMEONEELSEJOKE,
//       payload : result
//     })
//   )
// }

export const fetchChuckJokeWithCategory = (category) => dispatch => {
  var adress = ('https://api.chucknorris.io/jokes/random?category=' + category)
  axios.get(adress)
    .then((response) => {
      console.log(response);
      dispatch({
        type: FETCH_CHUCKJOKEWITHCATEGORY,
        payload: response
      })
    })
}
// export const fetchChuckJokeWithCategory = (category) => dispatch => {
//   var adress = ('https://api.chucknorris.io/jokes/random?category=' + category)
//   fetch(adress)
//     .then(response => response.json())
//     .then(result => dispatch({
//       type: FETCH_CHUCKJOKEWITHCATEGORY,
//       payload: result
//     })
//   )
// }
