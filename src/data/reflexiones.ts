import etapa1 from "../assets/etapa1.jpg";
import etapa2 from "../assets/etapa2.jpg";
import etapa3 from "../assets/etapa3.jpg";
import etapa4 from "../assets/etapa4.jpg";
import etapa5 from "../assets/etapa5.jpg";
import reflex1 from "../assets/etapas/reflex1.jpg";

export type Reflexion = {

    id: number;

    perfilId: number;

    etapaId: number;

    titulo: string;

    texto: string;

    preguntas: string[];

    foto: string;

};

export const reflexiones: Reflexion[] = [

    // ==========================
    // Sofía
    // ==========================

    {
        id: 1,
        perfilId: 1,
        etapaId: 1,
        titulo: "Primer día",
        texto: "Hola Sofía, aquí la primera reflexión para ti, vamos a engordar el texto para que parezca una reflexión de verdad y ver como queda con un texto largo. Total la de Sofía no voy a poder verla que no quiere que la lea y la va a meter ella sin que yo mire, con los ojos cerrados. No es consciente de lo que estoy haciendo con la web, me va a tener que hacer un buen favor para pagar, ya estoy pensando opciones.",
        preguntas: [
            "¿Qué espero encontrar durante este Camino?",
            "¿Qué me gustaría dejar atrás?",
            "¿Con qué actitud quiero comenzar?"
        ],
        foto: reflex1
    },

    {
        id: 2,
        perfilId: 1,
        etapaId: 2,
        titulo: "Etapa 2",
        texto: "Texto provisional...",
        preguntas: [
            "Pregunta 1",
            "Pregunta 2",
            "Pregunta 3"
        ],
        foto: etapa2
    },

    {
        id: 3,
        perfilId: 1,
        etapaId: 3,
        titulo: "Etapa 3",
        texto: "Texto provisional...",
        preguntas: ["Pregunta 1", "Pregunta 2", "Pregunta 3"],
        foto: etapa3
    },

    {
        id: 4,
        perfilId: 1,
        etapaId: 4,
        titulo: "Etapa 4",
        texto: "Texto provisional...",
        preguntas: ["Pregunta 1", "Pregunta 2", "Pregunta 3"],
        foto: etapa4
    },

    {
        id: 5,
        perfilId: 1,
        etapaId: 5,
        titulo: "Etapa 5",
        texto: "Texto provisional...",
        preguntas: ["Pregunta 1", "Pregunta 2", "Pregunta 3"],
        foto: etapa5
    },

    // ==========================
    // Teresa
    // ==========================

    {
        id: 6,
        perfilId: 2,
        etapaId: 1,
        titulo: "Etapa 1",
        texto: "Texto provisional...",
        preguntas: ["Pregunta 1", "Pregunta 2", "Pregunta 3"],
        foto: etapa1
    },
    {
        id: 7,
        perfilId: 2,
        etapaId: 2,
        titulo: "Etapa 2",
        texto: "Texto provisional...",
        preguntas: ["Pregunta 1", "Pregunta 2", "Pregunta 3"],
        foto: etapa2
    },
    {
        id: 8,
        perfilId: 2,
        etapaId: 3,
        titulo: "Etapa 3",
        texto: "Texto provisional...",
        preguntas: ["Pregunta 1", "Pregunta 2", "Pregunta 3"],
        foto: etapa3
    },
    {
        id: 9,
        perfilId: 2,
        etapaId: 4,
        titulo: "Etapa 4",
        texto: "Texto provisional...",
        preguntas: ["Pregunta 1", "Pregunta 2", "Pregunta 3"],
        foto: etapa4
    },
    {
        id: 10,
        perfilId: 2,
        etapaId: 5,
        titulo: "Etapa 5",
        texto: "Texto provisional...",
        preguntas: ["Pregunta 1", "Pregunta 2", "Pregunta 3"],
        foto: etapa5
    },

    // ==========================
    // Félix
    // ==========================

    {
        id: 11,
        perfilId: 3,
        etapaId: 1,
        titulo: "Etapa 1",
        texto: "Texto provisional...",
        preguntas: ["Pregunta 1", "Pregunta 2", "Pregunta 3"],
        foto: etapa1
    },
    {
        id: 12,
        perfilId: 3,
        etapaId: 2,
        titulo: "Etapa 2",
        texto: "Texto provisional...",
        preguntas: ["Pregunta 1", "Pregunta 2", "Pregunta 3"],
        foto: etapa2
    },
    {
        id: 13,
        perfilId: 3,
        etapaId: 3,
        titulo: "Etapa 3",
        texto: "Texto provisional...",
        preguntas: ["Pregunta 1", "Pregunta 2", "Pregunta 3"],
        foto: etapa3
    },
    {
        id: 14,
        perfilId: 3,
        etapaId: 4,
        titulo: "Etapa 4",
        texto: "Texto provisional...",
        preguntas: ["Pregunta 1", "Pregunta 2", "Pregunta 3"],
        foto: etapa4
    },
    {
        id: 15,
        perfilId: 3,
        etapaId: 5,
        titulo: "Etapa 5",
        texto: "Texto provisional...",
        preguntas: ["Pregunta 1", "Pregunta 2", "Pregunta 3"],
        foto: etapa5
    },

    // ==========================
    // Jaime
    // ==========================

    {
        id: 16,
        perfilId: 4,
        etapaId: 1,
        titulo: "Etapa 1",
        texto: "Texto provisional...",
        preguntas: ["Pregunta 1", "Pregunta 2", "Pregunta 3"],
        foto: etapa1
    },
    {
        id: 17,
        perfilId: 4,
        etapaId: 2,
        titulo: "Etapa 2",
        texto: "Texto provisional...",
        preguntas: ["Pregunta 1", "Pregunta 2", "Pregunta 3"],
        foto: etapa2
    },
    {
        id: 18,
        perfilId: 4,
        etapaId: 3,
        titulo: "Etapa 3",
        texto: "Texto provisional...",
        preguntas: ["Pregunta 1", "Pregunta 2", "Pregunta 3"],
        foto: etapa3
    },
    {
        id: 19,
        perfilId: 4,
        etapaId: 4,
        titulo: "Etapa 4",
        texto: "Texto provisional...",
        preguntas: ["Pregunta 1", "Pregunta 2", "Pregunta 3"],
        foto: etapa4
    },
    {
        id: 20,
        perfilId: 4,
        etapaId: 5,
        titulo: "Etapa 5",
        texto: "Texto provisional...",
        preguntas: ["Pregunta 1", "Pregunta 2", "Pregunta 3"],
        foto: etapa5
    },

    // ==========================
    // Reyes
    // ==========================

    {
        id: 21,
        perfilId: 5,
        etapaId: 1,
        titulo: "Etapa 1",
        texto: "Texto provisional...",
        preguntas: ["Pregunta 1", "Pregunta 2", "Pregunta 3"],
        foto: etapa1
    },
    {
        id: 22,
        perfilId: 5,
        etapaId: 2,
        titulo: "Etapa 2",
        texto: "Texto provisional...",
        preguntas: ["Pregunta 1", "Pregunta 2", "Pregunta 3"],
        foto: etapa2
    },
    {
        id: 23,
        perfilId: 5,
        etapaId: 3,
        titulo: "Etapa 3",
        texto: "Texto provisional...",
        preguntas: ["Pregunta 1", "Pregunta 2", "Pregunta 3"],
        foto: etapa3
    },
    {
        id: 24,
        perfilId: 5,
        etapaId: 4,
        titulo: "Etapa 4",
        texto: "Texto provisional...",
        preguntas: ["Pregunta 1", "Pregunta 2", "Pregunta 3"],
        foto: etapa4
    },
    {
        id: 25,
        perfilId: 5,
        etapaId: 5,
        titulo: "Etapa 5",
        texto: "Texto provisional...",
        preguntas: ["Pregunta 1", "Pregunta 2", "Pregunta 3"],
        foto: etapa5
    }

];