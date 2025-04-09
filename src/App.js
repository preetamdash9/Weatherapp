import React from 'react';
import SearchBar from './components/SearchBar';
import './styles.css';


function App() {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-indigo-500 min-h-screen text-white">
      <header className="text-center py-8">
        <h1 className="text-4xl font-bold">ForecastHub</h1>
        <p className="text-lg mt-2">Get live weather updates for any city</p>
      </header>
      <SearchBar />
    </div>
  );
}

export default App;
