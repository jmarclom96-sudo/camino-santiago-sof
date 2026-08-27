import { neon } from "@neondatabase/serverless";

export default {
    async fetch() {

        try {

            const sql = neon(process.env.DATABASE_URL!);

            const etapas = await sql`
                SELECT
                    id,
                    dia,
                    ruta,
                    km,
                    tiempo,
                    dificultad,
                    imagen
                FROM etapas
                ORDER BY dia
            `;

            return Response.json({
                ok: true,
                etapas
            });

        } catch (error) {

            console.error("ERROR ETAPAS:", error);

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