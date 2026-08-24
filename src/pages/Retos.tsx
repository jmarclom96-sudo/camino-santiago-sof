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

import {
    getBingo,
    marcarBingo,
    desmarcarBingo,
    type Bingo,
    type BingoCompletado
} from "../services/bingoService";

import { getPerfilActual } from "../services/perfilService";


export default function Retos() {

    const [retos, setRetos] = useState<Reto[]>([]);

    const [fotos, setFotos] = useState<RetoFoto[]>([]);

    const [retoActual, setRetoActual] = useState(0);

    const [cargando, setCargando] = useState(true);

    const [subiendo, setSubiendo] = useState(false);

    const [mensaje, setMensaje] = useState("");

    const [pestana, setPestana] = useState<
        "fotos" | "bingo" | "secreta"
    >("fotos");

    const perfil = getPerfilActual();

    const [bingo, setBingo] = useState<Bingo[]>([]);

    const [bingoCompletados, setBingoCompletados] =
        useState<BingoCompletado[]>([]);

    const [cargandoBingo, setCargandoBingo] =
        useState(false);


    // ==========================================
    // CARGAR RETOS Y FOTOS
    // ==========================================

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

    useEffect(() => {

    if (pestana !== "bingo") {
        return;
    }

    async function cargarBingo() {

        try {

            setCargandoBingo(true);

            const datos = await getBingo();

            setBingo(datos.bingo);
            setBingoCompletados(datos.completados);

        } catch (error) {

            console.error(error);

            setMensaje(
                "No se ha podido cargar el bingo."
            );

        } finally {

            setCargandoBingo(false);

        }

    }

    cargarBingo();

}, [pestana]);


    // ==========================================
    // DATOS DEL RETO ACTUAL
    // ==========================================

    const reto = retos[retoActual];

    const fotosDelReto = reto
        ? fotos.filter(
            foto => foto.reto_id === reto.id
        )
        : [];

    const miFoto = perfil && reto
        ? fotosDelReto.find(
            foto => foto.usuario_id === perfil.id
        )
        : null;


    // ==========================================
    // SUBIR FOTO
    // ==========================================

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


    // ==========================================
    // NAVEGACIÓN ENTRE RETOS
    // ==========================================

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


    // ==========================================
    // RENDER
    // ==========================================

    return (

        <div className="cards">


            {/* ==================================
                PESTAÑAS
            ================================== */}

            <div className="retos-tabs">

                <button
                    className={
                        pestana === "fotos"
                            ? "active"
                            : ""
                    }
                    onClick={() => setPestana("fotos")}
                >
                    📸 Fotos
                </button>


                <button
                    className={
                        pestana === "bingo"
                            ? "active"
                            : ""
                    }
                    onClick={() => setPestana("bingo")}
                >
                    🎲 Bingo
                </button>


                <button
                    className={
                        pestana === "secreta"
                            ? "active"
                            : ""
                    }
                    onClick={() => setPestana("secreta")}
                >
                    🔒 Secreta
                </button>

            </div>


            {/* ==================================
                PESTAÑA FOTOS
            ================================== */}

            {pestana === "fotos" && (

                <>

                    {cargando && (

                        <div className="card">

                            <p>
                                Cargando retos...
                            </p>

                        </div>

                    )}


                    {!cargando && retos.length === 0 && (

                        <div className="card">

                            <h2>
                                🎯 Retos del Camino
                            </h2>

                            <p>
                                No hay retos disponibles.
                            </p>

                        </div>

                    )}


                    {!cargando && reto && (

                        <>

                            {/* RETO ACTUAL */}

                            <div className="card">

                                <h2>
                                    🎯 Retos del Camino
                                </h2>


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
                                            {retoActual + 1}
                                            {" / "}
                                            {retos.length}
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

                                <h2>
                                    📸 Fotos
                                </h2>


                                {fotosDelReto.length === 0 && (

                                    <p>
                                        Todavía nadie ha completado
                                        este reto.
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

                                            👤{" "}

                                            <strong>
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

                                <h2>
                                    📷 Mi foto
                                </h2>


                                {!perfil && (

                                    <p>
                                        Identifícate para poder
                                        subir una foto.
                                    </p>

                                )}


                                {perfil && miFoto && (

                                    <>

                                        <p>
                                            ✓ Ya has completado
                                            este reto.
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
                                            Todavía no has subido
                                            una foto para este reto.
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

                        </>

                    )}

                </>

            )}


            {/* ==================================
                PESTAÑA BINGO
            ================================== */}

            {pestana === "bingo" && (

                <div className="card">

    <h2>🎲 Bingo del Camino</h2>

    {!perfil && (
        <p>
            Identifícate para poder marcar tus casillas.
        </p>
    )}

    {cargandoBingo && (
        <p>
            Cargando bingo...
        </p>
    )}

    {!cargandoBingo && bingo.length > 0 && (

        <>

            {/* ============================
                LISTA DE MISIONES
            ============================ */}

            <div>

                {bingo.map(item => {

                    const completadoPorMi =
                        perfil &&
                        bingoCompletados.some(
                            c =>
                                c.bingo_id === item.id &&
                                c.usuario_id === perfil.id
                        );

                    return (

                        <label
                            key={item.id}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "0.75rem",
                                marginBottom: "0.75rem",
                                cursor: perfil
                                    ? "pointer"
                                    : "default"
                            }}
                        >

                            <input
                                type="checkbox"
                                checked={!!completadoPorMi}
                                disabled={!perfil}
                                onChange={async () => {

                            if (!perfil) {
                                return;
                            }

                            try {

                                if (completadoPorMi) {

                                    await desmarcarBingo(
                                        item.id,
                                        perfil.id
                                    );

                                    setBingoCompletados(actuales =>
                                        actuales.filter(
                                            c =>
                                                !(
                                                    c.bingo_id === item.id &&
                                                    c.usuario_id === perfil.id
                                                )
                                        )
                                    );

                                } else {

                                    await marcarBingo(
                                        item.id,
                                        perfil.id
                                    );

                                    setBingoCompletados(actuales => [
                                        ...actuales,
                                        {
                                            bingo_id: item.id,
                                            usuario_id: perfil.id,
                                            nombre: perfil.nombre,
                                            usuario: perfil.usuario,
                                            avatar: perfil.foto
                                        }
                                    ]);

                                }

                            } catch (error) {

                                console.error(error);

                                setMensaje(
                                    error instanceof Error
                                        ? error.message
                                        : "Error actualizando la casilla."
                                );

                            }

                        }}
                            />

                            <span>
                                {item.titulo}
                            </span>

                        </label>

                    );

                })}

            </div>


            {/* ============================
                TARJETA BINGO
            ============================ */}

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns:
                        "repeat(3, 1fr)",
                    gap: "0.5rem",
                    marginTop: "2rem"
                }}
            >

                {bingo.map(item => {

                    const usuarios =
                        bingoCompletados.filter(
                            c =>
                                c.bingo_id === item.id
                        );

                    return (

                        <div
                            key={item.id}
                            style={{
                                border: "1px solid #ddd",
                                borderRadius: "12px",
                                padding: "0.5rem",
                                minHeight: "90px",
                                textAlign: "center"
                            }}
                        >

                            <strong>
                                {item.numero}
                            </strong>


                            <div
                                style={{
                                    display: "grid",
                                    gridTemplateColumns:
                                        "repeat(3, 1fr)",
                                    gap: "3px",
                                    marginTop: "0.5rem"
                                }}
                            >

                                {usuarios.map(usuario => (

                                    <img
                                        key={usuario.usuario_id}
                                        src={usuario.avatar}
                                        alt={usuario.nombre}
                                        title={usuario.nombre}
                                        style={{
                                            width: "24px",
                                            height: "24px",
                                            objectFit: "cover",
                                            borderRadius: "50%",
                                            margin: "auto"
                                        }}
                                    />

                                ))}

                            </div>

                        </div>

                    );

                })}

            </div>


            {/* ============================
                PROGRESO DE USUARIOS
            ============================ */}

            <div
                style={{
                    marginTop: "2rem"
                }}
            >

                <h3>
                    Progreso
                </h3>


                {[
                    ...new Map(
                        bingoCompletados.map(c => [
                            c.usuario_id,
                            c
                        ])
                    ).values()
                ].map(usuario => {

                    const total =
                        bingoCompletados.filter(
                            c =>
                                c.usuario_id ===
                                usuario.usuario_id
                        ).length;

                    return (

                        <div
                            key={usuario.usuario_id}
                            style={{
                                marginBottom: "0.75rem"
                            }}
                        >

                            <strong>
                                {usuario.nombre}
                            </strong>

                            {" "}

                            {total} / {bingo.length}

                        </div>

                    );

                })}

            </div>

        </>

    )}

</div>

            )}


            {/* ==================================
                PESTAÑA MISIÓN SECRETA
            ================================== */}

            {pestana === "secreta" && (

                <div className="card">

                    <h2>
                        🔒 Misión secreta
                    </h2>

                    <p>
                        Esta misión todavía no está disponible.
                    </p>

                    <p>
                        🤫 Solo los organizadores saben
                        cuándo aparecerá...
                    </p>

                </div>

            )}

        </div>

    );

}