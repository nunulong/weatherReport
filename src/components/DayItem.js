import React from 'react';
import { getDate } from '../utils/helper';

const DayItem = props => {
  const date = getDate(props.day.dt);
  const icon = props.day.weather[0].icon;
  return (
    <div onClick={props.onClick} className="dayContainer">
      <img
        className="weather"
        src={require(`../assets/weather-icons/${icon}.svg`)}
        alt="Weather"
      />
      <h2 className="subheader">{date}</h2>
    </div>
  );
};

export default DayItem;
