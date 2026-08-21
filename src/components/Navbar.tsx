import { Link } from "react-router-dom";
import { useState } from "react";
import vieira from "../assets/logo.png";
import "./Navbar.css";

export default function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);

    const cerrarMenu = () => setMenuOpen(false);

    return (

        <nav className="navbar">

            <h2 className="navbar-logo">
                <img src={vieira} alt="Vieira" />
                <span>Camino González Sánchez</span>
            </h2>

            <button
                className="menu-btn"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                {menuOpen ? "✕" : "☰"}
            </button>

            <div className={`nav-links ${menuOpen ? "open" : ""}`}>

                <Link to="/" onClick={cerrarMenu}>Inicio</Link>

                <Link to="/itinerario" onClick={cerrarMenu}>Itinerario</Link>

                <Link to="/reflexiones" onClick={cerrarMenu}>Reflexiones</Link>

                <Link to="/retos" onClick={cerrarMenu}>Retos</Link>

                <Link to="/fotos" onClick={cerrarMenu}>Fotos</Link>

                <Link to="/historia" onClick={cerrarMenu}>Historia</Link>

            </div>

        </nav>

    );

}