import { useModal } from '@/app/context/ModalContext';
import Button from '../Button';
import ModalPopup from '../ModalPopup';
import { AnimatePresence } from 'framer-motion';

function CallToAction() {
  const { isActiveModal, handleModal } = useModal();

  return (
    <>
      <AnimatePresence>{isActiveModal && <ModalPopup />}</AnimatePresence>
      <div
        id="callToAction"
        className="bg-indigo-500 py-12 flex justify-center items-center gap-10 flex-col"
      >
        <h2 className="font-heading text-4xl sm:text-6xl font-bold text-center text-indigo-50">
          Still got some
          <br /> questions?
        </h2>
        <Button type="secondary" onClick={handleModal}>
          Get in touch
        </Button>
      </div>
    </>
  );
}

export default CallToAction;
