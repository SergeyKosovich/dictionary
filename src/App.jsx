import React from 'react';
import Navbar from './components/navbar/Navbar';
import AppRouter from './components/AppRouter';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Navbar />
      <AppRouter />
    </div>
  );
}

export default App;
