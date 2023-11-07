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

function RoleList() {
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8087/api/v1/roles')
      .then(response => {
        setRoles(response.data);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  // Fonction pour supprimer un rôle
  const handleDelete = (id) => {
    axios.delete(`http://localhost:8087/api/v1/roles/${id}`)
      .then(response => {
        // Mettez à jour la liste des rôles après la suppression
        setRoles(roles.filter(role => role.id !== id));
      })
      .catch(error => {
        console.error('Error deleting role: ', error);
      });
  };

  return (
    <div className="list-container">
      <h2 style={{ color: 'blue' }}>Liste des rôles :</h2>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Nom</th>
            <th style={thStyle}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {roles.map(role => (
            <tr key={role.id}>
              <td style={tdStyle}>{role.name}</td>
              <td style={tdStyle}>
                <Link to={`/updateRole/${role.id}`} style={{ textDecoration: 'none' }}>
                  <button style={buttonStyle}>Modifier</button>
                </Link>
                <button onClick={() => handleDelete(role.id)} style={{ ...buttonStyle, backgroundColor: '#DC3545' }}>
                  Supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="button-container">
        <Link to="/createRole" style={{ textDecoration: 'none' }}>
          <button style={{ ...buttonStyle, backgroundColor: '#28A745' }}>Créer un rôle</button>
        </Link>
      </div>
    </div>
  );
}

export default RoleList;
