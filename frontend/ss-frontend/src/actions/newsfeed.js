function fetchingInfo() {
  return {
    type: "FETCHING_INFO"
  }
}

function loadedNewsfeed(posts) {
  return {
    type: "LOADED_NEWSFEED",
    payload: posts
  }
}

export function loadNewsfeed() {
  return function(dispatch) {
    dispatch(fetchingInfo())
    const jwtToken = localStorage.getItem("jwtToken")
    fetch('http://localhost:3000/api/v1/newsfeed_posts', {
      method: 'GET',
      headers: {
        "Authorization": "Bearer" + jwtToken
      }
    }).then((res) => res.json())
    .then((json) => {
      dispatch(loadedNewsfeed(json.postInfo))
    })
  }
}
