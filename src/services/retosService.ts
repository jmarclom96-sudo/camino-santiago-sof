export type Reto = {
    id: number;
    titulo: string;
    descripcion: string;
    activo: boolean;
};

export type RetoFoto = {
    id: number;
    reto_id: number;
    usuario_id: number;
    blob_url: string;
    fecha_subida: string;
    nombre: string;
    usuario: string;
    avatar: string;
};


export async function getRetos(): Promise<Reto[]> {

    const response = await fetch("/api/retos");

    if (!response.ok) {
        throw new Error("Error obteniendo los retos");
    }

    const data = await response.json();

    return data.retos;
}


export async function getRetosFotos(): Promise<RetoFoto[]> {

    const response = await fetch("/api/retos-fotos");

    if (!response.ok) {
        throw new Error("Error obteniendo las fotos");
    }

    const data = await response.json();

    return data.fotos;
}


export async function guardarRetoFoto(
    retoId: number,
    usuarioId: number,
    blobUrl: string
): Promise<RetoFoto> {

    const response = await fetch("/api/retos-fotos", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            reto_id: retoId,
            usuario_id: usuarioId,
            blob_url: blobUrl
        })

    });


    const data = await response.json();


    if (!response.ok) {

        throw new Error(
            data.error || "Error guardando la foto"
        );

    }


    return data.foto;
}