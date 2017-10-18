function fetchedContacts(contacts) {
  return {
    type: "LOADED_CONTACTS",
    payload: contacts
  }
}

function fetchingInfo() {
  return {
    type: "FETCHING_INFO"
  }
}

export function loadUserContacts() {
  return function(dispatch) {
    dispatch(fetchingInfo())
    const jwtToken = localStorage.getItem("jwtToken")
    fetch('http://localhost:3000/api/v1/users/me', {
      method: 'GET',
      headers: {
        "Authorization": "Bearer" + jwtToken
      }
    }).then((res) => res.json())
    .then((json) => {
      const contacts = json.contacts
      dispatch(fetchedContacts(contacts))
    })
  }
}
