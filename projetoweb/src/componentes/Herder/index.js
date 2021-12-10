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
                <li><a href="/"> Inicio</a></li>

                <li><a href="/Config"> Configurações</a></li>
                
                <li><a href="/Sobre"> Sobre </a></li>
            </ul>
        </nav>
        </div>
        
        </AreaHeader>
    );
}

export default Header;