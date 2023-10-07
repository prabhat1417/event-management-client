import React from 'react';
import Card from './Card';
import './Rows.css'; 

const Grid = ({ eventList }) => {

  return (
    <>
    <h1 style={{fontSize:'30px'}}>Top Events this Week</h1>
    
    <div className="grid-container">
      {eventList &&
        eventList?.map((event, key) => (
          <Card key={key} event={event} />
        ))}
    </div>
    </>
  );
};

export default Grid;
