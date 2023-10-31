import React from 'react'
import reactDOM from 'react-dom/client'
import '../style/Menu.css'

function Menu (){
  return(
    <div className="menu">
      <a href="https://mail.google.com/" className="mx-2">Gmail</a>
      <a href="https://www.google.com.br/imghp?hl=pt-BR&ogbl" className="mx-2">Imagens</a>
    </div> 
  )
}

export default Menu