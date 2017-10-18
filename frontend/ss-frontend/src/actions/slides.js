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
