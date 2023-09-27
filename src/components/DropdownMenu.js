// react imports
import React, { useState } from "react";
import { useHistory } from "react-router";

// react bootstrap imports
import Dropdown from "react-bootstrap/Dropdown";
import { Button, Modal } from "react-bootstrap";

// style imports
import styles from "../styles/DropdownMenu.module.css";

const ThreeDots = React.forwardRef(({ onClick }, ref) => (
  <i
    className="fas fa-ellipsis-v"
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  />
));
ThreeDots.displayName = "ThreeDots";

/*
Dropdown menu with edit and delete buttons
Displays a modal to the user when when deleting a comment or event
for user confirmation
*/
export const DropdownMenu = ({ handleEdit, handleDelete, item }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Dropdown className="ml-auto" drop="left">
        <Dropdown.Toggle as={ThreeDots} />

        <Dropdown.Menu
          className="text-center"
          popperConfig={{ strategy: "fixed" }}
        >
          <Dropdown.Item
            className={styles.DropdownItem}
            onClick={handleEdit}
            aria-label="edit"
          >
            <i className="fas fa-edit" />
          </Dropdown.Item>
          <Dropdown.Item
            className={styles.DropdownItem}
            onClick={handleShow}
            aria-label="delete"
          >
            <i className="fas fa-trash-alt" />
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>This action is permanent.</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this {item}?</Modal.Body>
        <Modal.Footer>
          <Button className={styles.Cancel} onClick={handleClose}>
            Cancel
          </Button>
          <Button className={styles.Delete} onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

//Dropdown menu with edit profile buttons
export function ProfileEditDropdown({ id }) {
  const history = useHistory();
  return (
    <Dropdown
      className={`ml-auto px-3 ${styles.Absolute} ${styles.DropdownItem}`}
      drop="left"
    >
      <Dropdown.Toggle as={ThreeDots} />
      <Dropdown.Menu>
        <Dropdown.Item
          className={`${styles.DropdownItem2}`}
          onClick={() => history.push(`/profiles/${id}/edit`)}
          aria-label="edit-profile"
        >
          <i className="fas fa-edit" /> edit profile
        </Dropdown.Item>
        <Dropdown.Item
          className={`${styles.DropdownItem2}`}
          onClick={() => history.push(`/profiles/${id}/edit/username`)}
          aria-label="edit-username"
        >
          <i className="far fa-id-card" />
          change username
        </Dropdown.Item>
        <Dropdown.Item
          className={`${styles.DropdownItem2}`}
          onClick={() => history.push(`/profiles/${id}/edit/password`)}
          aria-label="edit-password"
        >
          <i className="fas fa-key" />
          change password
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
