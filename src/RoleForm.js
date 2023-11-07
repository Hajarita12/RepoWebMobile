import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const RoleForm = () => {
  const [formData, setFormData] = useState({ name: '', description: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8087/api/v1/roles', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200) {
        // Réinitialiser le formulaire après l'envoi des données
        setFormData({ name: '', description: '' });
        console.log('Rôle ajouté avec succès !');
      } else {
        console.error('Erreur lors de l\'ajout du rôle');
      }
    } catch (error) {
      console.error('Erreur lors de l\'ajout du rôle :', error);
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const formStyle = {
    backgroundColor: '#f2f2f2',
    padding: '20px',
    borderRadius: '4px',
  };

  const labelStyle = {
    fontWeight: 'bold',
  };

  const buttonStyle = {
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    padding: '8px 16px',
    borderRadius: '4px',
    cursor: 'pointer',
  };

  return (
    <Container>
      <Row className="justify-content-md-center mt-5">
        <Col md={6}>
          <div className="text-center mb-4">
            <h2>Ajouter un rôle</h2>
          </div>
          <Form style={formStyle} onSubmit={handleSubmit}>
            <Form.Group controlId="name">
              <Form.Label style={labelStyle}>Nom</Form.Label>
              <Form.Control
                type="text"
                placeholder="Entrez le nom du rôle"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="description">
              <Form.Label style={labelStyle}>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Entrez la description du rôle"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
              />
            </Form.Group>
            <br />
            <Button variant="primary" style={buttonStyle} type="submit">
              Ajouter le rôle
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default RoleForm;
