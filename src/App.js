import './App.css';
import Sidebar from './components/Sidebar';
import { faSearch } from '@fortawesome/fontawesome-free-solid';
import fontawesome from '@fortawesome/fontawesome'
import Body from './components/Body';
import React, { useState, useEffect } from 'react';

fontawesome.library.add(faSearch);

const axios = require('axios');

function App() {
  const [user, setUser] = useState({});
  useEffect(() => {
    axios.get('http://localhost:3100/api/users/3').then(async response => {
    const user = await response.data;
    setUser(user);
  });
  });
  return (
    <div style={styles.container}>
      <div style={styles.sidebar}>
          <Sidebar/>
        </div>
        <Body user={user}/>
      </div>
  );
}

const styles = {
  container: {
    margin: '0 auto',
    width: '100%',
    height: '100%',
    fontFamily: 'futura',
    backgroundColor: '#f7f7f7'
  },
  sidebar: {
    display: 'inline-block',
    width: '15%'
  },
  main: {
    display: 'inline-block',
    width: '85%',
    height: '100%',
    float: 'right'
  }
};

export default App;
