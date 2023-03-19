import React, { useState } from 'react';

const MiComponente = () => {
  const [showComponent, setShowComponent] = useState(false);

  const handleClick = () => {
    setShowComponent(!showComponent);
  }

  return (
    <div>
      <button onClick={handleClick}>Mostrar/Ocultar componente</button>
      {showComponent && {resultado}}
    </div>
  );
}

export default MiComponente;