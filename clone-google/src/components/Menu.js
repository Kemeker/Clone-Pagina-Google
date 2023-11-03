import React from 'react'
import reactDOM from 'react-dom/client'
import '../style/Menu.css'
import {menu} from '../assets/menu.png'

function Menu (){
  return(
    <div className="d-flex justify-content-end">
      <div>
        <a href="gmail.com.br" className="mx-2">Gmail</a>
      </div>
      <div>
        <a href="https://www.google.com.br/imghp?hl=pt-BR&ogbl" className="mx-2">Imagens</a>
      </div>
      <div>
        <button>
          <img src="{menu}" classname="img-thumbnail" alt="menu"/>
        </button>
      </div>
      <div>
        <button className="btn btn-outline-primary conectar">
          Conectar
        </button>
      </div>

    </div> 
  )
}

export default Menu