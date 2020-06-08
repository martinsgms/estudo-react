import React from 'react';
import Link  from '../LinkWraper';
import './style/index.css';

const Header = () => {
    return (
        <nav>
            <div className="nav-wrapper deep-purple darken-3">
                <Link to="/estudo-react" activeStyle={{}} className="brand-logo left lm">SGC</Link>
                <ul id="" className="right">
                    <li><Link to="/estudo-react/clientes">Clientes</Link></li>
                    <li><Link to="/estudo-react/profissoes">Profissões</Link></li>
                    <li><Link to="/estudo-react/sobre">Sobre</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;
