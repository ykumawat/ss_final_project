function imageFormReducer(state = {isRendering: false, isFetching: false, url: undefined, name: [], organization: [], location: [], email: [], phone: [], notes: []}, action) {
  switch(action.type) {
    case "SUBMIT_FORM":
      return Object.assign({}, state, {url: action.payload.url, name: action.payload.name, organization: action.payload.organization, email: action.payload.email, phone: action.payload.phone, notes: action.payload.notes, image: action.payload.image})
    case "FETCHING_INFO":
      return Object.assign({}, state, {url: action.payload, isFetching: true})
    case "EXPORTING_TEXT_FOR_RENDERING":
      return Object.assign({}, state, {name: action.payload.name, organization: action.payload.organization, email: action.payload.email, phone: action.payload.phone})
    case "RENDERING_TO_USER_FOR_EDITING":
      return Object.assign({}, state, {isRendering: true})
    case "CHANGING_URL":
      return Object.assign({}, state, {isRendering: false, url: undefined})
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
