import "./Home.css";

import { useState } from "react";

import { upload } from "@vercel/blob/client";

export default function Fotos() {

    const [foto, setFoto] = useState<File | null>(null);

    const [fotoUrl, setFotoUrl] = useState<string | null>(null);

    const [subiendo, setSubiendo] = useState(false);

    const [mensaje, setMensaje] = useState("");


    async function subirFoto() {

        if (!foto) {

            setMensaje("Selecciona una foto primero.");

            return;

        }

        try {

            setSubiendo(true);

            setMensaje("Subiendo foto...");


            const blob = await upload(

                foto.name,

                foto,

                {

                    access: "public",

                    handleUploadUrl: "/api/upload"

                }

            );


            console.log("Foto subida:", blob);

            setFotoUrl(blob.url);

            setMensaje("¡Foto subida correctamente!");


        } catch (error) {

            console.error(error);

            setMensaje(
                "Ha ocurrido un error al subir la foto."
            );

        } finally {

            setSubiendo(false);

        }

    }


    return (

        <div className="cards">


            {/* GALERÍA */}

            <div className="card">

                <h2>📷 Galería</h2>

                <p>
                    Aquí aparecerán las fotos del viaje.
                </p>


                {fotoUrl && (

                    <img
                        src={fotoUrl}
                        alt="Foto subida"
                        style={{
                            width: "100%",
                            maxWidth: "500px",
                            marginTop: "1rem",
                            borderRadius: "12px"
                        }}
                    />

                )}

            </div>


            {/* SUBIR FOTO */}

            <div className="card">

                <h2>⬆️ Subir una foto</h2>

                <input
                    type="file"
                    accept="image/jpeg,image/png,image/webp"
                    onChange={(e) => {

                        setFoto(
                            e.target.files?.[0] ?? null
                        );

                        setMensaje("");

                    }}
                />

                <br />
                <br />

                <button
                    className="btn-primary"
                    onClick={subirFoto}
                    disabled={subiendo}
                >

                    {subiendo
                        ? "Subiendo..."
                        : "Subir foto"
                    }

                </button>


                {mensaje && (

                    <p style={{ marginTop: "1rem" }}>
                        {mensaje}
                    </p>

                )}

            </div>


            {/* ÚLTIMA SUBIDA */}

            <div className="card">

                <h2>🌄 Última subida</h2>

                {fotoUrl ? (

                    <>

                        <p>
                            Foto almacenada correctamente.
                        </p>

                        <img
                            src={fotoUrl}
                            alt="Última subida"
                            style={{
                                width: "100%",
                                maxWidth: "500px",
                                borderRadius: "12px"
                            }}
                        />

                    </>

                ) : (

                    <p>
                        No hay fotos todavía.
                    </p>

                )}

            </div>


        </div>

    );

}