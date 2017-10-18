function slidesReducer(state = {isFetching: false, list: []}, action) {
  switch(action.type) {
    case "FETCHING_INFO":
      return Object.assign({}, state, { isFetching: true})
    case "LOADED_SLIDES":
      return Object.assign({}, state, { list: action.payload, isFetching: false})
    default:
      return state
  }
}

export default slidesReducer
