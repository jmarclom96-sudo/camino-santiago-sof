import {
    handleUpload,
    type HandleUploadBody
} from "@vercel/blob/client";

export default async function handler(request: Request) {

    if (request.method !== "POST") {

        return new Response(
            JSON.stringify({
                error: "Método no permitido"
            }),
            {
                status: 405,
                headers: {
                    "Content-Type": "application/json"
                }
            }
        );
    }

    const body = await request.json() as HandleUploadBody;

    try {

        const jsonResponse = await handleUpload({

            body,

            request,

            onBeforeGenerateToken: async () => {

                return {

                    allowedContentTypes: [
                        "image/jpeg",
                        "image/png",
                        "image/webp"
                    ],

                    maximumSizeInBytes: 10 * 1024 * 1024,

                    addRandomSuffix: true

                };

            },

            onUploadCompleted: async ({ blob }) => {

                console.log(
                    "Foto subida correctamente:",
                    blob.url
                );

            }

        });

        return Response.json(jsonResponse);

    } catch (error) {

        console.error("Error en Blob:", error);

        return Response.json(
            {
                error: "Error al subir la imagen"
            },
            {
                status: 400
            }
        );
    }
}