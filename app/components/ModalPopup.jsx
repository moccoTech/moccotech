import { HiXMark } from 'react-icons/hi2';
import { motion } from 'framer-motion';
import { useModal } from '../context/ModalContext';
import ContactForm from './contact/ContactForm';

function ModalPopup() {
  const { handleModal } = useModal();

  return (
    <motion.div
      key="modal"
      initial={{
        backgroundColor: '#f9fafb',
        opacity: 0,
      }}
      animate={{
        backgroundColor: '#f9fafb',
        opacity: 1,
      }}
      exit={{
        backgroundColor: '#f9fafb',
        opacity: 0,
      }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className="w-full h-dvh fixed top-0 right-0 z-30 flex items-center justify-center flex-col"
    >
      <motion.button
        animate={{ rotate: '180deg', scale: 1.25 }}
        transition={{ delay: 0.05, duration: 0.4, ease: 'easeInOut' }}
        whileHover={{ rotate: '-90deg', scale: 1 }}
        className="fixed top-5 right-5 text-3xl"
        onClick={handleModal}
      >
        <HiXMark />
      </motion.button>
      <motion.div
        className="flex flex-col gap-5 items-start"
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{ duration: 0.3, ease: 'easeInOut', delay: 0.2 }}
      >
        <p className="font-heading text-2xl font-medium text-gray-700">
          Just fill the form to contact us
        </p>
        <ContactForm />
      </motion.div>
    </motion.div>
  );
}

export default ModalPopup;
