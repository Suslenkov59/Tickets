(fetch("https://front-test.beta.aviasales.ru/search")
.then(res => (res.json)))
.then(data => console.log(data))