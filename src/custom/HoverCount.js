import React from 'react';
import EnhancedComponent from './HOC';

const HoverCount = ({ count, incrementCount }) => {
  return (
    <div
      className='hover'
      style={{ width: '40%', background: 'grey' }}
      onMouseOver={incrementCount}
    >
      Hover Count {count}
    </div>
  );
};

export default EnhancedComponent(HoverCount);
