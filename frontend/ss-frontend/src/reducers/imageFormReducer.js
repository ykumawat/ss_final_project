function imageFormReducer(state = {isFetching: false, text: "", url: "", name: "", company: "", email: "", phone: "", notes: "", image: ""}, action) {
  switch(action.type) {
    case "SUBMIT_FORM":
      return Object.assign({}, state, {url: action.payload.url, name: action.payload.name, company: action.payload.company, email: action.payload.email, phone: action.payload.phone, notes: action.payload.notes, image: action.payload.image})
    case "FETCHING_INFO":
      return Object.assign({}, state, {url: action.payload, isFetching: true})
    // case "DATA_RETRIEVED":
    //   return Object.assign({}, state, {text: action.payload})
    case "EXPORTING_TEXT_FOR_PROCESSING":
      return Object.assign({}, state, {isFetching: true, text: action.payload})
    // case "EXPORTING_TEXT_TO_USER":
    //   return Object.assign({}, state, )
    default:
      return state
  }
}

export default imageFormReducer
