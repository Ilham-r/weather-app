import clear from '../assets/Clear.png'
import cloud from '../assets/LightCloud.png'
import heavyClouds from '../assets/HeavyCloud.png'
import shower from '../assets/Shower.png'
import heavyRain from '../assets/HeavyRain.png'
import snow from '../assets/Snow.png'
import thunderstorm from '../assets/Thunderstorm.png'
const iconsList = [
    { code: "01",  image: clear },
    { code: "02",  image: cloud},
    { code: "03",  image: heavyClouds },
    { code: "04",  image: heavyClouds },
    { code: "09",  image: shower},
    { code: "10",  image: heavyRain },
    { code: "11",  image: thunderstorm },
    { code: "13",  image: snow },
    { code: "50",  image: clear },
  
];
 const WeatherICon=(code)=>{

    for (const icon of iconsList) {
        if (code.startsWith(icon.code)) {
     
            return icon.image;
        }
    }

}
export default WeatherICon;