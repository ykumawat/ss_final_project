function loginSuccess(user) {
  return {
    type: "LOG_IN_SUCCESS",
    payload: user
  }
}

function signupUser(user) {
  return {
    type: "SIGN_UP_SUCCESS",
    payload: user
  }
}

function signOutUser() {
  return {
    type: "LOG_OUT_SUCCESS"
  }
}


export function loginUser(email, password) {
  const body = JSON.stringify({email: email, password: password})
  return function(dispatch) {
    fetch("http://localhost:3000/login", {
      method: 'post',
      body: body,
      headers: {
        "Accept": "application/json",
        "Content-Type":"application/json"
      }
    })
      .then((res) => res.json())
      .then((user) => {
        localStorage.setItem("jwtToken", user.jwt)
        dispatch(loginSuccess(user))
      })
  }

}

export function signupUser(loginParams) {
  const body = JSON.stringify(loginParams)
  return function(dispatch) {
    fetch("http://localhost:3000/api/v1/users", {
      method: 'post',
      body: body,
      headers: {
        "Accept": "application/json",
        "Content-Type":"application/json"
      }
    })
      .then((res) => res.json())
      .then((user) => {
        localStorage.setItem("jwtToken", user.jwt)
        dispatch(signupUser(user.user))
      })
  }

}

export function logoutUser(user){
  return function(dispatch) {
    localStorage.removeItem("jwtToken")
    dispatch(signOutUser())
  }
}
