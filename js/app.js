

var app = {
    start: () => {
        let dom = showCitiesWeather();
        console.log(dom);
        service.getForecast(dom.cityName, dom.callback);
        service.getWeather(dom.cityName, dom.weatherCallback);
    },
    getWeather: () => {
        let dom = showCitiesWeather();
        console.log(dom);
        service.getForecast(dom.cityName, dom.callback);
        service.getWeather(dom.cityName, dom.weatherCallback);
    }
};

$(document).ready(() => {
    app.start();
});
