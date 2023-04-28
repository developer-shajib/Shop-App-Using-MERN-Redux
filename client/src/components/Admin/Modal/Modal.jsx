import { Button, Form, Modal } from 'react-bootstrap';

const AdminModal = ({ title, children, adminModal, setAdminModal, setInput, size = 'md' }) => {
  const handleHideModal = () => {
    setAdminModal(false);
    setInput({ name: '', image: null });
  };

  return (
    <>
      <Modal size={size} show={adminModal} onHide={handleHideModal}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h3 style={{ color: '#817e7e', fontSize: '25px', fontStyle: 'oblique' }}>{title}</h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
      </Modal>
    </>
  );
};

export default AdminModal;
