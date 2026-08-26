import "./Home.css";
import { historia } from "../data/historia";

export default function Historia() {

    return (
        <div className="cards">

            <div className="card historia">

                <h1>Historia del Camino</h1>

                {historia.map((capitulo) => (

                    <section key={capitulo.id}>

                        <h2 className="historia-titulo">
                            {capitulo.id}. {capitulo.titulo}
                        </h2>


                        {capitulo.parrafos.map((parrafo, i) => (

                            <p key={i}>

                                {parrafo.contenido.map((run, j) => {

                                    let contenido = run.texto;

                                    if (run.negrita) {
                                        contenido = `<strong>${contenido}</strong>`;
                                    }

                                    if (run.subrayado) {
                                        contenido = `<u>${contenido}</u>`;
                                    }

                                    if (run.cursiva) {
                                        contenido = `<em>${contenido}</em>`;
                                    }

                                    return (
                                        <span
                                            key={j}
                                            dangerouslySetInnerHTML={{
                                                __html: contenido
                                            }}
                                        />
                                    );

                                })}

                            </p>

                        ))}

                    </section>

                ))}

            </div>

        </div>
    );
}