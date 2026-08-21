import { neon } from "@neondatabase/serverless";

export default {
    async fetch() {

        try {

            const sql = neon(process.env.DATABASE_URL!);

            const usuarios = await sql`
                SELECT
                    id,
                    nombre,
                    usuario,
                    password,
                    foto,
                    background,
                    color
                FROM usuarios
                ORDER BY id
            `;

            return Response.json({
                ok: true,
                usuarios
            });

        } catch (error) {

            console.error("ERROR USUARIOS:", error);

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