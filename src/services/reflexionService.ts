import { reflexiones } from "../data/reflexiones";

export function getReflexion(
    perfilId: number,
    etapaId: number
) {
    return reflexiones.find(r =>
        r.perfilId === perfilId &&
        r.etapaId === etapaId
    );
}