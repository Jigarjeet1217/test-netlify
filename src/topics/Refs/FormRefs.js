import React, { useRef } from 'react';

const FormRefs = () => {
  const nameRef = useRef();
  const ageRef = useRef();
  const onSubmit = (e) => {
    e.preventDefault();
    let name = nameRef.current.value;
    let age = ageRef.current.value;
    console.log(name, age);
  };
  return (
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor='name'>Name</label>
        <input type='text' id='name' name='name' required ref={nameRef} />
      </div>
      <div>
        <label htmlFor='age'>Age</label>
        <input type='number' id='age' name='age' required ref={ageRef} />
      </div>
      <button type='submit'>Submit</button>
    </form>
  );
};

export default FormRefs;
