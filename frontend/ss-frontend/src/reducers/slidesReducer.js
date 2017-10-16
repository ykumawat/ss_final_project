function slidesReducer(state = {isFetching: false, list: []}, action) {
  switch(action.type) {
    case "FETCHING_USER_SLIDES":
      return Object.assign({}, state, { isFetching: true})

    default:
      return state
  }
}

export default slidesReducer
