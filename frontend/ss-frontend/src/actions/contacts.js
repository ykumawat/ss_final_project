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

function updatedContact(contacts) {
  return {
    type: "CONTACT_UPDATED",
    payload: contacts
  }
}

function deletedContact(contacts) {
  return {
    type: "CONTACT_DELETED",
    payload: contacts
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

export function editContact(id, name, company, email, phone, notes) {
  const userId = localStorage.getItem("userId")
  const body = JSON.stringify({id: id, user_id: userId, name: name, company: company, email: email, phone: phone, notes: notes})
  return function(dispatch) {
    const jwtToken = localStorage.getItem("jwtToken")
    fetch(`http://localhost:3000/api/v1/contacts/${id}`, {
      method: 'PATCH',
      body: body,
      headers: {
        "Authorization": "Bearer" + jwtToken,
        "Content-Type": 'application/json'
      }
    }).then((res) => res.json())
    .then((json) => {
      const contacts = json.contacts
      dispatch(updatedContact(contacts))
    })
  }
}

export function deleteContact(id) {
  const userId = localStorage.getItem("userId")
  const body = JSON.stringify({id: id, user_id: userId})
  return function(dispatch) {
    const jwtToken = localStorage.getItem("jwtToken")
    fetch(`http://localhost:3000/api/v1/contacts/${id}`, {
      method: 'DELETE',
      body: body,
      headers: {
        "Authorization": "Bearer" + jwtToken,
        "Content-Type": 'application/json'
      }
    }).then((res) => res.json())
    .then((json) => {
      console.log(json)
      const contacts = json.contacts
      dispatch(deletedContact(contacts))
    })
  }
}
