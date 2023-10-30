import React, {useState} from 'react';
import SearchBar from '../src/components/SearchBar'

function App(){
  const [query, setQuery] = useState('Digite algo no campo de pesquisa')
 
  const handleSearch = () => {
    // implementar a logica 
    alert('Voce esta pesquisando:  ' + query)
  }
  return(
    <SearchBar/>
    
  )
}
export default App