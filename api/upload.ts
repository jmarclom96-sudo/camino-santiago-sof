import {
    handleUpload,
    type HandleUploadBody
} from "@vercel/blob/client";

export default async function handler(
    request: Request
) {

    try {

        const body =
            await request.json() as HandleUploadBody;

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

                    maximumSizeInBytes:
                        10 * 1024 * 1024,

                    addRandomSuffix: true

                };

            },

            onUploadCompleted: async ({ blob }) => {

                console.log(
                    "Foto subida:",
                    blob.url
                );

            }

        });

        return new Response(
            JSON.stringify(jsonResponse),
            {
                status: 200,
                headers: {
                    "Content-Type": "application/json"
                }
            }
        );

    } catch (error) {

        console.error(
            "ERROR VERCEL BLOB:",
            error
        );

        return new Response(
            JSON.stringify({
                error:
                    error instanceof Error
                        ? error.message
                        : "Error desconocido"
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