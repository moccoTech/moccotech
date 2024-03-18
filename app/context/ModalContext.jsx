import { createContext, useContext, useState } from 'react';

const ModalContext = createContext();

function ModalProvider({ children }) {
  const [isActiveModal, setIsActiveModal] = useState(false);

  function handleModal() {
    setIsActiveModal((modal) => !modal);
  }

  return (
    <ModalContext.Provider
      value={{ isActiveModal, handleModal, setIsActiveModal }}
    >
      {children}
    </ModalContext.Provider>
  );
}

function useModal() {
  const context = useContext(ModalContext);
  if (context === undefined)
    throw new Error('Modal Context was used outside of AuthProvider');
  return context;
}

export { ModalProvider, useModal };
