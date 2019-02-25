import React, { Component } from 'react';
import './App.css';
import Form from './Component/Form';

const apiKey = "0c2ce9872c64e6bac61c9eda487c7d23";

class App extends Component {
  state = {
    city: "",
    country: "",
    main: "",
    humidity: "",
    pressure: "", // hpa
    high: "", //convert to C
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
  }
  render() {
    return (
      <div className="container text-center">
        <Form getWeather={this.getWeather} />
      </div>
    );
  }
}

export default App;
