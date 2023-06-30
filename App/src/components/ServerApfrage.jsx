import React, { useEffect, useState } from 'react';

const ServerStatus = () => {
  const [serverStatus, setServerStatus] = useState('');

  useEffect(() => {
    fetch('http://localhost:3001/check-connection') 
      .then(response => response.json())
      .then(data => {
        setServerStatus(data.message);
      })
      .catch(error => console.error('Server connection error:', error));
  }, []);

  return (
    <div>
      <h3>Server Status: {serverStatus}</h3>
    </div>
  );
};

export default ServerStatus;
