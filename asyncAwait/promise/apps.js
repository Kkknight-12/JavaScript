new Promise((resolve, reject) => {
    console.log('A')
    resolve(['B', 'C', 'D']);
    // reject();
})
.then((data) => {
    // throw new Error('Error at B');
    console.log(data.shift());
    return data;
})
.then((data) => {
    // throw new Error('Error at C');
    console.log(data.shift());
    return data
})
.then((data) => {
    // throw new Error('Error at D');
    console.log(data.shift());
    return data
})
.catch((error) => {
    console.log(error)
    // alert(error);
})


// ////////////////
// Promise Chain //
// ////////////////

// In this challenge, the promise will resolve with a given data set.
// Create a promise chain of four steps to do the following

// Step 1: Return only the unread alerts, if there are none, trigger an error that says there are no unread alerts
// Step 2: If the alert is a system alert, call the printSystemAlert function on it and remove it from the list
// Step 3: Create a console.error message for the critical alerts that prints the alert message, if there are no ciritical alerts, do nothing and proceed to step 4
// Step 4: Console log all other types of alerts with the message, severity, and type properties

const alerts = [
    {
        type: "system",
        severity: "critical",
        timestamp: "",
        message: "System has experienced an error and must be restarted",
        user_id: null,
        short_code: "VDN877",
        readStatus: true
    },
    {
        type: "users",
        severity: "critical",
        timestamp: "",
        message: "Unauthorized access to the system has been logged",
        user_id: null,
        short_code: "VDN077",
        readStatus: false
    },
    {
        type: "system",
        severity: "informational",
        timestamp: "",
        message: "There are new updates available",
        user_id: null,
        short_code: "VDN827",
        readStatus: false
    },
    {
        type: "users",
        severity: "warning",
        timestamp: "",
        message: "Some users on this system have not updated their passwords",
        user_id: null,
        short_code: "HDN877",
        readStatus: false
    }
]

const printSystemAlert = (alert) => {
    // The console.info() method writes a message to the console.
    console.info(alert, `This is a ${alert.severity} system wide alert: ${alert.message}`)
}

new Promise((resolve, reject) => {
    resolve(alerts)
})
.then(data => {
    // console.log(data)
    const unread = data.filter(d => d.readStatus === false);
    if (unread.length === 0) {
        throw new Error('There are no unread alerts');
    }
    return unread;
})
// you can name this whatever you want, so make it descriptive!
.then(unreadAlerts => {
    // console.log(unreadAlerts) // readStatus === false
    // might be tempted to save this into a variable, but you don't have to
    return unreadAlerts.filter(alert => {
        if(alert.type === "system") {
            // console.log('If ran')
            printSystemAlert(alert)
        } else {
            // console.log('else ran')
            return true // alert.type === "users"
        }
    })
})
.then(filteredAlerts => {
    console.log(filteredAlerts) // alert.type === "users"
    filteredAlerts.map(alert => {
    // console.log(filteredAlerts) // 
    if(alert.severity === "critical") {
        console.error(alert.message)
    } else {
        console.log(`${alert.severity} ${alert.type} alert: ${alert.message}`)
    }
    }
)})


// Something is wrong with this promise chain!

// This promise chain catch clause always runs. Figure out why and get the console.log at the last then clause to run.
// const setCategory = (category, id) => {
//     // imagine we are assiging a category to an item...
//     console.log("Category assigned!")
// }
// const data = {
//     id: "KDF8D903N",
//     intVal: 855,
//     message: "This is a message",
//     sourceId: "NotNull"
// }

// new Promise((resolve, reject) => {
//     resolve(data)
// })
// .then(data => {
//     if (data.soucreId && data.soucreId !== null) {
//         return data;
//     } 
//     // when the if statement returns something, there is no need for an else statement
//     throw new Error('No source was defined');
// })
// .then(data => {
//     const { intVal } = data
//     if(intVal > 0 && intVal !== null) {
//         const category = data.intVal.toString().split()[0];
//         setCategory(category, data.id)
//     } else {
//         throw new Error('No integer value was provided');
//     }
// })
// .then(data => console.log(data.id, data.message))
// .catch((error) => {
//     console.log(error)
// })
