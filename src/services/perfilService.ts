import type { Perfil } from "../data/perfiles";

const STORAGE_KEY = "perfilActual";

async function obtenerPerfiles(): Promise<Perfil[]> {

    const response = await fetch("/api/usuarios");

    if (!response.ok) {
        throw new Error("Error al obtener los usuarios");
    }

    const data = await response.json();

    return data.usuarios;
}


export async function login(
    usuario: string,
    password: string
): Promise<Perfil | null> {

    const perfiles = await obtenerPerfiles();

    const perfil = perfiles.find(
        p =>
            p.usuario === usuario &&
            p.password === password
    );

    if (!perfil) {
        return null;
    }

    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(perfil)
    );

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


export async function iniciarSesion(
    usuario: string,
    password: string
): Promise<Perfil | null> {

    const perfil = await login(usuario, password);

    if (!perfil) {
        return null;
    }

    return perfil;

}