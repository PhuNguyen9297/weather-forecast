import React, { Component } from 'react'

export default class Form extends Component {
  render() {
      const getWeather = this.props.getWeather;
    return (
        <form onSubmit={getWeather}>
            <input type="text" id="city"></input>
            <input type="text" id="country"></input>
            <button className="btn">Search</button>
        </form>
    )
  }
}
