import React from 'react';
import { AreaHeader } from './styled';
function Header(){
    return (
        <AreaHeader>
        <div className="container">
            <div className="logo">
            <ul>
                <li> Inicio</li>
                <li> Contato</li>
                <li> Sair </li>
            </ul>
            
                <img src="../../../imagem.png"/>
            </div>
        </div>
        <nav>
            
        </nav>
        </AreaHeader>
    );
}

export default Header;