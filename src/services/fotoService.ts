export type Foto = {
    id: number;
    usuario_id: number;
    nombre: string;
    usuario: string;
    avatar: string;
    blob_url: string;
    created_at: string;
};

export async function getFotos(): Promise<Foto[]> {

    const respuesta = await fetch("/api/fotos");

    if (!respuesta.ok) {
        throw new Error("Error obteniendo las fotos");
    }

    const datos = await respuesta.json();

    if (!datos.ok) {
        throw new Error(
            datos.error || "Error obteniendo las fotos"
        );
    }

    return datos.fotos;
}


export async function guardarFoto(
    usuario_id: number,
    blob_url: string
): Promise<Foto> {

    const respuesta = await fetch("/api/fotos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            usuario_id,
            blob_url
        })
    });

    if (!respuesta.ok) {
        throw new Error("Error guardando la foto");
    }

    const datos = await respuesta.json();

    if (!datos.ok) {
        throw new Error(
            datos.error || "Error guardando la foto"
        );
    }

    return datos.foto;
}