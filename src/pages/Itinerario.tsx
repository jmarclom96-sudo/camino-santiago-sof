import "./Home.css";

import { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import EtapaCard from "../components/EtapaCard";

import {
    getEtapas,
    type Etapa
} from "../services/etapaService";

import "swiper/css";


export default function Itinerario() {

    const [etapas, setEtapas] = useState<Etapa[]>([]);

    const [cargando, setCargando] = useState(true);


    useEffect(() => {

        async function cargarEtapas() {

            try {

                const etapasObtenidas = await getEtapas();

                setEtapas(etapasObtenidas);

            } catch (error) {

                console.error(error);

            } finally {

                setCargando(false);

            }

        }

        cargarEtapas();

    }, []);


    if (cargando) {

        return (
            <div className="itinerario-page">
                <p>Cargando etapas...</p>
            </div>
        );

    }


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