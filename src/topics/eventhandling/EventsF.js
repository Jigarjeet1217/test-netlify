import React, { useState } from 'react';

const EventsF = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <button type='button' onClick={handleClick}>
        {count} Times Clicked
      </button>
    </div>
  );
};

export default EventsF;
