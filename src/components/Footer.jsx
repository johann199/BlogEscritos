import { Link } from 'react-router-dom';
import './Footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-copy">
        &copy; {new Date().getFullYear()} Escritos Sad
      </div>
    </footer>
  );
};

