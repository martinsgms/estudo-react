import React from 'react';

const Header = () => {
    return (
        <nav>
            <div class="nav-wrapper light-blue darken-2">
                <a href="/" class="brand-logo">Meus Clientes</a>
                <ul id="nav-mobile" class="right">
                    <li><a href="/clientes">Clientes</a></li>
                    <li><a href="/profissoes">Profissões</a></li>
                    <li><a href="/sobre">Sobre</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;
