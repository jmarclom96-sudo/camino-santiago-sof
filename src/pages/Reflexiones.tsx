import "./Home.css";

import { useState } from "react";

import { getPerfilActual } from "../services/perfilService";

import ReflexionCard from "../components/ReflexionCard";
import LoginModal from "../components/LoginModal";

export default function Reflexiones() {

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

                {/* PRE-CAMINO */}

                <ReflexionCard
                    key="pre"
                    id={0}
                    dia={0}
                    ruta="Pre-Camino"
                />


                {/* ETAPA 1 */}

                <ReflexionCard
                    key="etapa-1"
                    id={1}
                    dia={1}
                    ruta="Etapa 1"
                />


                {/* ETAPA 2 */}

                <ReflexionCard
                    key="etapa-2"
                    id={2}
                    dia={2}
                    ruta="Etapa 2"
                />


                {/* ETAPA 3 */}

                <ReflexionCard
                    key="etapa-3"
                    id={3}
                    dia={3}
                    ruta="Etapa 3"
                />


                {/* ETAPA 4 */}

                <ReflexionCard
                    key="etapa-4"
                    id={4}
                    dia={4}
                    ruta="Etapa 4"
                />


                {/* ETAPA 5 */}

                <ReflexionCard
                    key="etapa-5"
                    id={5}
                    dia={5}
                    ruta="Etapa 5"
                />


                {/* POST-CAMINO */}

                <ReflexionCard
                    key="post"
                    id={6}
                    dia={6}
                    ruta="Post-Camino"
                />

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