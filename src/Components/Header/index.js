import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as HomeDog} from "../../Assets/dogs.svg"
import "./style.css";

const Header = () => {
    return (
      <header className="header">
        <nav className="container">
          <Link className="logo" to="/" aria-label="Dogs - Home">
            <HomeDog/>
          </Link>
          <Link to="/login" className="login">Login / Criar</Link>
        </nav>        
      </header>
    );
}

export default Header;