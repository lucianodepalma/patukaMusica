import React from 'react';
import '../assets/css/App.css';
import Libro from './Libro';
import Redes from './Redes';
import Descargas from './Descargas';
import FormularioCompra from './FormularioCompra';
import PagoAprobado from './PagoAprobado';
import Header from './Header';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header/>
        <Routes>
          <Route exact path='/' element={<Libro/>}/>
          <Route path='/redes' element={<Redes/>}/>
          <Route path='/descargas' element={<Descargas/>}/>
          <Route path='/formulario-compra' element={<FormularioCompra/>}/>
          <Route path='/pago-aprobado' element={ <PagoAprobado/> }/>
        </Routes>
    </div>
  );
}

export default App;
