import Dropdown from 'react-bootstrap/Dropdown';
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEdit, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { AuthContext } from "../../auth/context/AuthContext";
import EditProfileModal from "../components/UserEdit";
import { useContext } from "react";

export const UserDropdown = () => {
  const { logout } = useContext(AuthContext);
  const [showModal, setShowModal] = useState(false);
   
  const handleEditProfileClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  const handleSignOut = () => {
    logout();
  };
  function handleFormChange(): void {
    console.log("Edit")
  }

  function handleFormSubmit(): void {
    console.log("Guardar ");
    setShowModal(false);
    
  }

  return (
    <div>
      <Dropdown>
      <Dropdown.Toggle variant="light" id="user-dropdown">
        <label style={{ paddingInline: '10px' }}>Usuario  </label>
        <FontAwesomeIcon icon={faUser} style={{ marginRight: '8px' }} />
      </Dropdown.Toggle>
      <Dropdown.Menu align="end">
        <Dropdown.Item onClick={handleEditProfileClick}>
          <FontAwesomeIcon icon={faEdit} className="mr-2" />
          Editar perfil
        </Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item onClick={handleSignOut}>
          <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" />
          Cerrar sesión
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    <EditProfileModal
    showModal={showModal}
    handleCloseModal={handleCloseModal}
    handleFormChange={handleFormChange}
    handleFormSubmit={handleFormSubmit}
  />
    </div>
    
  );
};
