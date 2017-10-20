function imageFormReducer(state = {isFetching: false, contactData: "", url: undefined, name: undefined, organization: undefined, location: undefined, email: undefined, phone: undefined, notes: undefined}, action) {
  switch(action.type) {
    case "SUBMIT_FORM":
      return Object.assign({}, state, {url: action.payload.url, name: action.payload.name, organization: action.payload.organization, email: action.payload.email, phone: action.payload.phone, notes: action.payload.notes, image: action.payload.image})
    case "FETCHING_INFO":
      return Object.assign({}, state, {url: action.payload, isFetching: true})
    case "CONTACT_DATA_RETRIEVED":
      return Object.assign({}, state, {contactData: action.payload})
    case "EXPORTING_TEXT_FOR_RENDERING":
      return Object.assign({}, state, {name: action.payload.name, organization: action.payload.organization, email: action.payload.email, phone: action.payload.phone})
    case "ADD_ORGANIZATION":
      return Object.assign({}, state, {organization: action.payload})
    case "ADD_PERSON":
      return Object.assign({}, state, {name: action.payload})
    case "ADD_LOCATION":
      return Object.assign({}, state, {location: action.payload})
    case "ADD_PHONE":
      return Object.assign({}, state, {phone: action.payload})
    case "ADD_EMAIL":
      return Object.assign({}, state, {email: action.payload})
    case "ADD_NOTES":
      return Object.assign({}, state, {notes: action.payload})
    default:
      return state
  }
}

export default imageFormReducer
