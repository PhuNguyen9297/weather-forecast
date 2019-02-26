import React, { Component } from 'react'

export default class CurrentWeather extends Component {
    render() {
        const weatherProps = this.props.weatherProps;
        return (
            <div>
                <div className="head">
                    <p className="">Current</p>
                </div>
                <div className="line-left"></div>
                <p className="place">{weatherProps.city}, {weatherProps.country}</p>
                <div className="row ml-1">
                    <p className=" col-6 degree-number">{parseInt(weatherProps.temp * 9 / 5 - 459.67)}</p>
                    <div className="col-6 d-flex flex-column justify-content-between">
                        <p>
                            <i className="temp-degree far fa-circle"></i>
                        </p>
                        <p className="font-weight-bold">Fahrenheit</p>
                    </div>
                </div>
                <div className="row my-3 ml-1">
                    <p className=" col-6 degree-number">{parseInt(weatherProps.temp - 273.15)}</p>
                    <div className="col-6 d-flex flex-column justify-content-between">
                        <i className="temp-degree far fa-circle"></i>
                        <p className="font-weight-bold">Celcius</p>
                    </div>
                </div>
            </div>
        )
    }
}
