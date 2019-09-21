const axios = require('axios');


const getClima = async (lat,lng) => {

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=2866943ed8975176326c805a19528ccf`)

    return resp.data.main.temp;
}

module.exports = {
    getClima
}