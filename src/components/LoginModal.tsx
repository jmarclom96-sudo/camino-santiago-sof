import { useState } from "react";

import { login } from "../services/perfilService";

type Props = {
    onLogin: (perfil: ReturnType<typeof login>) => void;
    onClose: () => void;
};

export default function LoginModal({ onLogin, onClose }: Props) {

    const [usuario, setUsuario] = useState("");
    const [password, setPassword] = useState("");

    function iniciarSesion() {

        const perfilLogueado = login(usuario, password);

        if (!perfilLogueado) {

            alert("Usuario o contraseña incorrectos.");
            return;

        }

        onLogin(perfilLogueado);

        setUsuario("");
        setPassword("");

    }

    return (

        <div className="modal-backdrop">

            <div className="modal">

                <h2>Identificarse</h2>

                <input
                    type="text"
                    placeholder="Usuario"
                    value={usuario}
                    onChange={e => setUsuario(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />

                <div className="modal-buttons">

                    <button
                        className="btn-primary"
                        onClick={iniciarSesion}
                    >
                        Entrar
                    </button>

                    <button
                        className="btn-secondary"
                        onClick={onClose}
                    >
                        Cancelar
                    </button>

                </div>

            </div>

        </div>

    );

}
