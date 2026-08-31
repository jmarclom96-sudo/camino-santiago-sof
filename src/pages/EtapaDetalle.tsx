import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
    getEtapa,
    getEtapaAnterior,
    getEtapaSiguiente
} from "../services/etapaService";

import { contenidoEtapas } from "../data/etapasContenido";

import "./EtapaDetalle.css";

export default function EtapaDetalle() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [tab, setTab] = useState("itinerario");

    const etapa = getEtapa(Number(id));

    if (!etapa) {
        return <h2>Etapa no encontrada</h2>;
    }

    const etapaAnterior = getEtapaAnterior(etapa.id);
    const etapaSiguiente = getEtapaSiguiente(etapa.id);

    const contenido = contenidoEtapas[etapa.id];

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
                        onClick={() =>
                            etapaAnterior &&
                            navigate(`/etapas/${etapaAnterior.id}`)
                        }
                    >
                        ← {etapaAnterior
                            ? etapaAnterior.ruta.split(" → ")[1]
                            : ""}
                    </button>

                    <button
                        disabled={!etapaSiguiente}
                        onClick={() =>
                            etapaSiguiente &&
                            navigate(`/etapas/${etapaSiguiente.id}`)
                        }
                    >
                        {etapaSiguiente
                            ? etapaSiguiente.ruta.split(" → ")[1]
                            : ""} →
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
                        className={tab === "itinerario" ? "tab active" : "tab"}
                        onClick={() => setTab("itinerario")}
                    >
                        Itinerario
                    </button>

                    <button
                        className={tab === "queVer" ? "tab active" : "tab"}
                        onClick={() => setTab("queVer")}
                    >
                        ¿Qué ver?
                    </button>

                    <button
                        className={tab === "comer" ? "tab active" : "tab"}
                        onClick={() => setTab("comer")}
                    >
                        Dónde comer
                    </button>

                </div>

                <div className="tab-content">

                    {tab === "itinerario" && (
                        <div className="itinerario">

                            {contenido.itinerario.map((parrafo, index) => (
                            <div className="itinerario-paso" key={index}>

                                <div className="itinerario-numero">
                                    {index + 1}
                                </div>

                                <p>
                                    {parrafo}
                                </p>

                            </div>
                        ))}

                        </div>
                    )}

                    {tab === "queVer" && (
                        <div className="que-ver">

                            {contenido.queVer.map((punto, index) => (
                                <div
                                    className="punto-interes"
                                    key={index}
                                >

                                    <h3>
                                        • {punto.nombre}
                                    </h3>

                                    {punto.descripcion && (
                                        <p>
                                            {punto.descripcion}
                                        </p>
                                    )}

                                </div>
                            ))}

                        </div>
                    )}

                    {tab === "comer" && (
                        <div className="restaurantes">

                            {contenido.dondeComer.map((restaurante, index) => (
                                <div
                                    className="restaurante-card"
                                    key={index}
                                >

                                    <h3 className="restaurante-nombre">
                                        {restaurante.nombre}
                                    </h3>

                                    <p className="restaurante-localidad">
                                        {restaurante.localidad}
                                    </p>

                                    {restaurante.especialidad && (
                                        <p className="restaurante-extra">
                                            {restaurante.especialidad}
                                        </p>
                                    )}

                                    {restaurante.nota && (
                                        <p className="restaurante-extra">
                                            {restaurante.nota}
                                        </p>
                                    )}

                                    <div className="restaurante-enlaces">

                                        {restaurante.web ? (
                                            <a
                                                href={restaurante.web}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="restaurante-boton"
                                            >
                                                Web
                                            </a>
                                        ) : (
                                            <span className="restaurante-boton disabled">
                                                Web
                                            </span>
                                        )}

                                        {restaurante.maps ? (
                                            <a
                                                href={restaurante.maps}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="restaurante-boton"
                                            >
                                                Maps
                                            </a>
                                        ) : (
                                            <span className="restaurante-boton disabled">
                                                Maps
                                            </span>
                                        )}

                                    </div>

                                </div>
                            ))}

                        </div>
                    )}

                </div>

            </div>

        </div>

    );
}