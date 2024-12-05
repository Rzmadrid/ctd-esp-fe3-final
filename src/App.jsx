import { Route, Routes } from "react-router-dom";
//import Footer from "./Components/Footer";
//import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";
import Layout from "./Layouts/Layout";

function App() {
  return (
      <div className="App">

          <Routes>
            <Route path="/" element={<Layout/>}>
              <Route path="/" element={<Home />} />
              <Route path="/contacto" element={<Contact/>} />
              <Route path="/favs" element={<Favs />} />
              <Route path="/dentista/:id" element={<Detail />} />
              <Route path="*" element={<h1>Error 404 - Page not found</h1>} />
            </Route>
          </Routes>
      </div>
  );
}

export default App;
