import React ,{useEffect,useState}from 'react';
import './card.css';
const ProgressBar = ({ percentage }) => {
  return (
    <div className='progress__bar'>
      <div className='percentage'>
      <span>0</span>
      <span>50</span>
      <span>100</span>
      </div>
      <progress value={percentage} max={100} />
    </div>
  );
};
function Card({ item, title }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (progress < 100) {
        setProgress((prevProgress) => prevProgress + 10);
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [progress]);

  return (
    <>
      {title === 'Humidity' || title === 'Wind Status' ? (
        <div className="card__container">
          <p className="card__title">{title}</p>
          <p className="card__value">
            {item}
            {title === 'Wind Status' ? <span>mph</span>:<span>%</span>}
          </p>

          {title === 'Wind Status' ? (
            <div className="card__desc">
              <div className="card__desc-icon">
                <span className="material-symbols-outlined">navigation</span>
              </div>
              <p>WSW</p>
            </div>
          ):(
            <div className="card__desc">
             <ProgressBar percentage={item}/>
            </div>
          ) }
        </div>
      ) : (
        <div className="card__container">
          <p className="card__title">{title}</p>
          <p className="card__value">   {title === 'Visibility' ? (item * 0.000621371).toFixed(2) : item}
            {title === 'Visibility' ? <span>miles</span>:<span>mb</span>}
     </p>
        </div>
      )}
    </>
  );
}

export default Card;
