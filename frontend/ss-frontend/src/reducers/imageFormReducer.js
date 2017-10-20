function imageFormReducer(state = {isFetching: false, contactData: "", url: undefined, name: "", organization: "", email: "", phone: "", notes: ""}, action) {
  switch(action.type) {
    case "SUBMIT_FORM":
      return Object.assign({}, state, {url: action.payload.url, name: action.payload.name, organization: action.payload.organization, email: action.payload.email, phone: action.payload.phone, notes: action.payload.notes, image: action.payload.image})
    case "FETCHING_INFO":
      return Object.assign({}, state, {url: action.payload, isFetching: true})
    case "CONTACT_DATA_RETRIEVED":
      return Object.assign({}, state, {contactData: action.payload})
    case "EXPORTING_TEXT_FOR_RENDERING":
      return Object.assign({}, state, {name: action.payload.name, organization: action.payload.organization, email: action.payload.email, phone: action.payload.phone})
    default:
      return state
  }
}

export default imageFormReducer
