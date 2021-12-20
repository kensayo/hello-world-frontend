import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Greeting from './components/Greeting';
import './style.css';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Greeting greeting="My Friend" />} />
      </Routes>
    </Router>
  );
}
