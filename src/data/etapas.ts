import etapa1 from "../assets/etapa1.jpg";
import etapa2 from "../assets/etapa2.jpg";
import etapa3 from "../assets/etapa3.jpg";
import etapa4 from "../assets/etapa4.jpg";
import etapa5 from "../assets/etapa5.jpg";

export type Etapa = {
    id: number;
    dia: number;
    ruta: string;
    km: string;
    tiempo: string;
    dificultad: string;
    imagen: string;
};

export const etapas: Etapa[] = [
    {
        id: 1,
        dia: 1,
        ruta: "Sarria → Portomarín",
        km: "22 km",
        tiempo: "5 h 30 min",
        dificultad: "⭐⭐⭐",
        imagen: etapa1,
    },
    {
        id: 2,
        dia: 2,
        ruta: "Portomarín → Palas de Rei",
        km: "25 km",
        tiempo: "6 h",
        dificultad: "⭐⭐",
        imagen: etapa2,
    },
    {
        id: 3,
        dia: 3,
        ruta: "Palas de Rei → Arzúa",
        km: "29 km",
        tiempo: "6 h 30 min",
        dificultad: "⭐⭐⭐",
        imagen: etapa3,
    },
    {
        id: 4,
        dia: 4,
        ruta: "Arzúa → O Pedrouzo",
        km: "19 km",
        tiempo: "4 h 30 min",
        dificultad: "⭐⭐",
        imagen: etapa4,
    },
    {
        id: 5,
        dia: 5,
        ruta: "O Pedrouzo → Santiago",
        km: "20 km",
        tiempo: "5 h",
        dificultad: "⭐⭐",
        imagen: etapa5,
    },
];