import React from 'react';
import Link  from './LinkWraper';

const Header = () => {
    return (
        <nav>
            <div className="nav-wrapper light-blue darken-2">
                <Link to="/" activeStyle={{}} className="brand-logo">Sistema Gestão</Link>
                <ul id="nav-mobile" className="right">
                    <li><Link to="/clientes">Clientes</Link></li>
                    <li><Link to="/profissoes">Profissões</Link></li>
                    <li><Link to="/sobre">Sobre</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;
