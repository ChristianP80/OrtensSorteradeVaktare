import { FETCH_CATEGORIES, FETCH_CHUCKJOKE, FETCH_SOMEONEELSEJOKE, FETCH_CHUCKJOKEWITHCATEGORY } from '../actions/types'

const initialState = {
    joke: '',
    categories: []
}

export default function(state = initialState, action) {
    switch (action.type) {
      case FETCH_CHUCKJOKE:
        return {
          ...state,
          joke: action.payload.data.value.joke,
          categories: []
        }
      case FETCH_SOMEONEELSEJOKE:
        return {
          ...state,
          joke: action.payload.data.value.joke
        }
      case FETCH_CATEGORIES:
      console.log('action payload categories', action.payload);
        return {
            ...state,
            categories: action.payload.data,
        }
        case FETCH_CHUCKJOKEWITHCATEGORY:
        console.log('FETCH_CHUCKJOKEWITHCATEGORY', action.payload)
          return {
            ...state,
            joke: action.payload.data.value,
          }
        default:
        return state
    }
}
