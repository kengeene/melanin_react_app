import './App.css';
import Sidebar from './components/Sidebar';
import Menubar from './components/Menubar';

function App() {
  return (
    <div style={styles.container}>
      <div style={styles.sidebar}>
          <Sidebar/>
        </div>
        <div style={styles.main}>
          <Menubar/>
          This is the main
        </div>
      </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

const styles = {
  container: {
    margin: '0 auto',
    width: '100%',
    height: '100%'
  },
  sidebar: {
    display: 'inline-block',
    width: '20%'
  },
  main: {
    display: 'inline-block'
  }
};

export default App;
