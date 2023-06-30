import React, { useEffect, useState } from 'react';

const ServerStatus = () => {
  const [serverStatus, setServerStatus] = useState('');

  useEffect(() => {
    fetch('http://localhost:3001/check-connection') // Verwende die direkte URL, ohne den CORS-Proxy
      .then(response => response.json())
      .then(data => {
        console.log('Response data:', data);
        setServerStatus(data.message);
      })
      .catch(error => console.error('Server connection error:', error));
  }, []);

  return (
    <div>
      <h1>Server Status: {serverStatus}</h1>
    </div>
  );
};

export default ServerStatus;
