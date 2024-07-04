import { BrowserRouter as Router, Routes as Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" element={<Home />}></Route>

        </Switch>
      </Router>

    </div>
  );
}

export default App;
