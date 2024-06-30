import { Link } from 'react-router-dom';
import './Header.css';


export const Header = () => {
  return (
    <header className="header">
      <div className="nav-links">
        <Link to="/">Home</Link>
      </div>
      <div className="logo">
        <img src="/assets/depredador.svg" alt="Logo" />
      </div>
    </header>
  );
};