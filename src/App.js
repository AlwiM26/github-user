import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './Components/Header/Header';
import SearchBar from './Components/SearchBar/SearchBar';
import Content from './Components/Content/Content';
import './App.css';

const App = () => {
  const [userName, setUserName] = useState("alwim26");
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`https://api.github.com/users/${userName}`);
        setData(res.data);
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    }

    fetchData();
  }, [userName]);

  return (
    <div className="App">
      <Header />
      <SearchBar setUserName={setUserName} />
      <Content userData={data} loading={loading} />
    </div>
  );
}

export default App;
