import "./Home.css";

import { useEffect, useState } from "react";

import { upload } from "@vercel/blob/client";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import { getPerfilActual } from "../services/perfilService";

import {
    getFotos,
    guardarFoto,
    type Foto
} from "../services/fotoService";


export default function Fotos() {

    const [fotos, setFotos] = useState<Foto[]>([]);

    const [cargando, setCargando] = useState(true);

    const [subiendo, setSubiendo] = useState(false);

    const [mensaje, setMensaje] = useState("");

    const perfil = getPerfilActual();


    // ==========================
    // CARGAR FOTOS
    // ==========================

    useEffect(() => {

        async function cargarFotos() {

            try {

                setCargando(true);

                const fotosObtenidas = await getFotos();

                setFotos(fotosObtenidas);

            } catch (error) {

                console.error(error);

                setMensaje(
                    "No se han podido cargar las fotos."
                );

            } finally {

                setCargando(false);

            }

        }

        cargarFotos();

    }, []);


    // ==========================
    // SUBIR FOTO
    // ==========================

    async function subirFoto() {

        if (!perfil) {

            setMensaje(
                "Necesitas identificarte para subir una foto."
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


                // ==========================
                // SUBIR A VERCEL BLOB
                // ==========================

                const blob = await upload(

                    file.name,

                    file,

                    {
                        access: "public",
                        handleUploadUrl: "/api/upload"
                    }

                );


                // ==========================
                // GUARDAR EN NEON
                // ==========================

                const nuevaFoto = await guardarFoto(
                    perfil.id,
                    blob.url
                );


                // Añadimos los datos del usuario
                // para mostrarla inmediatamente.

                setFotos(
                    fotosActuales => [

                        {
                            ...nuevaFoto,
                            nombre: perfil.nombre,
                            usuario: perfil.usuario,
                            avatar: perfil.foto
                        },

                        ...fotosActuales

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


    // ==========================
    // CARGANDO
    // ==========================

    if (cargando) {

        return (

            <div className="cards">

                <div className="card">

                    <p>
                        Cargando fotos...
                    </p>

                </div>

            </div>

        );

    }


    // ==========================
    // ÚLTIMA FOTO
    // ==========================

    const ultimaFoto = fotos[0];


    // ==========================
    // CARRUSEL ALEATORIO
    // ==========================

    const fotosAleatorias = [...fotos]
        .sort(() => Math.random() - 0.5);


    return (

        <div className="cards">


            {/* ==========================
                CABECERA
            ========================== */}

            <div className="card">

                <h1>
                    📸 Fotos del Camino
                </h1>

                <p>
                    Comparte los momentos que vayas
                    viviendo durante el Camino.
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


            {/* ==========================
                ÚLTIMA FOTO
            ========================== */}

            {ultimaFoto && (

                <div className="card">

                    <h2>
                        ⭐ Última foto
                    </h2>


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

                            👤 <strong>
                                {ultimaFoto.nombre}
                            </strong>

                        </p>

                    </div>

                </div>

            )}


            {/* ==========================
                CARRUSEL
            ========================== */}

            {fotos.length > 0 && (

                <div className="card">

                    <h2>
                        📸 Momentos del Camino
                    </h2>


                    <Swiper
                        spaceBetween={20}
                        slidesPerView={1}
                        loop={fotos.length > 1}
                    >

                        {fotosAleatorias.map(foto => (

                            <SwiperSlide
                                key={foto.id}
                            >

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

                                        👤 <strong>
                                            {foto.nombre}
                                        </strong>

                                    </p>

                                </div>

                            </SwiperSlide>

                        ))}

                    </Swiper>

                </div>

            )}


            {/* ==========================
                ÁLBUM
            ========================== */}

            <div className="card">

                <h2>
                    🖼️ Álbum
                </h2>


                {fotos.length === 0 ? (

                    <p>
                        Todavía no hay fotos.
                    </p>

                ) : (

                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns:
                                "repeat(auto-fill, minmax(140px, 1fr))",
                            gap: "10px"
                        }}
                    >

                        {fotos.map(foto => (

                            <div
                                key={foto.id}
                            >

                                <img
                                    src={foto.blob_url}
                                    alt={`Foto de ${foto.nombre}`}
                                    style={{
                                        width: "100%",
                                        aspectRatio: "1 / 1",
                                        objectFit: "cover",
                                        borderRadius: "10px",
                                        display: "block"
                                    }}
                                />

                            </div>

                        ))}

                    </div>

                )}

            </div>

        </div>

    );

}