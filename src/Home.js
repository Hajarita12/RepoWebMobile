import React from 'react';
import { Link } from 'react-router-dom';

const buttonStyle = {
  backgroundColor: '#FF69B4', // Couleur de fond rose
  color: '#FFFFFF', // Couleur du texte (blanc)
  border: 'none', // Supprime la bordure
};

function Home() {
  return (
    <div className="container mt-5">
      <h1 className="display-4">Gestion des filières et des rôles</h1>
      <div className="row">
        <div className="col-md-6">
          <div className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">Gestion Filières</h5>
              <p className="card-text">Cliquez sur le bouton ci-dessous pour gérer les filières.</p>
              <Link to="/filiere" style={buttonStyle}>Voir les filières</Link>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">Gestion Rôles</h5>
              <p className="card-text">Cliquez sur le bouton ci-dessous pour gérer les rôles.</p>
              <Link to="/role" style={buttonStyle}>Voir les rôles</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
