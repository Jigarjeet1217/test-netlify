import React from 'react';
import EnhancedComponent from './HOC';

const Counter = ({ count, incrementCount }) => {
  return (
    <div className='counter' style={{ width: '40%', background: 'orange' }}>
      <button type='button' onClick={incrementCount}>
        Counter {count}
      </button>
    </div>
  );
};

export default EnhancedComponent(Counter);
