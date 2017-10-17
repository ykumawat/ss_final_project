function imageFormReducer(state = {url: "", name: "", company: "", email: "", phone: "", notes: "", image: ""}, action) {
  switch(action.type) {
    case "SUBMIT_FORM":
      return Object.assign({}, state, {url: action.payload.url, name: action.payload.name, company: action.payload.company, email: action.payload.email, phone: action.payload.phone, notes: action.payload.notes, image: action.payload.image})
    default:
      return state
  }
}

export default imageFormReducer
