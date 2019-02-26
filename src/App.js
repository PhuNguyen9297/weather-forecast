import React, { Component } from 'react';
import './App.css';
import Form from './Component/Form';
import CurrentWeather from './Component/CurrentWeather';
import Forecast from './Component/Forecast';

const apiKey = "0c2ce9872c64e6bac61c9eda487c7d23";

class App extends Component {
  state = {
    showForm: true,
    city: "",
    country: "",
    main: "",
    humidity: "",
    pressure: "", // hpa
    temp: "", //convert to Celcius
    high: "",
    low: "",
    wind: "", // m/s
    cloud: "" // %
  }

  getWeather = async (e) => {
    e.preventDefault();
    let city = e.target.elements.city.value;
    let country = e.target.elements.country.value;
    let apiCall = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "," + country + "&APPID=" + apiKey);
    let data = await apiCall.json();
    console.log(data);
    if (data.cod === "404") {
      console.log("failed");
    }
    else {
      this.setState({
        showForm: false,
        city: city,
        country: country,
        main: data.weather[0].main,
        humidity: data.main.humidity,
        pressure: data.main.pressure, // hpa
        temp: data.main.temp,
        high: data.main.high, //convert to Celcius
        low: data.main.low,
        wind: data.wind.speed, // m/s
        cloud: data.clouds// %
      })
    }
  }
  render() {
    return (
      <div className="contain">
        {this.state.showForm
          ?
          <div className="contain d-flex justify-content-center">
            <Form getWeather={this.getWeather} />
          </div>
          :
          <div className="contain row">
            <div className="col-6 left">
              <div className="left-child">
                <CurrentWeather weatherProps={this.state} />
                <Form getWeather={this.getWeather} />
              </div>
            </div>
            <div className="col-6 right">
              <Forecast />
            </div>
          </div>
        }
      </div>
    );
  }
}

export default App;
