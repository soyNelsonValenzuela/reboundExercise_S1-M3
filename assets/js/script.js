window.addEventListener ('load', deployPage)

function deployPage() {
    alert('Pasajero, se le recuerda que para abordar el avión debe tener en mano su pasaporte y su boleto de embarque. Manténgase atento a los avisos mediante esta plataforma.')
    headContent()
    setInterval(timeContent, 1000);
    dateContent()
    flightContent()
}

function headContent() {
    document.getElementById('welcomeBox').innerHTML = " <h1><b>Bienvenido a la plataforma <i>Eport</i></b></h1> <h3>Aquí podrá encontrar la información de vuelos más reciente en nuestro aeropuerto.</h3>"
}

function timeContent() {
    let date = new Date();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    hour = hour < 10 ? '0' + hour : hour;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    document.getElementById('time').innerHTML = '  <h3>Hora:</h3> <h1 id="insertTime"></h1>';
    document.getElementById('insertTime').innerHTML = hour + ':' + minutes;
}

function dateContent() {
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    day = day < 10 ? '0' + day : day;
    month = month < 10 ? '0' + month : month;
    document.getElementById('date').innerHTML = '<h3>Fecha:</h3> <h1 id="insertDate">30-12-2020</h1>';
    document.getElementById('insertDate').innerHTML = day + '-' + month + '-' + year;
}

function flightContent() {
    let flightNumber = parseInt(Math.random() * 10000);
    let terminal = Math.floor((Math.random() * 20) + 1);
    document.getElementById('flightBox').innerHTML = ' <h1><b>El vuelo más próximo:</b></h1> <h3>Número de vuelo: <em id="flightNumber">1234</em></h3> <h3>Terminal: <em id="terminalNumber">14</em></h3>';
    document.getElementById('flightNumber').innerHTML = flightNumber;
    document.getElementById('terminalNumber').innerHTML = terminal;
}
