import { neon } from "@neondatabase/serverless";

export default {
    async fetch(request: Request) {

        try {

            const sql = neon(process.env.DATABASE_URL!);

            const url = new URL(request.url);

            const usuarioId = url.searchParams.get("usuario_id");

            if (!usuarioId) {

                return Response.json(
                    {
                        ok: false,
                        error: "Falta el usuario_id"
                    },
                    {
                        status: 400
                    }
                );

            }

            const misiones = await sql`
                SELECT
                    id,
                    usuario_id,
                    titulo,
                    descripcion,
                    activa
                FROM misiones_secretas
                WHERE usuario_id = ${Number(usuarioId)}
                LIMIT 1
            `;

            return Response.json({
                ok: true,
                mision: misiones[0] ?? null
            });

        } catch (error) {

            console.error(
                "ERROR MISION SECRETA:",
                error
            );

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