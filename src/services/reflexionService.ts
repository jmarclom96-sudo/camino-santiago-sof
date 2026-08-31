export type Cita = {
    referencia: string;
    texto: string;
};

export type Santo = {
    nombre: string;
    frase: string;
};

export type ContenidoReflexion = {
    citas: Cita[];
    comentario: string[];
    santos: Santo[];
    preguntas: string[];
};

export type Reflexion = {
    id: number;
    usuario_id: number;
    etapa: number;
    titulo: string;
    contenido: ContenidoReflexion;
};

export async function getReflexion(
    usuarioId: number,
    etapa: number
): Promise<Reflexion | null> {

    const response = await fetch(
        `/api/reflexiones?usuario_id=${usuarioId}&etapa=${etapa}`
    );

    const data = await response.json();

    if (!response.ok || !data.ok) {
        throw new Error(
            data.error || "No se ha podido cargar la reflexión."
        );
    }

    return data.reflexion;
}