function usersReducer(state = {userInfo: {}, isLoggedIn: false, newUser: true}, action) {
  switch(action.type) {
    case "LOG_IN_SUCCESS":
      return Object.assign({}, state, {userInfo: action.payload, isLoggedIn: true, newUser: false})
    case "SIGN_UP_SUCCESS":
      return Object.assign({}, state, {userInfo: action.payload, isLoggedIn: true, newUser: true})
    case "LOG_OUT_SUCCESS":
      return Object.assign({}, state, {userInfo:{}, isLoggedIn: false})
    default:
      return state
  }
}

export default usersReducer
