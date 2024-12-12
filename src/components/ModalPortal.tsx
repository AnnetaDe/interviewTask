import React, { ReactNode, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useAppDispatch } from '../redux/reduxHooks';
import { closeModal } from '../redux/modalSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

interface ModalPortalProps {
  title: string;
  children: ReactNode;
}

const ModalPortal: React.FC<ModalPortalProps> = ({ title, children }) => {
  const modalRoot = document.getElementById('modal-root');
  const dispatch = useAppDispatch();

  if (!modalRoot) {
    console.error('No modal-root element found.');
    return null;
  }
  useEffect(() => {
    const addCloseEvent = (e: KeyboardEvent) => {
      e.key === 'Escape' && dispatch(closeModal());
    };
    document.addEventListener('keydown', addCloseEvent);

    return () => {
      document.removeEventListener('keydown', addCloseEvent);
    };
  }, [close]);

  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 bg-gray-500 bg-opacity-5 flex justify-center items-center z-50"
      onClick={() => dispatch(closeModal())}
    >
      <div
        className="bg-white rounded-lg shadow-lg p-6  relative"
        onClick={e => e.stopPropagation()}
      >
        <button>
          <FontAwesomeIcon
            icon={faTimes}
            className="text-gray-500 text-2xl cursor-pointer  absolute top-3 right-3 hover:text-gray-700  transition-all duration-300 ease-in-out "
            onClick={() => dispatch(closeModal())}
            aria-label="Close Modal"
          />
        </button>
        <h2 className="text-xl font-semibold mb-4">{title}</h2>
        <div className="mb-4">{children}</div>
      </div>
    </div>,
    modalRoot
  );
};

export default ModalPortal;
