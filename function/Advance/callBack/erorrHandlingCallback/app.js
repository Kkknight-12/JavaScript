// const mockAPI = (returnValue) => (arg, success, failure) => {
//     setTimeout(() => success(returnValue), 2000)
// }

// 
const mockAPI = (returnValue) => (arg, success, failure) => {
    // console.log(arg) // session-id
    // console.log(returnValue) // { id: "123765" }
    setTimeout(() => failure("Request Failed"), 2000)
}

const fetchSession = mockAPI({ id: "123765" })
const fetchUser = mockAPI({ firstname: "Bob" })
const fetchUserFavorites = mockAPI([ "lions", "tigers", "bears" ])

const handleError = error => {
    // you can put more custom logic here
    console.log(error)
}

const runCallbacks = () => {
    fetchSession("session-id", session => { // { id: "123765" }
        fetchUser(session, (user) => { // { firstname: "Bob" }
            // console.log(user)
            fetchUserFavorites(user, (favorites) => { // [ "lions", "tigers", "bears" ]
                console.log(favorites)
            }, handleError)
        }, handleError)
    }, handleError)
}

runCallbacks();

// example 2
const dataJson = {
    response: {
        timeElapsed: 45938,
        distanceTotal: 1314,
        variant: "3K8B"
    }
}

const useValues = (parsedData) => {
    // pretend we're using these
    console.log("Well done!", parsedData)
}

// cb is a common naming choice for a callback argument
const parseResponse = (data, cb) => {
    const {response} = data;
    console.log(response)
    const parsed = {
        points: [response.timeElapsed, response.distanceTotal],
        type: response.variant
    }
    cb(parsed)
}

const handleResponse = (json) => {
    let data = json
    parseResponse(data, useValues)
}

const getData = () => {
    // Mock API call
    setTimeout(handleResponse, 1000, dataJson);
}

getData()