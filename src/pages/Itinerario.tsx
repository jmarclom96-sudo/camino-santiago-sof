import "./Home.css";
// import etapa1 from "../assets/etapa1.png";
import { Swiper, SwiperSlide } from "swiper/react";
import EtapaCard from "../components/EtapaCard";

import { getEtapas } from "../services/etapaService";

const etapas = getEtapas();

import "swiper/css";


export default function Itinerario() {
    return (
        <div className="itinerario-page">

            <h1>Etapas del Camino Francés</h1>

            <Swiper
                spaceBetween={30}
                slidesPerView={1}
            >
                {etapas.map((etapa) => (
                    <SwiperSlide key={etapa.id}>
                        <EtapaCard etapa={etapa} />
                    </SwiperSlide>
                ))}
            </Swiper>

        </div>
    );
}