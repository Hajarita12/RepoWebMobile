import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const FiliereUpdate = () => {
  const { id } = useParams();
  const [filiere, setFiliere] = useState({});
  const [updatedFiliere, setUpdatedFiliere] = useState({ code: '', libelle: '' });

  useEffect(() => {
    axios.get(`http://localhost:8080/api/v1/filieres/${id}`)
      .then(response => {
        setFiliere(response.data);
        setUpdatedFiliere({ code: response.data.code, libelle: response.data.libelle });
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, [id]);

  const handleUpdate = () => {
    axios.put(`http://localhost:8080/api/v1/filieres/${id}`, updatedFiliere)
      .then(response => {
        // Mise à jour réussie
        console.log('Filière mise à jour avec succès');
      })
      .catch(error => {
        console.error('Error updating filiere: ', error);
      });
  };

  const containerStyle = {
    backgroundColor: '#f0f0f0',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    margin: '5px 0',
    border: '1px solid #ccc',
    borderRadius: '4px',
  };

  const buttonStyle = {
    backgroundColor: '#007BFF',
    color: '#fff',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  };

  return (
    <div style={containerStyle}>
      <h2>Modifier la filière :</h2>
      <div>
        <input
          type="text"
          placeholder="Code"
          value={updatedFiliere.code}
          onChange={e => setUpdatedFiliere({ ...updatedFiliere, code: e.target.value })}
          style={inputStyle}
        />
        <input
          type="text"
          placeholder="Libelle"
          value={updatedFiliere.libelle}
          onChange={e => setUpdatedFiliere({ ...updatedFiliere, libelle: e.target.value })}
          style={inputStyle}
        />
        <button onClick={handleUpdate} style={buttonStyle}>Mettre à jour</button>
      </div>
    </div>
  );
}

export default FiliereUpdate;
