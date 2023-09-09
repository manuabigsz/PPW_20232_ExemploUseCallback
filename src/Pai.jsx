import React, { useState, useCallback } from 'react';

const Filho = ({ onClick }) => { // Corrigido para "onClick"
  console.log('Filho renderizado');
  return <button onClick={onClick}>Clique em Mim</button>; // Corrigido para "onClick"
};

const Pai = () => {
  const [contador, setContador] = useState(0);

  const estaClicado = useCallback(() => {
    console.log('Callback executada');
    setContador(contador + 1);
  }, [contador]);

  return (
    <div>
      <p>contador: {contador}</p>
      <Filho onClick={estaClicado} /> {/* Corrigido para "onClick" */}
    </div>
  );
};

export default Pai;
