import React, { Component } from 'react'

export default class Form extends Component {
  render() {
      const getWeather = this.props.getWeather;
    return (
        <form className="form-inline" onSubmit={getWeather}>
            <input className="form-control" type="text" id="city" placeholder="City"></input>
            <input className="form-control" type="text" id="country" placeholder="Country"></input>
            <button className="btn btn-success" type="submit">Search</button>
        </form>
    )
  }
}
