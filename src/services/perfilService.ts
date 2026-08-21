import { perfiles, type Perfil } from "../data/perfiles";

const STORAGE_KEY = "perfilActual";

export function login(usuario: string, password: string): Perfil | null {

    const perfil = perfiles.find(
        p =>
            p.usuario === usuario &&
            p.password === password
    );

    if (!perfil) {
        return null;
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(perfil));

    return perfil;
}

export function logout(): void {

    localStorage.removeItem(STORAGE_KEY);

}

export function getPerfilActual(): Perfil | null {

    const perfil = localStorage.getItem(STORAGE_KEY);

    if (!perfil) {
        return null;
    }

    return JSON.parse(perfil) as Perfil;
}

export function estaLogueado(): boolean {

    return getPerfilActual() !== null;

}

export function iniciarSesion(usuario: string, password: string): Perfil | null {

    const perfil = login(usuario, password);

    if (!perfil) {
        return null;
    }

    return perfil;
}