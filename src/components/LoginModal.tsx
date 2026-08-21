import { useState } from "react";

import { login } from "../services/perfilService";

import type { Perfil } from "../data/perfiles";

type Props = {
    onLogin: (perfil: Perfil) => void;
    onClose: () => void;
};

export default function LoginModal({ onLogin, onClose }: Props) {

    const [usuario, setUsuario] = useState("");
    const [password, setPassword] = useState("");

    async function iniciarSesion() {

        const perfilLogueado = await login(
            usuario,
            password
        );

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