import React from 'react'
import './minicard.css'
import WeatherICon from '../../assets'
function Minicard({items}) {
  
 const formatTime =(time)=>{
  const month_num =Number(time.slice(6,7));
  let month = new Date(0,month_num-1).toLocaleString('en-US', {month: 'long'}).slice(0,3);
  return month
 }

  return (
    
    <>
    
    {items?.map(item=>(
    <div className='minicard__container'>
      <p className="minicard__day">
       
         
      {`${item.title.slice(8,11)} ${formatTime(item.title)}`}
      </p>
      <div className="minicard__image">

        <img src={WeatherICon(item.icon)} alt="" />
      </div>
      <div className="minicard__temp">
        <p className="minicard__temp-max">{`${item.temp__max.toFixed()}`}°C</p>
        <p className="minicard__temp-min">{`${item.temp__min.toFixed()}`}°C</p>
      </div>
    </div>
    ))}
    </>
  )
}

export default Minicard