import Contact from "./page/Contact";
import Details from "./page/Details";
import Home from "./page/Home";
import Explore from "./page/Explore";
import NavigationBar from "./NavigationBar";
import './App.css'

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="App">
        <NavigationBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/explore/" element={<Explore />} />
          <Route path="/details/:id" element={<Details />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};
export default App;
