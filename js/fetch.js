fetch("http://localhost:3001/tickets1") //убери 1 чтобы сервер корректно заработал
    .then(res => {
        if (res.ok) {
            return res.json()
        } else {
            console.log("ERROR")
            throw Error
        }
    })
    .then(data =>
        document.getElementById('Tickets').innerHTML =
            JSON.stringify(data)
    ).catch(error => {
        console.log(error)
})