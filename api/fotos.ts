import { neon } from "@neondatabase/serverless";

export default {
    async fetch(request: Request) {

        try {

            const sql = neon(process.env.DATABASE_URL!);

            // ==========================
            // GET → obtener fotos
            // ==========================

            if (request.method === "GET") {

                const fotos = await sql`
                    SELECT
                        f.id,
                        f.usuario_id,
                        f.blob_url,
                        f.creada_en,
                        u.nombre,
                        u.usuario,
                        u.foto AS avatar
                    FROM fotos f
                    INNER JOIN usuarios u
                        ON u.id = f.usuario_id
                    ORDER BY f.creada_en DESC
                `;

                return Response.json({
                    ok: true,
                    fotos
                });

            }


            // ==========================
            // POST → guardar foto
            // ==========================

            if (request.method === "POST") {

                const body = await request.json();

                const usuarioId = Number(body.usuario_id);
                const blobUrl = body.blob_url;

                if (!usuarioId || !blobUrl) {

                    return Response.json(
                        {
                            ok: false,
                            error: "Faltan datos para guardar la foto."
                        },
                        {
                            status: 400
                        }
                    );

                }

                const resultado = await sql`
                    INSERT INTO fotos (
                        usuario_id,
                        blob_url
                    )
                    VALUES (
                        ${usuarioId},
                        ${blobUrl}
                    )
                    RETURNING
                        id,
                        usuario_id,
                        blob_url,
                        creada_en
                `;

                return Response.json({
                    ok: true,
                    foto: resultado[0]
                });

            }


            return Response.json(
                {
                    ok: false,
                    error: "Método no permitido."
                },
                {
                    status: 405
                }
            );

        } catch (error) {

            console.error("ERROR FOTOS:", error);

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