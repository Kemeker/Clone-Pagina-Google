import React, { useState } from 'react'
import logo from '../src/assets/logo'


function SearchBar () {
  const [query, setQuery] = useState('Digite algo no campo')

  const handleSearch = () => {
    // implementar a logica 
    alert('Voce esta procurando: ' + query)
  }
  return(
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="input-group">
          
              <img src="{logo}" alt="logo" />
              <input
                type="text"
                placeholder="Digite sua pesquisa...."
                onChange={(e) => setQuery(e.target.value)}
                className="form-control"
                aria-label="Pesquisar" 
                aria-describedby="basic-addon2"
              />
            <button onClick={handleSearch}>Pesquisa</button>
 
          
          </div>
        </div>

      </div>

    </div>
  )
}

export default SearchBar

// Input com botao implementado atraves de componente