function contactsReducer(state = {isFetching: false, list: []}, action) {
  switch(action.type) {
    case "FETCHING_INFO":
      return Object.assign({}, state, { isFetching: true})

    default:
      return state
  }
}

export default contactsReducer
