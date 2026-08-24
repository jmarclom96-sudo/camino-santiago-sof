import { neon } from "@neondatabase/serverless";

export default {
    async fetch(request: Request) {

        try {

            const sql = neon(process.env.DATABASE_URL!);


            // ============================
            // GET
            // ============================

            if (request.method === "GET") {

                const bingo = await sql`
                    SELECT
                        id,
                        numero,
                        titulo,
                        descripcion
                    FROM bingo
                    WHERE activo = true
                    ORDER BY numero
                `;


                const completados = await sql`
                    SELECT
                        bu.bingo_id,
                        bu.usuario_id,
                        u.nombre,
                        u.usuario,
                        u.foto AS avatar
                    FROM bingo_usuarios bu
                    INNER JOIN usuarios u
                        ON u.id = bu.usuario_id
                    ORDER BY bu.bingo_id, bu.usuario_id
                `;


                return Response.json({
                    ok: true,
                    bingo,
                    completados
                });

            }


            // ============================
            // POST
            // ============================

            if (request.method === "POST") {

                const body = await request.json();

                const bingoId = Number(body.bingo_id);
                const usuarioId = Number(body.usuario_id);


                if (!bingoId || !usuarioId) {

                    return Response.json(
                        {
                            ok: false,
                            error: "Faltan datos."
                        },
                        {
                            status: 400
                        }
                    );

                }


                const resultado = await sql`
                    INSERT INTO bingo_usuarios (
                        bingo_id,
                        usuario_id
                    )
                    VALUES (
                        ${bingoId},
                        ${usuarioId}
                    )
                    ON CONFLICT (bingo_id, usuario_id)
                    DO NOTHING
                    RETURNING id, bingo_id, usuario_id
                `;


                return Response.json({
                    ok: true,
                    completado: resultado[0] ?? null
                });

            }


            // ============================
            // DELETE
            // ============================

            if (request.method === "DELETE") {

                const body = await request.json();

                const bingoId = Number(body.bingo_id);
                const usuarioId = Number(body.usuario_id);


                if (!bingoId || !usuarioId) {

                    return Response.json(
                        {
                            ok: false,
                            error: "Faltan datos."
                        },
                        {
                            status: 400
                        }
                    );

                }


                await sql`
                    DELETE FROM bingo_usuarios
                    WHERE bingo_id = ${bingoId}
                    AND usuario_id = ${usuarioId}
                `;


                return Response.json({
                    ok: true
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

            console.error("ERROR BINGO:", error);

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