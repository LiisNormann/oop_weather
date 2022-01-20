class Weather {
    // with this the class can be used so that if we do Weather(Tartu) then a Weather object Tartu is created.
    constructor(city) {
        this.city = city;
        this.key = '7ce4e3e8bcb9f4b0bc884650a2209a15';
    }

    //function to fetch weather data
    async getWeather() {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.key}`);
        //if the data exists, convert it into json
        const responseData = await response.json();
        //if the above function works, return me the data it gets
        return responseData;
    }
}