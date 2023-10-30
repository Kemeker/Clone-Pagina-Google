import React, {useState} from 'react';
import logo from '../src/assets/logo.png'

function App(){
  const [query, setQuery] = useState('')
 
  const handleSearch = () => {
    // implementar a logica 
    alert('Voce esta pesquisando:  ' + query)
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
export default App

// a funçao do botao handleSearch esta diretamente em App.js para teste
// porem vai ser testada como um componente e chamada na pagina principal