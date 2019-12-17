import React from 'react';
import './App.css';
import Header from './components/header/Header';
import IndiaMap from './components/indiaMap/IndiaMap';
import Footer from './components/footer/Footer';

export default function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <div>
        <IndiaMap />
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
