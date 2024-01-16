import { useEffect, useState } from 'react';
import './App.css';
import Main from './containers/main';
import SideBar from './containers/sidebar';
import getFormattedWeatherData from './services/weatherservice';


function App() {
  const [query, setQuery]=useState({q:'alger'})
  const units='metric'
  const [weather,setWeather] = useState(null)
  const handleCityChange = (newCity) => {
    setQuery({ q: newCity });
  };
  useEffect(() => {
    const fetchWeather = async () => {
    
      
      await ( getFormattedWeatherData({ ...query, units }).then( async (data) => {
        setWeather(data);
        
      }))
    };

    fetchWeather();
  
  }, [query]);
  
  return (
    <div className='app'>
      
    {weather && (
     
     <>
      <SideBar weather={weather} onCityChange={handleCityChange} />
     
      <Main weather={weather} forcast={weather.daily}/>
      </>
   
  )}
    </div>
   
  );
}

export default App;
