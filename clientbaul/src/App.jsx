import { Routes, Route, HashRouter } from "react-router-dom";
import { AuthProvider } from './context/authContext';

import HomePage from "./pages/HomePage";
import RegisterPages from "./pages/RegisterPages";
import { LoginPages } from "./pages/LoginPages";
import BaulMundo from "./pages/BaulMundo";
import BaulMexico from "./pages/BaulMexico";
import Baul1 from "./pages/Baul1";
import Baul2 from "./pages/Baul2";
import Baul3 from "./pages/Baul3";
import Baul4 from "./pages/Baul4";
import Baul5 from "./pages/Baul5";
import Baul6 from "./pages/Baul6";
import Baul7 from "./pages/Baul7";
import Baul8 from "./pages/Baul8";

import ProtectedRoutes from "./ProtectedRoutes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";

function App() {
  return (
    <HashRouter>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPages />} />
          <Route path="/register" element={<RegisterPages />} />
          <Route path="/baulMundo" element={<BaulMundo />} />
          <Route path="/baulMexico" element={<BaulMexico />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/galeria" element={<Gallery />} />

          <Route element={<ProtectedRoutes />}>
            <Route path="/baulCH" element={<Baul1 />} />
            <Route path="/baulPreh" element={<Baul2 />} />
            <Route path="/baulMaya" element={<Baul3 />} />
            <Route path="/baulEdzna" element={<Baul4 />} />
            <Route path="/baulVan" element={<Baul5 />} />
            <Route path="/baulNapo" element={<Baul6 />} />
            <Route path="/baulVenus" element={<Baul7 />} />
            <Route path="/baulNaval" element={<Baul8 />} />
          </Route>
        </Routes>
        <Footer />
      </AuthProvider>
    </HashRouter>
  )
}

export default App