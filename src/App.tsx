import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Itinerario from "./pages/Itinerario";
import Reflexiones from "./pages/Reflexiones";
import Retos from "./pages/Retos";
import Historia from "./pages/Historia";
import EtapaDetalle from "./pages/EtapaDetalle";
import ReflexionDetalle from "./pages/ReflexionDetalle";
import Camino from "./pages/Camino";

export default function App() {
    return (
        <>
            <Navbar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/itinerario" element={<Itinerario />} />
                <Route path="/reflexiones" element={<Reflexiones />} />
                <Route path="/retos" element={<Retos />} />
                <Route path="/historia" element={<Historia />} />
                <Route path="/etapas/:id" element={<EtapaDetalle />} />
                <Route path="/reflexiones/:etapaId" element={<ReflexionDetalle />}/>
                <Route path="/camino" element={<Camino />}/>
            </Routes>
        </>
    );
}