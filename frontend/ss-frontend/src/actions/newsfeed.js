function fetchingInfo() {
  return {
    type: "FETCHING_INFO"
  }
}

function loadedNewsfeed(newsfeed) {
  return {
    type: "LOADED_NEWSFEED",
    payload: newsfeed
  }
}

export function loadNewsfeed() {
  return function(dispatch) {
    dispatch(fetchingInfo())
    const jwtToken = localStorage.getItem("jwtToken")
    fetch('http://localStorage:3000/api/v1/newsfeed', {
      method: 'GET',
      headers: {
        "Authorization": "Bearer" + jwtToken
      }
    }).then((res) => res.json())
    .then((json) => {
      const newsfeed = json.newsfeed
      dispatch(loadedNewsfeed(newsfeed))
    })
  }
}
