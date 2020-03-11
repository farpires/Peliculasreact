import React from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListaPeliculas from './components/ListaPeliculas';


import GenerosProvider from './context/GenerosContext';
import PeliculasProvider from './context/PeliculasContext';


function App() {
  return (
    <PeliculasProvider>
      <GenerosProvider>
        <Header />

        <div className="uk-container">
          <Formulario />
          <ListaPeliculas />
        </div>
      </GenerosProvider>
    </PeliculasProvider>
  ); 
}
//GenerosProvider entre estas dos etiquete ya contien datos de state funciones de GenerosContext

export default App;
