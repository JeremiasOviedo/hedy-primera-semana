import { BrowserRouter as Router,Route, Routes } from "react-router-dom";
import Contact from "./components/Contact";
import "./App.css";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import EventsPage from "./components/EventsPage";

function App() {
  return (
    <>
        <div className="flex flex-col w-full h-full bg-cover bg-center m-0 pr-0">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" Component={HomePage} />
            <Route path="/contact" Component={Contact} />
            <Route path="/events" Component={EventsPage} />
          </Routes>
        </Router>
        </div>
    </>
  );
}

export default App;
