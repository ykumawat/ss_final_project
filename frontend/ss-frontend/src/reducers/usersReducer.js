function usersReducer(state = {userInfo: {}, isLoggedIn: false, newUser: true, list: []}, action) {
  switch(action.type) {
    case "LOG_IN_SUCCESS":
      return Object.assign({}, state, {userInfo: action.payload, isLoggedIn: true, newUser: false})
    case "SIGN_UP_SUCCESS":
      return Object.assign({}, state, {userInfo: action.payload, isLoggedIn: true, newUser: true})
    case "LOG_OUT_SUCCESS":
      return Object.assign({}, state, {userInfo:{}, isLoggedIn: false})
    case "USERS_LOADED":
      return Object.assign({}, state, {list: action.payload})
    default:
      return state
  }
}

export default usersReducer
