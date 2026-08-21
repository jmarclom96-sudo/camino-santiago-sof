import { useNavigate } from "react-router-dom";
import type { Etapa } from "../types/Etapa";


type Props = {
    etapa: Etapa;
};



export default function EtapaCard({ etapa }: Props) {
    const navigate = useNavigate(); 

    return (
        
        <div className="etapa-card" onClick={() => navigate(`/etapas/${etapa.id}`)}>

            <div className="imagen-container">

                <img
                    src={etapa.imagen}
                    alt={etapa.ruta}
                />

                <div className="numero-etapa">
                    {etapa.dia}
                </div>

            </div>

            <div className="etapa-body">

                <h2>{etapa.ruta}</h2>

                {/* <div className="datos">

                    <div className="dato etapa-numero">
                        <strong>Etapa {etapa.dia}</strong>
                    </div>

                    <div className="dato">
                        <span>📏</span>
                        <p>{etapa.km}</p>
                    </div>

                    <div className="dato">
                        <span>🕒</span>
                        <p>{etapa.tiempo}</p>
                    </div>

                    <div className="dato">
                        <span>🥾</span>
                        <p>{etapa.dificultad}</p>
                    </div>

                </div> */}

                <div className="info-etapa">
                    <span><strong>Etapa {etapa.dia}:</strong></span>
                    <span>📏 {etapa.km}</span>
                    <span>🕒 {etapa.tiempo}</span>
                    <span>🥾 {etapa.dificultad}</span>
                </div>

            </div>

        </div>
    );
}