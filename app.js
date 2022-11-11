const ls = new LS();
const weatherLoc = ls.getLocationData();

const weather = new Weather(weatherLoc);
const ui = new UI();

const form = document.querySelector('#change-city')
form.addEventListener('submit', ChangeCityName)

document.addEventListener('DOMContentLoaded', getWeather);

function ChangeCityName(event){
	const city = document.querySelector('#cityName').value
	weather.changeCity(city)
	ls.setLocationData(city)
	getWeather()
	document.querySelector('#cityName').value = ''
	event.preventDefault()
}

function getWeather() {
	weather.getWeather()
	.then(data => {
		ui.drawWeather(data);
	})
	.catch(error => console.log(error))
}