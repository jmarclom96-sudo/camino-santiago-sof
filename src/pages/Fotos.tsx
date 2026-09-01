import "./Home.css";

import { useEffect, useState } from "react";

import { upload } from "@vercel/blob/client";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import { getPerfilActual } from "../services/perfilService";

import {
    getFotos,
    guardarFoto,
    borrarFoto,
    type Foto
} from "../services/fotoService";

import "./Fotos.css";

export default function Fotos() {

    const [fotos, setFotos] = useState<Foto[]>([]);
    const [cargando, setCargando] = useState(true);
    const [subiendo, setSubiendo] = useState(false);
    const [borrando, setBorrando] = useState(false);
    const [mensaje, setMensaje] = useState("");
    const [fotoSeleccionada, setFotoSeleccionada] = useState<Foto | null>(null);

    const perfil = getPerfilActual();

    useEffect(() => {

        async function cargarFotos() {

            try {

                setCargando(true);

                const fotosObtenidas = await getFotos();

                setFotos(fotosObtenidas);

            } catch (error) {

                console.error(error);

                setMensaje("No se han podido cargar las fotos.");

            } finally {

                setCargando(false);

            }

        }

        cargarFotos();

    }, []);


    async function subirFoto() {

        if (!perfil) {

            setMensaje(
                "Necesitas identificarte para subir una foto."
            );

            return;

        }

        const input = document.createElement("input");

        input.type = "file";
        input.accept = "image/jpeg,image/png,image/webp";

        input.onchange = async () => {

            const file = input.files?.[0];

            if (!file) return;

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

                const nuevaFoto = await guardarFoto(
                    perfil.id,
                    blob.url
                );

                setFotos(fotosActuales => [
                    {
                        ...nuevaFoto,
                        nombre: perfil.nombre,
                        usuario: perfil.usuario,
                        avatar: perfil.foto
                    },
                    ...fotosActuales
                ]);

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


    async function eliminarFoto() {

        if (!fotoSeleccionada) return;

        const confirmar = window.confirm(
            "¿Seguro que quieres borrar esta foto?"
        );

        if (!confirmar) return;

        try {

            setBorrando(true);

            await borrarFoto(fotoSeleccionada.id);

            setFotos(fotosActuales =>
                fotosActuales.filter(
                    foto => foto.id !== fotoSeleccionada.id
                )
            );

            setFotoSeleccionada(null);

            setMensaje(
                "Foto eliminada correctamente."
            );

        } catch (error) {

            console.error(error);

            setMensaje(
                error instanceof Error
                    ? error.message
                    : "Ha ocurrido un error al borrar la foto."
            );

        } finally {

            setBorrando(false);

        }

    }


    if (cargando) {

        return (
            <div className="cards">

                <div className="card">

                    <p>Cargando fotos...</p>

                </div>

            </div>
        );

    }


    const ultimaFoto = fotos[0];

    const fotosAleatorias = [...fotos]
        .sort(() => Math.random() - 0.5);


    return (
        <div className="cards">

            <div className="card">

                <h1>📸 Fotos del Camino</h1>

                <p>
                    Sube aquí tu foto.
                </p>

                <button
                    className="btn-primary"
                    onClick={subirFoto}
                    disabled={subiendo}
                >
                    {subiendo
                        ? "Subiendo..."
                        : "📷 Subir foto"}
                </button>

                {mensaje && (
                    <p style={{ marginTop: "1rem" }}>
                        {mensaje}
                    </p>
                )}

            </div>


            {ultimaFoto && (

                <div className="card">

                    <h2>⭐ Última foto</h2>

                    <div>

                        <img
                            src={ultimaFoto.blob_url}
                            alt={`Foto de ${ultimaFoto.nombre}`}
                            style={{
                                width: "100%",
                                borderRadius: "12px",
                                display: "block"
                            }}
                        />

                        <p>
                            👤{" "}
                            <strong>
                                {ultimaFoto.nombre}
                            </strong>
                        </p>

                    </div>

                </div>

            )}


            {fotos.length > 0 && (

                <div className="card">

                    <h2>📸 Momentos del Camino</h2>

                    <Swiper
                        spaceBetween={20}
                        slidesPerView={1}
                        loop={fotos.length > 1}
                    >

                        {fotosAleatorias.map(foto => (

                            <SwiperSlide key={foto.id}>

                                <div>

                                    <img
                                        src={foto.blob_url}
                                        alt={`Foto de ${foto.nombre}`}
                                        style={{
                                            width: "100%",
                                            maxHeight: "500px",
                                            objectFit: "cover",
                                            borderRadius: "12px",
                                            display: "block"
                                        }}
                                    />

                                    <p
                                        style={{
                                            textAlign: "center"
                                        }}
                                    >
                                        👤{" "}
                                        <strong>
                                            {foto.nombre}
                                        </strong>
                                    </p>

                                </div>

                            </SwiperSlide>

                        ))}

                    </Swiper>

                </div>

            )}


            <div className="card">

                <h2>🖼️ Álbum</h2>

                {fotos.length === 0 ? (

                    <p>
                        Todavía no hay fotos.
                    </p>

                ) : (

                    <div className="album-grid">

                        {fotos.map(foto => (

                            <button
                                key={foto.id}
                                type="button"
                                className="album-foto"
                                onClick={() =>
                                    setFotoSeleccionada(foto)
                                }
                            >

                                <img
                                    src={foto.blob_url}
                                    alt={`Foto de ${foto.nombre}`}
                                />

                            </button>

                        ))}

                    </div>

                )}

            </div>


            {fotoSeleccionada && (

                <div
                    className="foto-modal"
                    onClick={() =>
                        !borrando &&
                        setFotoSeleccionada(null)
                    }
                >

                    <div
                        className="foto-modal-contenido"
                        onClick={event =>
                            event.stopPropagation()
                        }
                    >

                        <button
                            type="button"
                            className="foto-modal-cerrar"
                            onClick={() =>
                                setFotoSeleccionada(null)
                            }
                            disabled={borrando}
                        >
                            ×
                        </button>


                        <img
                            src={fotoSeleccionada.blob_url}
                            alt={`Foto de ${fotoSeleccionada.nombre}`}
                            className="foto-modal-imagen"
                        />


                        <p className="foto-modal-autor">
                            👤{" "}
                            <strong>
                                {fotoSeleccionada.nombre}
                            </strong>
                        </p>


                        <div className="foto-modal-acciones">

                            <a
                                href={fotoSeleccionada.blob_url}
                                download
                                target="_blank"
                                rel="noopener noreferrer"
                                className="foto-modal-boton"
                            >
                                ⬇ Descargar
                            </a>

                            <button
                                type="button"
                                className="foto-modal-boton borrar"
                                onClick={eliminarFoto}
                                disabled={borrando}
                            >
                                {borrando
                                    ? "Borrando..."
                                    : "🗑 Borrar"}
                            </button>

                        </div>

                    </div>

                </div>

            )}

        </div>
    );
}

