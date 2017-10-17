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

function loginFailure() {
  return {
    type: "LOG_IN_FAILURE"
  }
}

export function loginUser(loginParams) {
  const body = JSON.stringify(loginParams)
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
        dispatch(signupUser(user))
      })
  }

}

export function logoutUser(){
  localStorage.removeItem("jwtToken")
}
