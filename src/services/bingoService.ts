export type Bingo = {
    id: number;
    numero: number;
    titulo: string;
    descripcion: string;
};

export type BingoCompletado = {
    bingo_id: number;
    usuario_id: number;
    nombre: string;
    usuario: string;
    avatar: string;
};


export async function getBingo(): Promise<{
    bingo: Bingo[];
    completados: BingoCompletado[];
}> {

    const response = await fetch("/api/bingo");

    if (!response.ok) {
        throw new Error("Error obteniendo el bingo");
    }

    const data = await response.json();

    return {
        bingo: data.bingo,
        completados: data.completados
    };

}


export async function marcarBingo(
    bingoId: number,
    usuarioId: number
): Promise<void> {

    const response = await fetch("/api/bingo", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            bingo_id: bingoId,
            usuario_id: usuarioId
        })

    });


    const data = await response.json();


    if (!response.ok) {

        throw new Error(
            data.error || "Error marcando la casilla"
        );

    }

}

export async function desmarcarBingo(
    bingoId: number,
    usuarioId: number
): Promise<void> {

    const response = await fetch("/api/bingo", {

        method: "DELETE",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            bingo_id: bingoId,
            usuario_id: usuarioId
        })

    });


    const data = await response.json();


    if (!response.ok) {

        throw new Error(
            data.error || "Error desmarcando la casilla"
        );

    }

}