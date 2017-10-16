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
  return fetch("http://localhost:3000/login", {
    method: 'post',
    body: body,
    headers: {
      "Accept": "application/json",
      "Content-Type":"application/json"
    }
  })
    .then((res) => res.json())
}

export function signupUser(loginParams) {
  const body = JSON.stringify(loginParams)
  return fetch("http://localhost:3000/api/v1/users", {
    method: 'post',
    body: body,
    headers: {
      "Accept": "application/json",
      "Content-Type":"application/json"
    }
  })
    .then((res) => res.json())
}

export function logoutUser(){
  localStorage.removeItem("jwtToken")
}
