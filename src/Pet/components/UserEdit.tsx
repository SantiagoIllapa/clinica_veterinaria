import React, { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

interface EditProfileModalProps {
  showModal: boolean;
  handleCloseModal: () => void;
  handleFormChange: (field: string, value: string) => void;
  handleFormSubmit: () => void;
}

const EditProfileModal: React.FC<EditProfileModalProps> = ({
  showModal,
  handleCloseModal,
  handleFormChange,
  handleFormSubmit,
}) => {
  const [formValues, setFormValues] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    address: '',
    speciallity: '',
    // ...otros campos
  });

  const [errors, setErrors] = useState<Record<string, boolean>>({});

  const validateFields = () => {
    const newErrors: Record<string, boolean> = {};

    if (!formValues.firstName) {
      newErrors.firstName = true;
    }

    if (!formValues.lastName) {
      newErrors.lastName = true;
    }

    if (!/^[0-9]{10}$/.test(formValues.phone)) {
      newErrors.phone = true;
    }

    if (!formValues.address) {
      newErrors.address = true;
    }

    if (!formValues.speciallity) {
      newErrors.speciallity = true;
    }

    // Agrega más validaciones según tus necesidades

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return (
    <Modal show={showModal} onHide={handleCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>Editar perfil</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={(e) => e.preventDefault()}>
          <div className="row">
            <h5> Perfil</h5>
            <div className="col-md-6">
              <Form.Group controlId="editFirstName">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="text"
                  name="firstName"
                  value={formValues.firstName}
                  onChange={(e) => handleFormChange("firstName", e.target.value)}
                  isInvalid={errors.firstName}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Este campo es obligatorio.
                </Form.Control.Feedback>
              </Form.Group>
            </div>
            <div className="col-md-6">
              <Form.Group controlId="editLastName">
                <Form.Label>Apellido</Form.Label>
                <Form.Control
                  type="text"
                  name="lastName"
                  value={formValues.lastName}
                  onChange={(e) => handleFormChange("lastName", e.target.value)}
                  isInvalid={errors.lastName}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Este campo es obligatorio.
                </Form.Control.Feedback>
              </Form.Group>
            </div>
            <h5> Contacto</h5>
            <div className="col-md-6">
              <Form.Group controlId="editPhone">
                <Form.Label>Telefono</Form.Label>
                <Form.Control
                  type="text"
                  name="phone"
                  value={formValues.phone}
                  onChange={(e) => handleFormChange("phone", e.target.value)}
                  isInvalid={errors.phone}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Ingresa un número de teléfono válido.
                </Form.Control.Feedback>
              </Form.Group>
            </div>
            <div className="col-md-6">
              <Form.Group controlId="editAddress">
                <Form.Label>Dirección</Form.Label>
                <Form.Control
                  type="text"
                  name="address"
                  value={formValues.address}
                  onChange={(e) => handleFormChange("address", e.target.value)}
                  isInvalid={errors.address}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Este campo es obligatorio.
                </Form.Control.Feedback>
              </Form.Group>
            </div>
          </div>
          <h5> General</h5>
          <Form.Group controlId="editSpeciallity">
            <Form.Label>Especialidad</Form.Label>
            <Form.Control
              type="text"
              name="speciallity"
              value={formValues.speciallity}
              onChange={(e) => handleFormChange("speciallity", e.target.value)}
              isInvalid={errors.speciallity}
              required
            />
            <Form.Control.Feedback type="invalid">
              Este campo es obligatorio.
            </Form.Control.Feedback>
          </Form.Group>
          {/* Agrega más campos aquí */}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseModal}>
          Cancelar
        </Button>
        <Button variant="primary" onClick={() => {
          if (validateFields()) {
            handleFormSubmit();
          }
        }}>
          Guardar cambios
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditProfileModal;
