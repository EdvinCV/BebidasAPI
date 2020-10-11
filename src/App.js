import React from 'react';
// CSS
import './bootstrap.min.css';
// Context
import CategoriasProvider from './context/CategoriasContext';
import RecetasProvider from './context/RecetasContext';
// Components
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoRecetas from './components/ListadoRecetas';
import ModalProvider from './context/ModalContext';

function App() {
  return (
    <CategoriasProvider>
      <RecetasProvider>
        <ModalProvider>
          <Header />
          <div className="container mt-5">
            <div className="row">
              <Formulario />
            </div>
            <ListadoRecetas />
          </div>
        </ModalProvider>
      </RecetasProvider>
    </CategoriasProvider>
  );
}

export default App;
