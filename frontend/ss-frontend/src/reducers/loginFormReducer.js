function loginFormReducer(state = {emailInput: "", passwordInput: ""}, action) {
  switch(action.type) {
    case "SUBMIT_FORM":
      return Object.assign({}, state, {emailInput: action.payload.emailInput, passwordInput: action.payload.passwordInput})
    default:
      return state
  }
}

export default loginFormReducer
