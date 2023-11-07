import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const tableStyle = {
  border: '1px solid #ccc',
  borderRadius: '4px',
  borderCollapse: 'collapse',
  width: '100%',
};

const thStyle = {
  backgroundColor: '#f2f2f2',
  borderBottom: '1px solid #ccc',
  padding: '8px',
  textAlign: 'left',
};

const tdStyle = {
  borderBottom: '1px solid #ccc',
  padding: '8px',
  textAlign: 'left',
};

const buttonStyle = {
  backgroundColor: '#007BFF',
  color: '#fff',
  border: 'none',
  padding: '8px 16px',
  borderRadius: '4px',
  cursor: 'pointer',
};

function FiliereList() {
  const [filieres, setFilieres] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8087/api/v1/filieres')
      .then(response => {
        setFilieres(response.data);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  // Fonction pour supprimer une filière
  const handleDelete = (id) => {
    axios.delete(`http://localhost:8087/api/v1/filieres/${id}`)
      .then(response => {
        // Mettez à jour la liste des filières après la suppression
        setFilieres(filieres.filter(filiere => filiere.id !== id));
      })
      .catch(error => {
        console.error('Error deleting filiere: ', error);
      });
  };

  return (
    <div className="list-container">
      <h2>Liste des filières :</h2>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Code</th>
            <th style={thStyle}>Libellé</th>
            <th style={thStyle}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filieres.map(filiere => (
            <tr key={filiere.id}>
              <td style={tdStyle}>{filiere.code}</td>
              <td style={tdStyle}>{filiere.libelle}</td>
              <td style={tdStyle}>
                <Link to={`/updateFiliere/${filiere.id}`} style={{ textDecoration: 'none' }}>
                  <button style={buttonStyle}>Modifier</button>
                </Link>
                <button onClick={() => handleDelete(filiere.id)} style={{ ...buttonStyle, backgroundColor: '#DC3545' }}>
                  Supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="button-container">
        <Link to="/createFiliere" style={{ textDecoration: 'none' }}>
          <button style={{ ...buttonStyle, backgroundColor: '#28A745' }}>Créer une filière</button>
        </Link>
      </div>
    </div>
  );
}

export default FiliereList;
