import React from 'react';
import '../assets/css/App.css';
import Libro from './Libro';
import Curso from './Curso';
import FormularioCompra from './FormularioCompra';
import Header from './Header';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route exact path='/' element={<Libro/>}/>
        <Route path='/curso' element={<Curso/>}/>
        <Route path='/redes' element={<Curso/>}/>
        <Route path='/descargas' element={<Curso/>}/>
        <Route path='/formulario-compra' element={<FormularioCompra/>}/>
      </Routes>
    </div>
  );
}

export default App;
