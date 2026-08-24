import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { getPerfilActual } from "../services/perfilService";

import "./Camino.css";

const FECHA_INICIO = new Date("2026-09-01");

const etapas = [
    {
        id: 1,
        nombre: "Sarria → Portomarín",
        km: "22 km",
        x: 8,
        y: 280
    },
    {
        id: 2,
        nombre: "Portomarín → Palas de Rei",
        km: "25 km",
        x: 30,
        y: 130
    },
    {
        id: 3,
        nombre: "Palas de Rei → Arzúa",
        km: "29 km",
        x: 52,
        y: 220
    },
    {
        id: 4,
        nombre: "Arzúa → O Pedrouzo",
        km: "19 km",
        x: 74,
        y: 90
    },
    {
        id: 5,
        nombre: "O Pedrouzo → Santiago",
        km: "20 km",
        x: 94,
        y: 170
    }
];

function obtenerEtapaActual() {

    const hoy = new Date();

    const diferencia = Math.floor(
        (hoy.getTime() - FECHA_INICIO.getTime()) /
        (1000 * 60 * 60 * 24)
    );

    const etapa = diferencia + 1;

    if (etapa < 1) return 1;
    if (etapa > 5) return 5;

    return etapa;
}

export default function Camino() {

    const navigate = useNavigate();

    const perfil = getPerfilActual();

    const [animacionTerminada, setAnimacionTerminada] = useState(false);

    const etapaActual = obtenerEtapaActual();

    useEffect(() => {

        const timer = setTimeout(() => {
            setAnimacionTerminada(true);
        }, 3500);

        return () => clearTimeout(timer);

    }, []);

    return (

        <div className="camino-page">

            <header className="camino-header">

                <p className="camino-eyebrow">
                    CAMINO DE SANTIAGO
                </p>

                <h1>Tu Camino</h1>

            </header>


            {perfil && (

                <div className="camino-perfil">

                    <img
                        src={perfil.foto}
                        alt={perfil.nombre}
                    />

                    <div>
                        <span>Tu Camino</span>
                        <strong>{perfil.nombre}</strong>
                    </div>

                </div>

            )}


            <div className="elevacion-container">


                <svg
                    className="elevacion-svg"
                    viewBox="0 0 100 320"
                    preserveAspectRatio="none"
                >

                    {etapas.slice(0, -1).map((etapa, index) => {

                        const siguiente = etapas[index + 1];

                        return (

                            <line
                                key={etapa.id}
                                x1={etapa.x}
                                y1={etapa.y}
                                x2={siguiente.x}
                                y2={siguiente.y}
                                className={`segmento segmento-${index + 1}`}
                            />

                        );

                    })}

                </svg>


                <div className="etapas-elevacion">

                    {etapas.map((etapa) => {

                        const esActual = etapa.id === etapaActual;
                        const completada = etapa.id < etapaActual;

                        return (

                            <button
                                key={etapa.id}
                                className={`
                                    etapa-punto
                                    ${esActual ? "actual" : ""}
                                    ${completada ? "completada" : ""}
                                    ${animacionTerminada ? "visible" : ""}
                                `}
                                style={{
                                    left: `${etapa.x}%`,
                                    top: `${(etapa.y / 320) * 100}%`
                                }}
                                onClick={() =>
                                    navigate(`/etapas/${etapa.id}`)
                                }
                            >

                                {esActual && perfil && (

                                    <div className="avatar-etapa">

                                        <img
                                            src={perfil.foto}
                                            alt={perfil.nombre}
                                        />

                                    </div>

                                )}

                                <span className="punto-etapa"></span>


                                <span className="etapa-info">

                                    <strong>
                                        Etapa {etapa.id}
                                    </strong>

                                    <span>
                                        {etapa.nombre}
                                    </span>

                                    <small>
                                        {etapa.km}
                                    </small>

                                </span>

                            </button>

                        );

                    })}

                </div>

            </div>


            <div className="camino-estado">

                <span className="estado-punto"></span>

                <p>

                    {etapaActual < 5
                        ? (
                            <>
                                Hoy estás en la{" "}
                                <strong>etapa {etapaActual}</strong>
                            </>
                        )
                        : (
                            <>
                                Has llegado a{" "}
                                <strong>Santiago</strong> 🎉
                            </>
                        )
                    }

                </p>

            </div>


            <div className="camino-footer">

                <span>
                    5 etapas
                </span>

                <span>•</span>

                <span>
                    115 km
                </span>

                <span>•</span>

                <span>
                    Sarria → Santiago
                </span>

            </div>

        </div>

    );
}