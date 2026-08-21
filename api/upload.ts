import { handleUpload } from "@vercel/blob/client";

export default {
    async fetch(request: Request) {

        console.log("🔥 /api/upload RECIBIDO");

        try {

            const body = await request.json();

            console.log("Body recibido");

            const response = await handleUpload({
                body,
                request,

                onBeforeGenerateToken: async () => {

                    console.log("Generando token");

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
                        "✅ Foto subida:",
                        blob.url
                    );

                }

            });

            console.log("Respuesta enviada");

            return response;

        } catch (error) {

            console.error("ERROR:", error);

            return new Response(
                JSON.stringify({
                    error:
                        error instanceof Error
                            ? error.message
                            : String(error)
                }),
                {
                    status: 500,
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
            );

        }

    }
};