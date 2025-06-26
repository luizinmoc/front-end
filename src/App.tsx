import React from 'react';
import './App.css';

// Importa o componente que você colocou em src/components
import Formulario from './components/Formulario';

function App() {
  return (
    <div className="App">
      <h1>Otimização Não Linear</h1>
      <Formulario />
    </div>
  );
}

export default App;
