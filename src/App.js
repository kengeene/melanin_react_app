import './App.css';
import { Routes, Route } from "react-router-dom";

import { faSearch } from '@fortawesome/fontawesome-free-solid';
import fontawesome from '@fortawesome/fontawesome'
import Funding from './components/Funding/index';

fontawesome.library.add(faSearch);

function App() {
  return (
    <Routes>
      <Route path="/" element={<Funding/>} />
    </Routes>
  );
}

export default App;
