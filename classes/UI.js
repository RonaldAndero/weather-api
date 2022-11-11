class UI {
	constructor(){
		this.description = document.querySelector('#description')
		this.temp = document.querySelector('#temp')
		this.city = document.querySelector('#location')
		this.icon = document.querySelector('#icon')
	}
	drawWeather(data) {
  		let celcius = Math.round(parseFloat(data.main.temp)-273.15); 
  		let description = data.weather[0].description;
		let icon = data.weather[0].icon;
		const iconLink = `http://openweathermap.org/img/wn/${icon}@2x.png`

  		this.description.innerHTML = description;
  		this.temp.innerHTML = celcius + '&deg';
  		this.city.innerHTML = data.name;
		this.icon.setAttribute('src', iconLink)
	}
}