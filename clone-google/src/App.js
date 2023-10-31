import React, {useState} from 'react';
import SearchBar from '../src/components/SearchBar'
import Menu from '../src/components/Menu'
import './style/App.css'

function App(){
  const [query, setQuery] = useState('Digite algo no campo de pesquisa')
 
  const handleSearch = () => {
    // implementar a logica 
    alert('Voce esta pesquisando:  ' + query)
  }
  return(
    <>
    <SearchBar/>,
    <Menu/>
    </>
  )
}
export default App