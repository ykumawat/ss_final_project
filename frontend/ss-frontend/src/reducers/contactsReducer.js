function contactsReducer(state = {isFetching: false, list: [{name: "Elon", company: "Tesla", email: "e@m.com", phone: "123-345-5678", note: "elon musk", url: "none"}]}, action) {
  switch(action.type) {
    case "FETCHING_INFO":
      return Object.assign({}, state, { isFetching: true})
    case "LOADED_CONTACTS":
      return Object.assign({}, state, {list: action.payload, isFetching: false})
    default:
      return state
  }
}

export default contactsReducer
