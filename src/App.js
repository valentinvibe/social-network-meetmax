import "./App.css";
import Header from "./components/header/header";
import Main from "./components/main/main";
import Navbar from "./components/navbar/navbar";

import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <Main />
      </div>
    </Router>
  );
}

export default App;
