import { neon } from "@neondatabase/serverless";

export default {
    async fetch(request: Request) {

        try {

            const url = new URL(request.url);

            const usuarioId =
                Number(url.searchParams.get("usuario_id"));

            const etapa =
                Number(url.searchParams.get("etapa"));

            if (!usuarioId || Number.isNaN(etapa)) {

                return Response.json(
                    {
                        ok: false,
                        error: "Faltan usuario_id o etapa."
                    },
                    {
                        status: 400
                    }
                );

            }

            const sql = neon(process.env.DATABASE_URL!);

            const reflexiones = await sql`
                SELECT
                    id,
                    usuario_id,
                    etapa,
                    titulo,
                    contenido
                FROM reflexiones
                WHERE usuario_id = ${usuarioId}
                  AND etapa = ${etapa}
                LIMIT 1
            `;

            if (reflexiones.length === 0) {

                return Response.json(
                    {
                        ok: false,
                        error: "Reflexión no encontrada."
                    },
                    {
                        status: 404
                    }
                );

            }

            return Response.json({
                ok: true,
                reflexion: reflexiones[0]
            });

        } catch (error) {

            console.error("ERROR REFLEXIONES:", error);

            return Response.json(
                {
                    ok: false,
                    error: error instanceof Error
                        ? error.message
                        : String(error)
                },
                {
                    status: 500
                }
            );
        }
    }
};