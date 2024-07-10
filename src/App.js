import { BrowserRouter as Router, Routes as Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Location from "./components/Location";
import Header from "./components/Header";
import Footer from "./components/Footer";
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" element={<Home/>}></Route>
          <Route exact path="/menu" element={<Menu/>}></Route>
          <Route exact path="/location" element={<Location/>}></Route>
        </Switch>
        <Footer />
      </Router>

    </div>
  );
}

export default App;
