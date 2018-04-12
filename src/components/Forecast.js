import React, { Component } from 'react';
import DayItem from './DayItem';
import queryString from 'query-string';
import {} from '../utils/api';

class Forecast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: true
    };
  }

  componentDidMount() {
    this.city = queryString.parse(this.props.location.search).city;
    this.makeRequest(this.city);
  }

  componentWillReceiveProps(nextProps) {
    this.city = queryString.parse(nextProps.location.search).city;
    this.makeRequest(this.city);
  }

  makeRequest = city => {
    this.setState(() => {
      return {
        loading: true
      };
    });

    getForecast(city).then(data => {
      this.setState(() => {
        return {
          loading: false,
          data
        };
      });
    });
  };

  handleClick = city => {
    city.city = this.city;
    this.props.history.push({
      pathname: `/details/${this.city}`,
      state: city
    });
  };

  render() {
    return this.state.loading === true ? (
      <h1 className="forecast-header">Loading</h1>
    ) : (
      <div>
        <h1 className="forecast-header">{this.city}</h1>
        <div className="forecast-container">
          {this.state.forecastData.list.map(function(listItem) {
            return (
              <DayItem
                onClick={this.handleClick.bind(this, listItem)}
                key={listItem.dt}
                day={listItem}
              />
            );
          }, this)}
        </div>
      </div>
    );
  }
}

export default Forecast;
