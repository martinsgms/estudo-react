import React from 'react';

const Header = () => {
    return (
        <nav>
            <div className="nav-wrapper light-blue darken-2">
                <a href="/" className="brand-logo">Sistema Gestão</a>
                <ul id="nav-mobile" className="right">
                    <li><a href="/clientes">Clientes</a></li>
                    <li><a href="/profissoes">Profissões</a></li>
                    <li><a href="/sobre">Sobre</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;
