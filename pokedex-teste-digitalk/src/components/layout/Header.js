// Importando o react

import React from 'react'

// Importando o styled componets 

import styled from 'styled-components'

// Functional component que vai retornar a navibar do materialize

const Header = () => {
    return (
        <nav>
            <div class="nav-wrapper #e53935 red darken-1">
                <a href="#" class="brand-logo">Pokédex Digitalk</a>
                <ul id="nav-mobile" class="right">
                    <li><a href="#">x</a></li>
                    <li><a href="#">x</a></li>
                    <li><a href="#">x</a></li>
                </ul>
            </div>
        </nav>
    )
}

// Exportando esse cara aqui
export default Header;