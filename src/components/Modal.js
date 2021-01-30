import React, { useContext } from 'react';
import { createPortal } from 'react-dom';
import { ModalContext } from '../context/modalContext';
import { IoCloseCircle } from 'react-icons/io5';
export function Modal() {
  let { modalContent, handleModal, modal } = useContext(ModalContext);

  if (modal) {
    return createPortal(
      <div
        className="fixed top-0 left-0 h-screen w-full flex items-center justify-center"
        style={{ background: 'rgba(0,0,0,0.8)' }}
      >
        <div className="bg-white relative p-5 shadow-lg rounded flex flex-col flex-grow m-6 items-start justify-items-stretch text-lg text-gray-800 max-w-7xl max-h-7xl">
          <button
            className="absolute top-0 right-0 -mt-2 -mr-2 bg-white font-bold self-end rounded-full mb-3"
            onClick={() => handleModal()}
          >
            <IoCloseCircle fill="#DC4456" />
          </button>
          {modalContent}
        </div>
      </div>,
      document.querySelector('#modal-root')
    );
  } else return null;
}
