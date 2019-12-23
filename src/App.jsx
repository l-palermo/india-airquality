import React from 'react';
import './App.css';
import Header from './components/header/Header';
import IndiaMap from './components/indiaMap/IndiaMap';
import Footer from './components/footer/Footer';
import dataEN from './data/english.json';
import loadGoogle from './modules/loadGoogle/loadGoogle';
import loadMap from './modules/loadMap/loadMap';
import findPlace from './modules/findPlace/findPlace';

export default function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <div>
        <IndiaMap
          dataEN={dataEN}
          loadGoogle={loadGoogle}
          loadMap={loadMap}
          findPlace={findPlace}
        />
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
