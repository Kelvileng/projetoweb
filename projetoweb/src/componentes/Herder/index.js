import React from 'react';
import { AreaHeader } from './styled';

function Header(){
    return (
        <AreaHeader>
        <div className="container">
            <div className="logo">
            
            
                <img src="../../../imagem.png"/>
            </div>
            
            <nav>
        <ul>
                <li> Inicio</li>
                <li> Contato</li>
                <li> Sair </li>
            </ul>
        </nav>
        </div>
        
        </AreaHeader>
    );
}

export default Header;