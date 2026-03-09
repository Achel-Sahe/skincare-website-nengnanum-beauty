import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Articles from "./pages/articles";
import Products from "./pages/products";
import About from "./pages/about";
import ContactPage from "./pages/contactPage";

function App() {
  return (
    <Router basename="/skincare-website-nengnanum-beauty/">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;