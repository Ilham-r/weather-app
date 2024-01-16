import React ,{useState}from 'react'
import './sidebar.css'
import bg from '../../assets/Cloud-background.png'
import loc from '../../assets/location.png'
import WeatherICon from '../../assets'

import {formatToLocalTime } from '../../services/weatherservice'

function SideBar({ weather: { dt, timezone, name, temp, details, icon }, onCityChange }) {
   const [inputValue, setinputValue] = useState('');
   const handleInputChange = (event) => {
     const input = event.target.value;
     setinputValue(input);
   };
 
   const SubmitSearch = () => {
    onCityChange(inputValue);
    setinputValue('');
   };
 
  return (
    <div className='sidebar'> 
    <img src={bg} alt='clouds' className="background" />
    <div className="siderbar__location-search">
      <div className="search__input">
    <input 
   type="text" 
   placeholder='search location' 
   value={inputValue}
   onChange={handleInputChange}
   disabled={false}
/>
</div>
<div className="searching__button" onClick={SubmitSearch}>Search</div>
    </div>



    <div className="sidebare__location-weather">
        <div className="current__weather">
        <img src ={WeatherICon(icon)} alt='icon'/>
        </div>
       <p className='current__temp'>{`${temp.toFixed()}`}<span>°C</span> </p>
       <p className="current__param">{`${details}`}</p>
       
    </div>
    <div className="sidebar__footer">
        
            <p className="today__date">Today -{formatToLocalTime(dt,timezone)}</p>
      
        <div className="sidebar__footer-location">
            <img src={loc} alt="location" />
        <p className="city">

            {`${name}`}
        </p>
        </div>
    </div>
    </div>
  )
}

export default SideBar