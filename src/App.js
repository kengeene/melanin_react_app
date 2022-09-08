import './App.css';
import { Routes, Route } from "react-router-dom";

import { faSearch } from '@fortawesome/fontawesome-free-solid';
import fontawesome from '@fortawesome/fontawesome'
import React, { useState, useEffect } from 'react';
import Funding from './components/Funding/index';

fontawesome.library.add(faSearch);

const axios = require('axios');

function App() {
  const [user, setUser] = useState({});
  useEffect(() => {
    axios.get('http://localhost:3100/api/users/3').then(async response => {
    const user = await response.data;
    console.log('user', user);
    setUser(user);
  });
  });
  return (
    <Routes>
      <Route path="/" element={<Funding/>} />
    </Routes>
  );
}

export default App;
