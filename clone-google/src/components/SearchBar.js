import React, { useState } from 'react'
import logo from '../assets/logo.png'
import './SearchBar.css'

function SearchBar () {
  const [query, setQuery] = useState('Digite algo no campo')

  const handleSearch = () => {
    // implementar a logica 
    alert('Voce esta procurando: ' + query)
  }
  return(
   
    <div className="container">
    <div className="container mt-4 h-100">
      <div className="row h-100 justify-content-center align-items-center">
        <div className="col-md-6">
          <div className="input-group">
            <input
              type="text"
              placeholder="Digite sua pesquisa...."
              onChange={(e) => setQuery(e.target.value)}
              className="form-control"
            aria-label="Pesquisar"
              aria-describedby="basic-addon2"
            />
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center pesquisa">
        <button onClick={handleSearch} className="mx-2">Pesquisa Google</button>
        <button className="mx-2">Estou com sorte</button>
      </div>

    </div>
  </div>  
  )
}

export default SearchBar

// em teste barra de pesquisas separada do App.js como um componente
// <img src="{logo}" alt="logo"/>