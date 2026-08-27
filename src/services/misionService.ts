export type MisionSecreta = {
    id: number;
    usuario_id: number;
    titulo: string;
    descripcion: string;
    activa: boolean;
};


export async function getMisionSecreta(
    usuarioId: number
): Promise<MisionSecreta | null> {

    const response = await fetch(
        `/api/misiones-secretas?usuario_id=${usuarioId}`
    );

    if (!response.ok) {
        throw new Error(
            "Error obteniendo la misión secreta"
        );
    }

    const data = await response.json();

    return data.mision;
}