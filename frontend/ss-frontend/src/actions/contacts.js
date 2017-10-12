function fetchingInfo() {
  return {
    type: "FETCHING_INFO"
  }
}

function fetchedContacts(contacts) {
  return {
    type: "LOADED_CONTACTS",
    payload: contacts
  }
}

export function fetchImageInfo(url) {
  let urlString = url.toString()
  const body = JSON.stringify({"requests":[
    {"image":
      {"source":
        {"imageUri": urlString}
        },
      "features":[
        {"type":"TEXT_DETECTION"}
        ]
      }
    ]
  })
  return function(dispatch) {
    dispatch(fetchingInfo())
    fetch(`https://vision.googleapis.com/v1/images:annotate?key=`+ process.env.REACT_APP_CLOUDVISION_KEY, {
      method: 'POST',
      body: body,
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    })
      .then((res) => res.json())
      .then((json) => console.log(json)) //change this console log to have input passed to google cloud natural lang processing api
  }
}

export function loadUserContacts() {
  return function(dispatch) {
    dispatch(fetchingInfo())
    fetch('http://localhost:3000/api/v1/users')
    .then((res) => res.json())
    .then((json) => {
      console.log(json)
      const contacts = json
      dispatch(fetchedContacts(contacts))
    })
  }
}
