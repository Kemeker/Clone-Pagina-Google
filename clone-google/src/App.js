import React, {useState} from 'react';


function App(){
  const [query, setQuery] = useState('Digite algo no campo de pesquisa')
 
  const handleSearch = () => {
    // implementar a logica 
    alert('Voce esta pesquisando:  ' + query)
  }
  return(
    <h1>Google</h1>
  )
}
export default App