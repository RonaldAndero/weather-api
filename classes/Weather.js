class Weather{
	constructor(city){
		this.key = "7c07d5e8adfc763af2888eb45cdc28a5";
		this.city = city;
	}

	async getWeather(){
		const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.key}`)
		const responseData = await response.json()
		return responseData
	}

	changeCity(city){
		this.city = city;
	}
}