import "./Home.css";

import { Link } from "react-router-dom";

import fondoCamino from "../assets/camino.jpeg";

import { useNavigate } from "react-router-dom";
import { useState } from "react";





export default function Home() {

    const navigate = useNavigate();
    const [saliendo, setSaliendo] = useState(false);

    function empezarCamino() {

        setSaliendo(true);

        setTimeout(() => {
            navigate("/camino");
        }, 500);

    }

    return (

        <div
            className={`hero ${saliendo ? "hero-saliendo" : ""}`}
            style={{ backgroundImage: `url(${fondoCamino})` }}
        >

            <div className="overlay">

                <h1>Camino de Santiago</h1>

                <p>
                    Una aventura para recordar junto a las personas que más quieres.
                </p>

                <button className="btn-primary" onClick={empezarCamino}>
                    Empezar el Camino
                </button>

            </div>

            <div className="cards">

                <Link to="/itinerario" className="card">
                    <h3>📅 Programa</h3>
                    <p>Consulta el plan de cada día.</p>
                </Link>

                <Link to="/etapas/1" className="card">
                    <h3>🥾 Etapas</h3>
                    <p>Descubre cada recorrido.</p>
                </Link>

                <Link to="/retos" className="card">
                    <h3>🎯 Retos</h3>
                    <p>Completa desafíos durante el viaje.</p>
                </Link>

            </div>

        </div>

    );

}

