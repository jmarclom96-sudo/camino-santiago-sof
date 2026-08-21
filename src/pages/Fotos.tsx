import "./Home.css";

export default function Fotos() {
    return (
        <div className="cards">

            <div className="card">
                <h2>📷 Galería</h2>
                <p>Aquí aparecerán las fotos del viaje.</p>
            </div>

            <div className="card">
                <h2>⬆️ Subir una foto</h2>

                <input type="file" />

                <br /><br />

                <button>Subir foto</button>
            </div>

            <div className="card">
                <h2>🌄 Última subida</h2>
                <p>No hay fotos todavía.</p>
            </div>

        </div>
    );
}