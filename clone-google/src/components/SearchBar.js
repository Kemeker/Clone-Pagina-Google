import React, { useState } from 'react'


function SearchBar () {
  const [query, setQuery] = useState('')

  const handleSearch = () => {
    // implementar a logica 
    alert('Voce esta procurando: ${query}')
  }
  return(
    <div className="input-group">
          <img src="{logo}" alt="logo" />
          <input
            type="text"
            placeholder="Digite sua pesquisa...."
            onChange={(e) => setQuery(e.target.value)}
          />
          <button onClick={handleSearch}>Pesquisa</button>
    </div>
  )
}

export default SearchBar

// em teste barra de pesquisas separada do App.js como um componente