import React from 'react'
import './main.css'
import Minicard from '../../components/minicard'
import Card from '../../components/card'

function Main({weather:{speed,pressure,humidity,visibility},forcast}) {
     
  return (
    <div className='main__container'>
     
      <div className="minicards__wrapper"  >
      <Minicard items={forcast} />
      </div>
      <p className="cards__title">Today’s Hightlights </p>
      <div className="cards__wrapper" >
      <Card item={speed} title='Wind Status'/>
      <Card item={humidity} title='Humidity'/>
      <Card item={visibility} title='Visibility'/>
      <Card item={pressure} title='Air Pressure'/>

         
      </div>
   <div className="copyright">created by ilham - devChallenges.io</div>
      </div>
  )
}

export default Main