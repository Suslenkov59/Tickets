/*
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
})*/

async function getResponse() {
    let response = await fetch('http://localhost:3001/tickets')
    let content = await response.json()
    content = content.splice(0, 5)

    let list = document.querySelector("#Tickets")

    let key;
    for (key in content) {
        list.innerHTML += '<div class="Ticket">${content[key].price}</div>' //надо настроить вывод именно цены
    }
}

getResponse()

