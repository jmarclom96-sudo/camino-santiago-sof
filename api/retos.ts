import { neon } from "@neondatabase/serverless";

export default {
    async fetch() {

        try {

            const sql = neon(process.env.DATABASE_URL!);

            const retos = await sql`
                SELECT
                    id,
                    titulo,
                    descripcion,
                    activo
                FROM retos
                WHERE activo = true
                ORDER BY id
            `;

            return Response.json({
                ok: true,
                retos
            });

        } catch (error) {

            console.error("ERROR RETOS:", error);

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