import React from 'react';
import Header from './Components/Header/Header';
import SearchBar from './Components/SearchBar/SearchBar';
import Content from './Components/Content/Content';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <Content />
    </div>
  );
}

export default App;
