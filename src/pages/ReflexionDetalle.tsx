import { useParams, Link, Navigate } from "react-router-dom";

import { getPerfilActual } from "../services/perfilService";
import { getReflexion } from "../services/reflexionService";

export default function ReflexionDetalle() {

    const { etapaId } = useParams();

    const perfil = getPerfilActual();

    if (!perfil) {
    return <Navigate to="/reflexiones" replace />;
}

    const reflexion = getReflexion(
        perfil.id,
        Number(etapaId)
    );

    if (!reflexion) {
    return <Navigate to="/reflexiones" replace />;
}

    return (

        <div className="itinerario-page" style={{background: perfil.background}}>

        <div className="detalle-etapa">

        <div className="tab-content"style={{borderTop: `5px solid ${perfil.color}`}}>

            <h1 style={{color: perfil.color}}>{reflexion.titulo}</h1>

            <p className="descripcion">
                {reflexion.texto}
            </p>

            <div className="preguntas" style={{borderLeft: `4px solid ${perfil.color}`}}>

                <h2>Mientras caminas</h2>

                <ul>

                    {reflexion.preguntas.map((pregunta, index) => (

                        <li key={index}>
                            {pregunta}
                        </li>

                    ))}

                </ul>

            </div>

            <img
                src={reflexion.foto}
                alt={reflexion.titulo}
                className="reflexion-imagen"
            />

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
                        borderColor: perfil.color,
                        color: perfil.color
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