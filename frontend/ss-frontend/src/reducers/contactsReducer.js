function contactsReducer(state = {isFetching: false, list: []}, action) {
  switch(action.type) {
    case "FETCHING_INFO":
      return Object.assign({}, state, { isFetching: true})
    case "LOADED_CONTACTS":
      return Object.assign({}, state, {list: action.payload, isFetching: false})
    case "CONTACT_UPDATED":
      return Object.assign({}, state, {list: action.payload, isFetching: false})
    default:
      return state
  }
}

export default contactsReducer
