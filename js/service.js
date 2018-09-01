
let service = {
    getWeather: (cityName, callback) => {
        $.ajax({
            url: `https://api.openweathermap.org/data/2.5/weather?q=${cityName ? cityName : "Karachi"}&appid=3890c8ecf66961bb6012c22cf547b58a&units=metric`,
            success: callback,

            error: function (error) {
            alert(error);
            }
        });
    },
    getForecast: (cityName, callback) => {
        $.ajax({
            url: `https://api.openweathermap.org/data/2.5/forecast?q=${cityName ? cityName : "Karachi"}&appid=3890c8ecf66961bb6012c22cf547b58a&units=metric`,
            success: callback,
            error: function (error) {
                alert(error);
            }
        });
    }
};