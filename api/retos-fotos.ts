import { neon } from "@neondatabase/serverless";

export default {
    async fetch() {

        try {

            const sql = neon(process.env.DATABASE_URL!);

            const fotos = await sql`
                SELECT
                    rf.id,
                    rf.reto_id,
                    rf.usuario_id,
                    rf.blob_url,
                    rf.fecha_subida,
                    u.nombre,
                    u.usuario,
                    u.foto AS avatar
                FROM retos_fotos rf
                INNER JOIN usuarios u
                    ON u.id = rf.usuario_id
                ORDER BY rf.fecha_subida
            `;

            return Response.json({
                ok: true,
                fotos
            });

        } catch (error) {

            console.error("ERROR RETOS FOTOS:", error);

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