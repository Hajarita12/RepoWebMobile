import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importez le fichier CSS Bootstrap

const formStyle = {
  backgroundColor: '#f2f2f2',
  padding: '20px',
  borderRadius: '4px',
};

const buttonStyle = {
  backgroundColor: '#007BFF',
  color: '#fff',
  border: 'none',
  padding: '8px 16px',
  borderRadius: '4px',
  cursor: 'pointer',
};

const labelStyle = {
  fontWeight: 'bold',
};

const FiliereForm = () => {
  const [formData, setFormData] = useState({ code: '', libelle: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8087/api/v1/filieres', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200) {
        // Réinitialiser le formulaire après l'envoi des données
        setFormData({ code: '', libelle: '' });
        console.log('Filiere ajoutée avec succès !');
      } else {
        console.error('Erreur lors de l\'ajout de la filière');
      }
    } catch (error) {
      console.error('Erreur lors de l\'ajout de la filière :', error);
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Container>
      <Row className="justify-content-md-center mt-5">
        <Col md={6}>
          <div className="text-center mb-4">
            <h2>Ajouter une filière</h2>
          </div>
          <Form style={formStyle} onSubmit={handleSubmit}>
            <Form.Group controlId="code">
              <Form.Label style={labelStyle}>Code</Form.Label>
              <Form.Control
                type="text"
                placeholder="Entrez le code de la filière"
                name="code"
                value={formData.code}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="libelle">
              <Form.Label style={labelStyle}>Libellé</Form.Label>
              <Form.Control
                type="text"
                placeholder="Entrez le libellé de la filière"
                name="libelle"
                value={formData.libelle}
                onChange={handleInputChange}
              />
            </Form.Group>
            <br></br>
            <Button variant="primary" style={buttonStyle} type="submit">
              Ajouter la filière
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default FiliereForm;
