export type Etapa = {
    id: number;
    dia: number;
    ruta: string;
    km: string;
    tiempo: string;
    dificultad: string;
    imagen: string;
};

export async function getEtapas(): Promise<Etapa[]> {

    const response = await fetch("/api/etapas");

    if (!response.ok) {
        throw new Error("Error obteniendo las etapas");
    }

    const data = await response.json();

    return data.etapas;
}


export async function getEtapa(
    id: number
): Promise<Etapa | undefined> {

    const etapas = await getEtapas();

    return etapas.find(e => e.id === id);
}


export async function getEtapaAnterior(
    id: number
): Promise<Etapa | undefined> {

    const etapas = await getEtapas();

    return etapas.find(e => e.id === id - 1);
}


export async function getEtapaSiguiente(
    id: number
): Promise<Etapa | undefined> {

    const etapas = await getEtapas();

    return etapas.find(e => e.id === id + 1);
}