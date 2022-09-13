import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './pages/header/header';
import Home from './pages/homepage/home';
import Quote from './pages/quote/quote';
import Calculator from './components/calculator/calculate';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="App">

        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/calculator" element={<Calculator />} />
          <Route exact path="/quote" element={<Quote />} />
        </Routes>
      </div>
    );
  }
}

export default App;
