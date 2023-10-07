import React, { useState } from 'react';
import './Card.css';

const Card = ({ event }) => {
  const [imageError, setImageError] = useState(false);

  const fallbackImage =
    'https://th.bing.com/th/id/OIP.5N4IzkkgSZHTCnuY7zs82AHaE7?pid=ImgDet&w=2048&h=1365&rs=1';

  const image_url = imageError ? fallbackImage : event.banner_image || fallbackImage;

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className='card'>
    <div className="event-card">
      <div className="event-image">
        <img src={image_url} alt={event.event_name} onError={handleImageError} />
      </div>
      <div className="event-details">
        <h2 style={{marginTop:'0px',marginBottom:'0px'}}>{event.event_name}</h2>
        <div className='info-section'>
          <div className='date-info'>
            <p>{event.category}</p>
            <p>{event.start_time}</p>
          </div>
          <div className='name-info'>
            <p>
              <p style={{marginLeft:'35%',marginBottom:'0px'}}>{event.location}</p>
              <p style={{marginLeft:'35%',marginBottom:'0px'}}>{event.end_time}</p>
            </p>
          </div>
        </div>

      </div>
    </div>
    </div>
  );
};

export default Card;
