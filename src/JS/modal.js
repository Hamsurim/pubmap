import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import '../CSS/line.css'; 

function CustomModal({ showModal, handleModal, selectedLocationData, handleModalButtonClick, handleFavorite, favoritedLocations }) {
  return (
    <Modal show={showModal} onHide={handleModal}>
      <Modal.Body className="modal-content">
        <div className="text-center" style={{ position: 'relative' }}>
          <img src="pub_img/menu.png" className="img-fluid" alt="메뉴판이미지" style={{ width: '100%', height: 'auto' }} />
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '80%' }}>
            <h5>한줄평🖋️</h5>
            <p style={{ maxWidth: "100%", whiteSpace: 'pre-wrap' }}>
              {selectedLocationData && selectedLocationData.text}
            </p>
          </div>
        </div>

        <hr />

        <div className="d-flex justify-content-center align-items-center">
          <Button variant="btn btn-outline-secondary mx-2" onClick={handleFavorite}>
            {favoritedLocations[selectedLocationData && selectedLocationData.title] ? "찜 취소" : "찜 하기"}
          </Button>
          <Button variant="btn btn-outline-secondary mx-2" onClick={handleModalButtonClick}>
            술집 위치 보기
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default CustomModal;
