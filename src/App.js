// import logo from "./logo.svg";
// import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import NaveBar from "./navbar";
import Home from "./home";
import NewBook from "./NewBook";
import Book from "./Book";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <NaveBar />
      <Routes className="container">
        <Route path="/home.js" element={<Home />} />
        <Route path="/NewBook.js" element={<NewBook />} />
        <Route path="/Book.js" element={<Book />} />
      </Routes>
    </>
  );
}

export default App;
