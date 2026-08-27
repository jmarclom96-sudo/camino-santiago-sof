import { etapas, type Etapa } from "../data/etapas";

export function getEtapas(): Etapa[] {
    return etapas;
}

export function getEtapa(id: number): Etapa | undefined {
    return etapas.find(e => e.id === id);
}

export function getEtapaAnterior(id: number): Etapa | undefined {
    return etapas.find(e => e.id === id - 1);
}

export function getEtapaSiguiente(id: number): Etapa | undefined {
    return etapas.find(e => e.id === id + 1);
}