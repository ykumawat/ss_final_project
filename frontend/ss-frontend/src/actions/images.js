function fetchingInfoImageToText(urlString) {
  return {
    type: "FETCHING_INFO",
    payload: urlString
  }
}

function dataRetrieved() {
  return {
    type: "DATA_RETRIEVED"
  }
}

function exportingForProcessing(text) {
  return {
    type: "EXPORTING_TEXT_FOR_PROCESSING",
    payload: text
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
    dispatch(fetchingInfoImageToText(urlString))
    fetch(`https://vision.googleapis.com/v1/images:annotate?key=`+ process.env.REACT_APP_CLOUDVISION_KEY, {
      method: 'POST',
      body: body,
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    })
      .then((res) => res.json())
      .then((json) => {
        dispatch(exportingForProcessing(json.responses[0].fullTextAnnotation.text))
      })
  }
}

export function textProcessing(text) {
  let textString = text.toString()
  const body = JSON.stringify({"document": {
    "type": "PLAIN_TEXT",
    "language": "en", //change this later to get input from user about language
    "content": textString
    },
    "encodingType": "UTF8"
  })

  return function(dispatch) {
    fetch(`https://language.googleapis.com/v1/documents:analyzeEntities?key=`+ process.env.REACT_APP_CLOUDVISION_KEY, {
      method: 'POST',
      body: body,
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then((res) => res.json())
    .then((data) => console.log("this is from nat lang processing api",data))
  }
}
