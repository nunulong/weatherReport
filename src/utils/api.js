import axios from 'axios';

const baseUrl = 'http://api.openweathermap.org/data/2.5/';
const API_KEY = 'c4bbdfb117c35598064a92b2bef106aa';

const routeParams = queryStringData => {
  return Object.keys(queryStringData)
    .map(key => {
      return `${key}=${encodeURIComponent(queryStringData)}`;
    })
    .join('&');
};

const getUrl = (type, queryStringData) => {
  return `${baseUrl}${type}?${routeParams(queryStringData)}`;
};

const getQueryStringData = city => {
  return {
    q: city,
    type: 'accurate',
    APPID: API_KEY,
    cnt: 5
  };
};

const getCurrentWeather = city => {
  const queryStringData = getQueryStringData(city);
  const url = getUrl('weather', queryStringData);

  return axios.get(url).then(response => {
    return response.data;
  });
};

const getForecast = city => {
  const queryStringData = getQueryStringData(city);
  const url = getUrl('forecast/daily', queryStringData);

  return axios.get(url).then(response => {
    return response.data;
  });
};

export default {
  getCurrentWeather,
  getForecast
};
