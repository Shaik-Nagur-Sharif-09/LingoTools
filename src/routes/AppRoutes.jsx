import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Translator from "../pages/Translator";
import Generator from "../pages/Generator";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PasswordChecker from "../pages/PasswordChecker";
import Notes from "../pages/Notes";
import NotFound from "../pages/NotFound";
import QRGenerator from "../pages/QRGenerator";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/translator" element={<Translator />} />
      <Route path="/generator" element={<Generator />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/password-checker"
        element={<PasswordChecker />}
      />
      <Route path="/notes" element={<Notes />} />
      <Route path="*" element={<NotFound />} />
      <Route
  path="/qr-generator"
  element={<QRGenerator />}
/>
    </Routes>
  );
}

export default AppRoutes;