
import React from 'react';
import './index.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Project from './components/Project';

function App() {
  return (
    <div>
      <Header></Header>
      <main>
        <Project />
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
