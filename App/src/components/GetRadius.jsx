import { useState } from 'react';
import PropTypes from 'prop-types';

const GetRadius = ({ onRadiusChange }) => {
  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
    onRadiusChange(event.target.value);
  };

  return (
    <input type="text" placeholder="Radius" value={text} onChange={handleChange}></input>
  );
};

GetRadius.propTypes = {
  onRadiusChange: PropTypes.func.isRequired
};

export default GetRadius;

