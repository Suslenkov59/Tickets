
async function getResponse() {
    let response = await fetch('http://localhost:3001/tickets')
    let content = await response.json() //тип файла
    content = content.splice(0, 5) // колличество выводов из массива

    let list = document.querySelector("#Tickets")

    let key;
    for (key in content) {

        list.innerHTML += `
    <div class="Ticket">
        <div class="price">${content[key].price} ₽</div>
        <div class="space"></div>
        <div class="logo"><img class="companyLogo" src="http://pics.avs.io/99/36/${content[key].carrier}.png"></div>
        <div class="routeAcheadCities">
            <div class="cities">${content[key].segments[0].origin} - ${content[key].segments[0].destination}</div>
            <div class="citiesTime"></div>
        </div>
        <div class="routeAcheadTime">
         <div class="vPuti">В пути</div>
            <div class="vPutiTimes"> ${content[key].segments[0].date}</div>
        </div>
        <div class="routeAcheadStops">
            <div class="stops1">пересадки</div>
            <div class="stops2">${content[key].segments[0].stops}</div>
        </div>
          <div class="routeBackCities">
            <div class="citiesBack">${content[key].segments[1].origin} - ${content[key].segments[1].destination}</div>
            <div class="citiesTimeBack"></div>
        </div>
        <div class="routeBackTime">
            <div class="vPutiBack">В пути</div>
            <div class="vPutiTimesBack"></div>
        </div>
        <div class="routeBackStops">
            <div class="stopsBack1"> пересадки</div>
            <div class="stopsBack2">${content[key].segments[1].stops}</div>
        </div>
    </div>
      `
        console.log(content[key])
    }
}

getResponse()

