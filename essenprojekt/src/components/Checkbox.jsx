import React, { useState } from 'react';

const Checkbox = ({ name, onChange }) => {
  const [checked, setChecked] = useState(false);
  const [type, setType] = useState('');

  const handleChange = () => {
    const newChecked = !checked;
    setChecked(newChecked);
    setType(newChecked ? name : '');
    onChange(type);
  };

  return (
    <div>
      <li>
        {name}{' '}
        <input type="checkbox" checked={checked} onChange={handleChange} />
      </li>
    </div>
  );
};

export default Checkbox;
