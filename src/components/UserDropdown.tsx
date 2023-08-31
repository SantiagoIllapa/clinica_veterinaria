import Dropdown from "react-bootstrap/Dropdown";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEdit,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import EditProfileModal from "./UserEdit";
import { useAuth } from "../hooks/useAuth";

export const UserDropdown = () => {
  const [showModal, setShowModal] = useState(false);

  const { logout } = useAuth();

  const handleEditProfileClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  const handleSignOut = () => {};
  function handleFormChange(): void {
    console.log("Edit");
  }

  function handleFormSubmit(): void {
    console.log("Guardar ");
    setShowModal(false);
  }

  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle variant="light" id="user-dropdown">
          <label style={{ paddingInline: "10px" }}>Usuario </label>
          <FontAwesomeIcon icon={faUser} style={{ marginRight: "8px" }} />
        </Dropdown.Toggle>
        <Dropdown.Menu align="end">
          <Dropdown.Item onClick={handleEditProfileClick}>
            <FontAwesomeIcon icon={faEdit} className="mr-2" />
            Editar perfil
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item onClick={handleSignOut}>
            <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" />
            <span onClick={() => logout()}>Cerrar sesión</span>
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
