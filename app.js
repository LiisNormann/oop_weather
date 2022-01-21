// Weather Object
const weather = new Weather('Tallinn');
// UI object 
const ui = new UI()

// get city weather
function getWeather() {
    weather.getWeather()
        //if the weather gives the data then ..
        .then(data => {
            // ..
            console.log(data)
            ui.drawWeather(data)
        })
        // if no data, present it in console
        .catch(error => console.log(error))
}

getWeather();