import Modal from 'react-modal';
import { useState } from 'react';

const ModalComponent = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setModalIsOpen(true)}>Open Modal</button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Example Modal"
        style={{
          overlay: { backgroundColor: 'rgba(0, 0, 0, 0.5)' },
          content: {
            width: '300px',
            margin: 'auto',
            padding: '20px',
            borderRadius: '10px',
          },
        }}
      >
        <h2>Modal Title</h2>
        <p>This is a modal window.</p>
        {/* <button onClick={() => setModalIsOpen(false)}>Close</button> */}
      </Modal>
    </div>
  );
};

export default ModalComponent;
