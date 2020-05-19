// Importando o react

import React from 'react'

// Functional component que vai retornar a navibar do materialize

const Header = () => {
    return (
        <nav>
            <div class="nav-wrapper">
                <a href="#" class="brand-logo">Pokédex Digitalk</a>
                <ul id="nav-mobile" class="right">
                    <li><a href="#">Sass</a></li>
                    <li><a href="#">Components</a></li>
                    <li><a href="#">JavaScript</a></li>
                </ul>
            </div>
        </nav>
    )
}

// Exportando esse cara aqui
export default Header;