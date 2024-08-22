import React, { useEffect, useState } from 'react';
import axios from "axios";
import './accueil.css';

function Accueil() {

  const [user, setUser] = useState({});

  useEffect(() => {
    axios.get("http://localhost:3000/profile", { withCredentials: true })
      .then((response) => {
        if (response.data && response.data.user) {
          setUser(response.data.user); 
        }        
      })
      .catch((error) => {
        console.error("Erreur de recuperation de donnees!", error);
      });
  }, []);  
  
  return (
    <div className="accueil">
      <header className="App-header">
        <nav className="navbar">
          <div className="logo">
            <img src={user.photos ? user.photos[0].value : "https://via.placeholder.com/50"} alt="Logo" />
          </div>
          <ul className="nav-links">
            <li><a href="#/">Accueil</a></li>
            <li><a href="#/">Page 1</a></li>
            <li><a href="#/">Page 2</a></li>
            <li><button className="profile-button">Profil</button></li>
          </ul>
        </nav>
      </header>

      <main>
        <div className="user-info">
          <h2>Informations Utilisateur</h2>
          <form>
            <div className="input-group">
              <label>Prénom & Nom:</label>
              <input type="text" placeholder="Nom" value={user.displayName || ''} readOnly />
            </div>
            <div className="input-group">
              <label>Email:</label>
              <input type="email" placeholder="Email" 
                value={user.emails && user.emails[0] ? user.emails[0].value : ''} readOnly 
              />
            </div>
            <div className="input-group">
              <label>Identifiant:</label>
              <input type="text" placeholder="Id" value={user.id || ''} readOnly />
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}

export default Accueil;
