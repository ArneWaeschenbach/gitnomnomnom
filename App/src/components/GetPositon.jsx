function getPositon() {
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(Position, error);
      } else {
        reject("Geolocation wird von diesem Browser nicht unterstützt.");
      }
  
      function Position(position) {
        const latPositon = position.coords.latitude;
        const lngPositon = position.coords.longitude;
        resolve({ latPositon, lngPositon });
      }
  
      function error(error) {
        reject(`Fehler bei der Abfrage der Position: ${error.message}`);
      }
    });
  }
  
  export { getPositon };
  