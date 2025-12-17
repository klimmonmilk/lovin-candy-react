import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-left">
        <Link to="/" className="logo">
          <img src="/image/logo-lovincandy.png" alt="LovinCandy" />
          <span>LovinCandy</span>
        </Link>
      </div>

      <nav className="nav-center">
        <Link to="/">Home</Link>
        <Link to="/customize">Customize</Link>
        <Link to="/product">Product</Link>
      </nav>

      <div className="nav-right">
        <Link to="/cart" className="icon-btn">🛒</Link>
        <Link to="/login" className="auth-btn">Sign in | Register</Link>
      </div>
    </header>
  );
}
