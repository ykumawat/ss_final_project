
function fetchingInfo() {
  return {
    type: "FETCHING_INFO"
  }
}



//add image url to be passed in later through AddNewImageForm
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
      .then((json) => console.log(json))
  }
}
