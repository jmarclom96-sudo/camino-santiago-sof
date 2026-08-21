import avatar1 from "../assets/perfiles/avatars.jpeg";
import avatar2 from "../assets/perfiles/avatar1.jpg";
import avatar3 from "../assets/perfiles/avatar1.jpg";
import avatar4 from "../assets/perfiles/avatar1.jpg";
import avatar5 from "../assets/perfiles/avatar1.jpg";

export type Perfil = {
    id: number;
    nombre: string;
    usuario: string;
    password: string;
    foto: string;
    background: string;
    color: string;
};

export const perfiles: Perfil[] = [
    {
        id: 1,
        nombre: "Sofía",
        usuario: "sofia",
        password: "1234",
        foto: avatar1,
        background: "#FDF4F8",
        color: "#C779A3"
    },
    {
        id: 2,
        nombre: "Teresa",
        usuario: "teresa",
        password: "1234",
        foto: avatar2,
        background: "#F4F8FD",
        color: "#6F9BC7"
    },
    {
        id: 3,
        nombre: "Teo",
        usuario: "teo",
        password: "1234",
        foto: avatar3,
        background: "#F5FBF4",
        color: "#7BA86F"
    },
    {
        id: 4,
        nombre: "Jaime",
        usuario: "jaime",
        password: "1234",
        foto: avatar4,
        background: "#FFF9F2",
        color: "#C89A58"
    },
    {
        id: 5,
        nombre: "Reyes",
        usuario: "reyes",
        password: "1234",
        foto: avatar5,
        background: "#F7F4FC",
        color: "#8C7AB8"
    }
];