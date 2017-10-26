function fetchedSlides(slides) {
  return {
    type: "LOADED_SLIDES",
    payload: slides
  }
}

function fetchingInfo() {
  return {
    type: "FETCHING_INFO"
  }
}

function updatedSlide(slides) {
  return {
    type: "SLIDE_UPDATED",
    payload: slides
  }
}

function deletedSlide(slides) {
  return {
    type: "SLIDE_DELETED",
    payload: slides
  }
}

export function loadUserSlides() {
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
      const slides = json.slides
      dispatch(fetchedSlides(slides))
    })
  }
}

export function editSlide(id, text, topic) {
  const userId = localStorage.getItem("userId")
  const body = JSON.stringify({id: id, user_id: userId, text: text, topic: topic})
  return function(dispatch) {
    const jwtToken = localStorage.getItem("jwtToken")
    fetch(`http://localhost:3000/api/v1/slides/${id}`, {
      method: 'PATCH',
      body: body,
      headers: {
        "Authorization": "Bearer" + jwtToken,
        "Content-Type": 'application/json'
      }
    }).then((res) => res.json())
    .then((json) => {
      const slides = json.slides
      dispatch(updatedSlide(slides))
    })
  }
}

export function deleteSlide(id) {
  const userId = localStorage.getItem("userId")
  const body = JSON.stringify({id: id, user_id: userId})
  return function(dispatch) {
    const jwtToken = localStorage.getItem("jwtToken")
    fetch(`http://localhost:3000/api/v1/slides/${id}`, {
      method: 'DELETE',
      body: body,
      headers: {
        "Authorization": "Bearer" + jwtToken,
        "Content-Type": 'application/json'
      }
    }).then((res) => res.json())
    .then((json) => {
      const slides = json.slides
      dispatch(deletedSlide(slides))
    })
  }
}

export function returnState() {
  return (dispatch, getState) => {
    dispatch(addNoteToUser(getState().imageForm))
  }
}

export function addNoteToUser(formInputs){
  const userId = localStorage.getItem("userId")
  const body = JSON.stringify({user_id: userId, text: formInputs.notes[0], url: formInputs.url, topic: formInputs.topic[0]})
  return function(dispatch) {
    const jwtToken = localStorage.getItem("jwtToken")
    fetch(`http://localhost:3000/api/v1/slides`, {
      method: 'POST',
      body: body,
      headers: {
        "Authorization": "Bearer" + jwtToken,
        "Content-Type": 'application/json'
      }
    }).then((res) => res.json())
    .then((json) => {
      const slides = json.slides
      dispatch(updatedSlide(slides))
    })
  }
}
