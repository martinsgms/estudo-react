import React from 'react';
import Link  from '../component/LinkWraper';
import './style/index.css';

const Header = () => {
    return (
        <nav>
            <div className="nav-wrapper deep-purple darken-3">
                <Link to="/" activeStyle={{}} className="brand-logo left lm">SGC</Link>
                <ul id="" className="right">
                    <li><Link to="/clientes">Clientes</Link></li>
                    <li><Link to="/profissoes">Profissões</Link></li>
                    <li><Link to="/sobre">Sobre</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;
