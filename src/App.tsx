import * as React from 'react';
import { Modal, Button } from 'antd';
import useOnClickOutside from './components/useOnClickOutside';
import { useRef, useState } from 'react';

const YourComponent = () => {
  const [visible, setVisible] = useState(false);
  const modalRef = useRef(null);

  const handleClickOutside = () => {
    setVisible(false);
  };

  useOnClickOutside(modalRef, handleClickOutside);

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setVisible(false);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <div>
      <Button onClick={showModal}>Открыть модальное окно</Button>
      <div ref={modalRef}>
      <Modal 
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <h1>Modal Title</h1>
        <p>Modal Content</p>
      </Modal>
       </div>
    </div>
  );
};

export default YourComponent;