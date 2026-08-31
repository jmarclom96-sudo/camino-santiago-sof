import { useEffect, useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";

import { getPerfilActual } from "../services/perfilService";
import {
    getReflexion,
    type Reflexion
} from "../services/reflexionService";

export default function ReflexionDetalle() {

    const { etapaId } = useParams();

    const perfil = getPerfilActual();

    const [reflexion, setReflexion] =
        useState<Reflexion | null>(null);

    const [cargando, setCargando] =
        useState(true);

    if (!perfil) {
        return <Navigate to="/reflexiones" replace />;
    }

    const usuarioId = perfil.id;


    // ==========================================
    // CARGAR REFLEXIÓN
    // ==========================================

    useEffect(() => {

        async function cargarReflexion() {

            try {

                setCargando(true);
                setReflexion(null);

                const datos = await getReflexion(
                    usuarioId,
                    Number(etapaId)
                );

                setReflexion(datos);

            } catch (error) {

                console.error(
                    "ERROR CARGANDO REFLEXIÓN:",
                    error
                );

                setReflexion(null);

            } finally {

                setCargando(false);

            }

        }

        cargarReflexion();

    }, [usuarioId, etapaId]);


    // ==========================================
    // CARGANDO
    // ==========================================

    if (cargando) {

        return (
            <div
                className="itinerario-page"
                style={{
                    background: perfil.background
                }}
            >

                <div className="detalle-etapa">

                    <div className="tab-content">

                        <p>
                            Cargando reflexión...
                        </p>

                    </div>

                </div>

            </div>
        );

    }


    // ==========================================
    // NO ENCONTRADA
    // ==========================================

    if (!reflexion) {
        return <Navigate to="/reflexiones" replace />;
    }


    // ==========================================
    // RENDER
    // ==========================================

    return (

        <div
            className="itinerario-page"
            style={{
                background: perfil.background
            }}
        >

            <div className="detalle-etapa">

                <div
                    className="tab-content"
                    style={{
                        borderTop:
                            `5px solid ${perfil.color}`
                    }}
                >

                    {/* ==================================
                        TÍTULO
                    ================================== */}

                    <h1
                        style={{
                            color: perfil.color
                        }}
                    >
                        {reflexion.titulo}
                    </h1>


                    {/* ==================================
                        CITAS
                    ================================== */}

                    {reflexion.contenido.citas &&
                        reflexion.contenido.citas.length > 0 && (

                        <div
                            style={{
                                marginBottom: "1.5rem"
                            }}
                        >

                            {reflexion.contenido.citas &&
                            reflexion.contenido.citas.length > 0 && (

                            <div
                                style={{
                                    marginBottom: "1.5rem"
                                }}
                            >

                                {reflexion.contenido.citas.map(
                                    (cita, index) => (

                                        <div key={index}>

                                            <p>
                                                <strong>
                                                    {cita.referencia}
                                                </strong>
                                                {" — "}
                                                «{cita.texto}»
                                            </p>

                                        </div>

                                    )
                                )}

                            </div>

                        )}

                        </div>

                    )}

                    {/* ==================================
                        COMENTARIO
                    ================================== */}

                    <div className="descripcion">

                        {reflexion.contenido.comentario.map(
                            (parrafo, index) => (

                                <p key={index}>
                                    {parrafo}
                                </p>

                            )
                        )}

                    </div>


                    {/* ==================================
                        SANTOS
                    ================================== */}

                    {reflexion.contenido.santos &&
                        reflexion.contenido.santos.length > 0 && (

                        <div
                            className="preguntas"
                            style={{
                                borderLeft:
                                    `4px solid ${perfil.color}`
                            }}
                        >

                            <h2>Santos</h2>

                            <ul>

                                {reflexion.contenido.santos.map(
                                    (santo, index) => (

                                        <li key={index}>

                                            <strong>
                                                {santo.nombre}
                                            </strong>

                                            {": "}

                                            {santo.frase}

                                        </li>

                                    )
                                )}

                            </ul>

                        </div>

                    )}


                    {/* ==================================
                        PREGUNTAS
                    ================================== */}

                    {reflexion.contenido.preguntas &&
                        reflexion.contenido.preguntas.length > 0 && (

                        <div
                            className="preguntas"
                            style={{
                                borderLeft:
                                    `4px solid ${perfil.color}`
                            }}
                        >

                            <h2>Preguntas</h2>

                            <ul>

                                {reflexion.contenido.preguntas.map(
                                    (pregunta, index) => (

                                        <li key={index}>
                                            {pregunta}
                                        </li>

                                    )
                                )}

                            </ul>

                        </div>

                    )}


                    {/* ==================================
                        VOLVER
                    ================================== */}

                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            marginTop: "2rem"
                        }}
                    >

                        <Link
                            to="/reflexiones"
                            className="btn-secondary"
                            style={{
                                borderColor:
                                    perfil.color,
                                color:
                                    perfil.color
                            }}
                        >
                            ← Volver
                        </Link>

                    </div>

                </div>

            </div>

        </div>

    );

}