import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
    getEtapa,
    getEtapaAnterior,
    getEtapaSiguiente
} from "../services/etapaService";

import "./EtapaDetalle.css";

export default function EtapaDetalle() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [tab, setTab] = useState("info");

    const etapa = getEtapa(Number(id));

    if (!etapa) {
        return <h2>Etapa no encontrada</h2>;
    }

    const etapaAnterior = getEtapaAnterior(etapa.id);
    const etapaSiguiente = getEtapaSiguiente(etapa.id);

    return (

        <div className="detalle-etapa">

            <div className="detalle-header">

                <img
                    src={etapa.imagen}
                    alt={etapa.ruta}
                    className="detalle-imagen"
                />

                <div className="etapa-nav">

                    <button
                        disabled={!etapaAnterior}
                        onClick={() => etapaAnterior && navigate(`/etapas/${etapaAnterior.id}`)}
                    >
                        ← {etapaAnterior ? etapaAnterior.ruta.split(" → ")[1] : ""}
                    </button>

                    <button
                        disabled={!etapaSiguiente}
                        onClick={() => etapaSiguiente && navigate(`/etapas/${etapaSiguiente.id}`)}
                    >
                        {etapaSiguiente ? etapaSiguiente.ruta.split(" → ")[1] : ""} →
                    </button>

                </div>

            </div>

            <div className="detalle-body">

                <h1>{etapa.ruta}</h1>

                <p className="detalle-info">
                    Etapa {etapa.dia}
                    &nbsp; • &nbsp;
                    📏 {etapa.km}
                    &nbsp; • &nbsp;
                    🕒 {etapa.tiempo}
                    &nbsp; • &nbsp;
                    🥾 {etapa.dificultad}
                </p>

                <div className="tabs">

                    <button
                        className={tab === "info" ? "tab active" : "tab"}
                        onClick={() => setTab("info")}
                    >
                        Información
                    </button>

                    <button
                        className={tab === "perfil" ? "tab active" : "tab"}
                        onClick={() => setTab("perfil")}
                    >
                        Perfil
                    </button>

                    <button
                        className={tab === "itinerario" ? "tab active" : "tab"}
                        onClick={() => setTab("itinerario")}
                    >
                        Itinerario
                    </button>

                    <button
                        className={tab === "mapa" ? "tab active" : "tab"}
                        onClick={() => setTab("mapa")}
                    >
                        Mapa
                    </button>

                    <button
                        className={tab === "comer" ? "tab active" : "tab"}
                        onClick={() => setTab("comer")}
                    >
                        Dónde comer
                    </button>

                </div>

                <div className="tab-content">

                    {tab === "info" && (
                        <p>
                            Aquí mostraremos la descripción general de la etapa.
                        </p>
                    )}

                    {tab === "perfil" && (
                        <p>
                            Aquí irá el perfil de elevación.
                        </p>
                    )}

                    {tab === "itinerario" && (
                        <p>
                            Aquí mostraremos el itinerario detallado.
                        </p>
                    )}

                    {tab === "mapa" && (
                        <p>
                            Aquí irá el mapa interactivo.
                        </p>
                    )}

                    {tab === "comer" && (
                        <p>
                            Aquí pondremos recomendaciones para comer.
                        </p>
                    )}

                </div>

            </div>

        </div>

    );
}