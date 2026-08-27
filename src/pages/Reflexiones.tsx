import "./Home.css";

import { useEffect, useState } from "react";

import { getPerfilActual } from "../services/perfilService";
import { getEtapas } from "../services/etapaService";

import ReflexionCard from "../components/ReflexionCard";
import LoginModal from "../components/LoginModal";

export default function Reflexiones() {

    const etapas = getEtapas();

    const [mostrarLogin, setMostrarLogin] = useState(false);

    const [perfil, setPerfil] = useState(getPerfilActual());

    return (

        <div
            className="itinerario-page"
            style={{ background: perfil?.background }}
        >

            <h1>Reflexiones del Camino</h1>

            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: "2rem"
                }}
            >

                <button
                    className="btn-primary"
                    onClick={() => setMostrarLogin(true)}
                >
                    {perfil
                        ? `👤 ${perfil.nombre}`
                        : "👤 Identificarse"
                    }
                </button>

            </div>

            <div className="cards">

                {etapas.map(etapa => (

                    <ReflexionCard
                        key={etapa.id}
                        id={etapa.id}
                        dia={etapa.dia}
                        ruta={etapa.ruta}
                    />

                ))}

            </div>

            {mostrarLogin && (

                <LoginModal
                    onLogin={(perfilLogueado) => {
                        setPerfil(perfilLogueado);
                        setMostrarLogin(false);
                    }}
                    onClose={() => setMostrarLogin(false)}
                />

            )}

        </div>

    );

}
