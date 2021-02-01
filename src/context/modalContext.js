import { createContext } from 'react';
import { useModal } from '../hooks/useModal';
import { Modal } from '../components/Modal';

let ModalContext;
const { Provider } = (ModalContext = createContext());

export { ModalContext, ModalProvider };

function ModalProvider({ children }) {
  let { modal, handleModal, modalContent } = useModal();
  return (
    <Provider value={{ modal, handleModal, modalContent }}>
      <Modal />
      {children}
    </Provider>
  );
}
