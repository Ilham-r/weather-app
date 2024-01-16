import { DateTime } from "luxon";

const API_KEY="0c4061ab5271ca0625d1957e811a924d"
const BASE_URL='https://api.openweathermap.org/data/2.5/'

const getWeatherData =( typeInfo,searchParams)=>{
const url = new URL(BASE_URL+"/"+typeInfo);
url.search= new URLSearchParams({...searchParams,appid:API_KEY});

return fetch(url).then((resp)=>resp.json()).then(data=> data);
} 

const formatCurrentWeather =(data)=>{
    const {
        coord:{lat,lon},
        main:{temp,pressure,humidity},
        visibility,
        dt,
        wind:{speed},
      
        name,
        weather,

    }=data
    const {main:details,icon}=weather[0]
    return{lat,lon,temp,pressure,humidity,visibility,
        dt,speed,name,details,icon}
}

const formatForecastWeather = (data) => {
    let { timezone, daily } = data;
    daily = daily.slice(1, 6).map((d) => {
        return {
          title: formatToLocalTime(d.dt, timezone),
          temp__max: d.temp.max,
          temp__min: d.temp.min,
          icon: d.weather[0].icon,
        };
      });
  
    return { timezone, daily };
  };
  

const getFormattedWeatherData = async(searchParams) =>{
    const formattedCurrentWeather = await getWeatherData("weather",searchParams).then(formatCurrentWeather);

    const { lat, lon } = formattedCurrentWeather;

    const formattedForecastWeather = await getWeatherData("onecall", {
      lat,
      lon,
      exclude: "current,minutely,alerts",
      units: searchParams.units,
    }).then(formatForecastWeather);
  
    return { ...formattedCurrentWeather, ...formattedForecastWeather };

};

const formatToLocalTime=(secs,zone,format='yyyy-MM-dd')=>DateTime.fromSeconds(secs).setZone(zone).toFormat(format);
export default getFormattedWeatherData;

export {formatToLocalTime};