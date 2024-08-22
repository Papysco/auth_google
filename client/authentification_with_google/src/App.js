import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Connexion from './composant/Connexion.jsx';
import Accueil from './composant/Acceuil.jsx';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Connexion />} />
          <Route path='/accueil' element={<Accueil />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
