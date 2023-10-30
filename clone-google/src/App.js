import React from 'react'
import logo from '../src/assets/logo.png'

import './App.css';


function App() {
  const = EnviarPesquisa = () => {
    alert('Servidores OF-LINE neste momento :( ')
  }
  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="input-group">
            <img src={logo} alt="logo"/>
            <input type="text" className="form-control" placeholder="Pesquisar..." aria-label="Pesquisar" aria-describedby="basic-addon2" />
            <button type="button" onClick={EnviarPesquisa}>Pesquisar</button>
          </div>
        </div>

      </div>

    </div>
    
  );
}

export default App;
