import { neon } from "@neondatabase/serverless";

export default {
    async fetch(request: Request) {

        console.log("🔥 /api/retos-fotos RECIBIDO");
        console.log("Método:", request.method);

        try {

            const sql = neon(process.env.DATABASE_URL!);

            // GET → obtener todas las fotos
            if (request.method === "GET") {

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
            }


            // POST → guardar una nueva foto
            if (request.method === "POST") {

                const body = await request.json();

                console.log("Body recibido:", body);

                const {
                    reto_id,
                    usuario_id,
                    blob_url
                } = body;

                if (!reto_id || !usuario_id || !blob_url) {

                    return Response.json(
                        {
                            ok: false,
                            error: "Faltan datos obligatorios."
                        },
                        {
                            status: 400
                        }
                    );
                }


                const resultado = await sql`
                    INSERT INTO retos_fotos (
                        reto_id,
                        usuario_id,
                        blob_url
                    )
                    VALUES (
                        ${reto_id},
                        ${usuario_id},
                        ${blob_url}
                    )
                    RETURNING
                        id,
                        reto_id,
                        usuario_id,
                        blob_url,
                        fecha_subida
                `;

                console.log(
                    "✅ Foto guardada en Neon:",
                    resultado[0]
                );


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

            console.error(
                "ERROR RETOS FOTOS:",
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