import "./Home.css";

import { useEffect, useState } from "react";

import { upload } from "@vercel/blob/client";

import {
    getRetos,
    getRetosFotos,
    guardarRetoFoto,
    type Reto,
    type RetoFoto
} from "../services/retosService";

import { getPerfilActual } from "../services/perfilService";


export default function Retos() {

    const [retos, setRetos] = useState<Reto[]>([]);

    const [fotos, setFotos] = useState<RetoFoto[]>([]);

    const [retoActual, setRetoActual] = useState(0);

    const [cargando, setCargando] = useState(true);

    const [subiendo, setSubiendo] = useState(false);

    const [mensaje, setMensaje] = useState("");

    const perfil = getPerfilActual();


    useEffect(() => {

        async function cargarDatos() {

            try {

                setCargando(true);

                const [retosObtenidos, fotosObtenidas] =
                    await Promise.all([
                        getRetos(),
                        getRetosFotos()
                    ]);

                setRetos(retosObtenidos);

                setFotos(fotosObtenidas);

            } catch (error) {

                console.error(error);

                setMensaje(
                    "No se han podido cargar los retos."
                );

            } finally {

                setCargando(false);

            }

        }

        cargarDatos();

    }, []);


    if (cargando) {

        return (
            <div className="cards">
                <div className="card">
                    <p>Cargando retos...</p>
                </div>
            </div>
        );

    }


    if (retos.length === 0) {

        return (
            <div className="cards">
                <div className="card">
                    <h2>🎯 Retos del Camino</h2>
                    <p>No hay retos disponibles.</p>
                </div>
            </div>
        );

    }


    const reto = retos[retoActual];


    const fotosDelReto = fotos.filter(
        foto => foto.reto_id === reto.id
    );


    const miFoto = perfil
        ? fotosDelReto.find(
            foto => foto.usuario_id === perfil.id
        )
        : null;


    async function subirFoto() {

        if (!perfil) {

            setMensaje(
                "Necesitas identificarte para subir una foto."
            );

            return;

        }


        if (miFoto) {

            setMensaje(
                "Ya has subido una foto para este reto."
            );

            return;

        }


        const input = document.createElement("input");

        input.type = "file";

        input.accept =
            "image/jpeg,image/png,image/webp";


        input.onchange = async () => {

            const file = input.files?.[0];

            if (!file) {
                return;
            }


            try {

                setSubiendo(true);

                setMensaje("Subiendo foto...");


                const blob = await upload(

                    file.name,

                    file,

                    {
                        access: "public",
                        handleUploadUrl: "/api/upload"
                    }

                );


                const nuevaFoto = await guardarRetoFoto(
                    reto.id,
                    perfil.id,
                    blob.url
                );


                setFotos(
                    fotosActuales => [
                        ...fotosActuales,
                        {
                            ...nuevaFoto,
                            nombre: perfil.nombre,
                            usuario: perfil.usuario,
                            avatar: perfil.foto
                        }
                    ]
                );


                setMensaje(
                    "¡Foto subida correctamente!"
                );


            } catch (error) {

                console.error(error);

                setMensaje(
                    error instanceof Error
                        ? error.message
                        : "Ha ocurrido un error al subir la foto."
                );

            } finally {

                setSubiendo(false);

            }

        };


        input.click();

    }


    function anteriorReto() {

        setMensaje("");

        setRetoActual(actual =>

            actual === 0
                ? retos.length - 1
                : actual - 1

        );

    }


    function siguienteReto() {

        setMensaje("");

        setRetoActual(actual =>

            actual === retos.length - 1
                ? 0
                : actual + 1

        );

    }


    return (

        <div className="cards">

            <div className="card">

                <h2>🎯 Retos del Camino</h2>


                {/* NAVEGACIÓN */}

                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "1rem",
                        marginTop: "1rem"
                    }}
                >

                    <button
                        className="btn-secondary"
                        onClick={anteriorReto}
                    >
                        ←
                    </button>


                    <div
                        style={{
                            textAlign: "center",
                            flex: 1
                        }}
                    >

                        <h2>
                            {reto.titulo}
                        </h2>

                        <p>
                            {reto.descripcion}
                        </p>

                        <small>
                            {retoActual + 1} / {retos.length}
                        </small>

                    </div>


                    <button
                        className="btn-secondary"
                        onClick={siguienteReto}
                    >
                        →
                    </button>

                </div>

            </div>


            {/* FOTOS DEL RETO */}

            <div className="card">

                <h2>📸 Fotos</h2>


                {fotosDelReto.length === 0 && (

                    <p>
                        Todavía nadie ha completado este reto.
                    </p>

                )}


                {fotosDelReto.map(foto => (

                    <div
                        key={foto.id}
                        style={{
                            marginBottom: "2rem"
                        }}
                    >

                        <p>
                            👤 <strong>
                                {foto.nombre}
                            </strong>
                        </p>


                        <img
                            src={foto.blob_url}
                            alt={`Foto de ${foto.nombre}`}
                            style={{
                                width: "100%",
                                borderRadius: "12px",
                                display: "block"
                            }}
                        />

                    </div>

                ))}

            </div>


            {/* MI FOTO */}

            <div className="card">

                <h2>📷 Mi foto</h2>


                {!perfil && (

                    <p>
                        Identifícate para poder subir una foto.
                    </p>

                )}


                {perfil && miFoto && (

                    <>

                        <p>
                            ✓ Ya has completado este reto.
                        </p>

                        <img
                            src={miFoto.blob_url}
                            alt="Mi foto"
                            style={{
                                width: "100%",
                                borderRadius: "12px"
                            }}
                        />

                    </>

                )}


                {perfil && !miFoto && (

                    <>

                        <p>
                            Todavía no has subido una foto
                            para este reto.
                        </p>

                        <button
                            className="btn-primary"
                            onClick={subirFoto}
                            disabled={subiendo}
                        >
                            {subiendo
                                ? "Subiendo..."
                                : "📷 Subir foto"
                            }
                        </button>

                    </>

                )}


                {mensaje && (

                    <p
                        style={{
                            marginTop: "1rem"
                        }}
                    >
                        {mensaje}
                    </p>

                )}

            </div>

        </div>

    );

}