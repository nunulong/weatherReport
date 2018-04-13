import axios from 'axios';

const _baseURL = 'https://api.openweathermap.org/data/2.5/';
const _APIKEY = 'b714ec74bbab5650795063cb0fdf5fbe';

const prepRouteParams = queryStringData => {
  return Object.keys(queryStringData)
    .map(key => {
      return key + '=' + encodeURIComponent(queryStringData[key]);
    })
    .join('&');
};

const prepUrl = (type, queryStringData) => {
  return _baseURL + type + '?' + prepRouteParams(queryStringData);
};

const getQueryStringData = city => {
  return {
    q: city,
    type: 'accurate',
    appid: _APIKEY,
    cnt: 5
  };
};

export const getCurrentWeather = city => {
  const queryStringData = getQueryStringData(city);
  const url = prepUrl('weather', queryStringData);

  return axios.get(url).then(currentWeatherData => {
    return currentWeatherData.data;
  });
};

export const getForecast = city => {
  const queryStringData = getQueryStringData(city);
  const url = prepUrl('forecast/daily', queryStringData);

  return axios.get(url).then(forecastData => {
    return forecastData.data;
  });
};
