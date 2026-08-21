import { useNavigate } from "react-router-dom";

import { getPerfilActual } from "../services/perfilService";

type Props = {
    id: number;
    dia: number;
    ruta: string;
};

export default function ReflexionCard({ id, dia, ruta }: Props) {

    const navigate = useNavigate();

    function abrirReflexion() {

        const perfil = getPerfilActual();

        if (!perfil) {

            alert("Debes identificarte para leer las reflexiones.");
            return;

        }

        navigate(`/reflexiones/${id}`);

    }

    return (

        <div
            className="card"
            onClick={abrirReflexion}
            style={{ cursor: "pointer" }}
        >

            <h2>🥾 Etapa {dia}</h2>

            <h3>{ruta}</h3>

            <p>Leer reflexión →</p>

        </div>

    );

}