import { neon } from "@neondatabase/serverless";

export default {
    async fetch() {

        try {

            const sql = neon(process.env.DATABASE_URL!);

            const result = await sql`
                SELECT NOW() AS fecha
            `;

            return Response.json({
                ok: true,
                mensaje: "Conexión con Neon correcta",
                fecha: result[0].fecha
            });

        } catch (error) {

            console.error("ERROR NEON:", error);

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