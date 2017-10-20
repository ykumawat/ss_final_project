export function fetchingInfoImageToText(urlString) {
  return {
    type: "FETCHING_INFO",
    payload: urlString
  }
}

export function addOrganization(organization) {
  return {
    type: "ADD_ORGANIZATION",
    payload: organization
  }
}

export function addPerson(person) {
  return {
    type: "ADD_PERSON",
    payload: person
  }
}

export function addLocation(location) {
  return {
    type: "ADD_LOCATION",
    payload: location
  }
}

export function addPhone(phone) {
  return {
    type: "ADD_PHONE",
    payload: phone
  }
}

export function addEmail(email) {
  return {
    type: "ADD_EMAIL",
    payload: email
  }
}

export function addNotes(notes) {
  return {
    type: "ADD_NOTES",
    payload: notes
  }
}

function contactDataRetrieved(contactData) {
  return {
    type: "CONTACT_DATA_RETRIEVED",
    payload: contactData
  }
}

function exportingForRendering(obj) {
  return {
    type: "EXPORTING_TEXT_FOR_RENDERING",
    payload: obj
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
    // dispatch(fetchingInfoImageToText(urlString))
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
        console.log(json.responses[0].fullTextAnnotation.text)
        dispatch(textProcessingNatLang(json.responses[0].fullTextAnnotation.text))
        // dispatch(textProcessingTextRazor(json.responses[0].fullTextAnnotation.text))
        // dispatch(textProcessingWatson(json.responses[0].fullTextAnnotation.text))
      })
      .catch(e => console.log(e))
  }
}

export function textProcessingNatLang(text) {
  // let textString = text.toString()
  const body = JSON.stringify({"document": {
    "type": "PLAIN_TEXT",
    "language": "en", //change this later to get input from user about language
    "content": text
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
    .then((data) => dispatch(contactDataRetrieved(data)))
  }
}

export function textProcessingTextRazor(text) {
  console.log("this function is hit 2nd?")

  var details = {
    "text": text,
    "extractors": "entities"
  }

  var formBody = []
  for (var property in details) {
    var encodedKey = encodeURIComponent(property);
    var encodedValue = encodeURIComponent(details[property]);
    formBody.push(encodedKey + "=" + encodedValue)
  }
  formBody = formBody.join("&")

  return function(dispatch) {
    fetch("https://api.textrazor.com", {
      method: 'POST',
      body: formBody,
      headers: {
        "X-TextRazor-Key": process.env.REACT_APP_TEXTRAZOR_KEY,
        "Accept-encoding": "application/gzip",
        "Content-Type": "application/x-www-form-urlencoded"
      }
    }).then((res) => res.json())
    .then((data) => console.log("this is from TEXT RAZOR", data))
  }
}

export function textProcessingWatson(text) {
  console.log("this function is hit 3rd?")

  const body = JSON.stringify({
    "text": text,
    "features": {
      "entities": {
        "emotion": true,
        "sentiment": true,
        "limit": 2
      },
      "keywords": {
        "emotion": true,
        "sentiment": true,
        "limit": 2
      }
    }
  })

  return function(dispatch) {
    fetch('https://gateway.watsonplatform.net/natural-language-understanding/api/v1/analyze?version=2017-02-27', {
      method: 'POST',
      body: body,
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Basic" + process.env.REACT_APP_WATSON_KEY
      }
    }).then((res) => res.json())
    .then((data) => console.log(data))
  }
}
