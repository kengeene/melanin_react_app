import './App.css';
import Sidebar from './components/Sidebar';
import { faSearch } from '@fortawesome/fontawesome-free-solid';
import fontawesome from '@fortawesome/fontawesome'
import Body from './components/Body';

fontawesome.library.add(faSearch);

function App() {
  return (
    <div style={styles.container}>
      <div style={styles.sidebar}>
          <Sidebar/>
        </div>
        <Body />
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
