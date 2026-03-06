import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Articles from "./pages/articles";
import Products from "./pages/products";
import About from "./pages/about";
import ContactPage from "./pages/contactPage";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/products" element={<Products />} />
      </Routes>
      <Routes>
        <Route path="/articles" element={<Articles/>} />
      </Routes>
      <Routes>
        <Route path="/contact" element={<ContactPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
