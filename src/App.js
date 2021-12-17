import React from "react";
import Greeting from "./components/Greeting";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './style.css';

class App extends React.Component {
  render () {
    return (
      <Router>
        <Routes>
          <Route exact path="/" element={<Greeting  greeting="My Friend"/>} />
        </Routes>
      </Router>
    );
  }
}

export default App;