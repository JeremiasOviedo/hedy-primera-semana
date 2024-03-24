import { BrowserRouter as Router,Route, Routes } from "react-router-dom";
import ContactPage from "./components/ContactPage";
import "./App.css";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import EventsPage from "./components/EventsPage";
import Footer from "./components/Footer";

function App() {
  return (
    <>
        <div className="flex flex-col w-full h-full bg-cover bg-center m-0 pr-0">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" Component={HomePage} />
            <Route path="/contact" Component={ContactPage} />
            <Route path="/events" Component={EventsPage} />
          </Routes>
          <Footer/>
        </Router>
        </div>
    </>
  );
}

export default App;
