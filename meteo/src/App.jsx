import React, { useState } from 'react';
import Navbars from './components/allin';

function App() {
  const [city, setCity] = useState('');

  const CityChange = (newCity) => {
    setCity(newCity);
  };

  return (
    <>
      <div>
        <Navbars onCityChange={CityChange} />
      </div>
    </>
  );
}

export default App;