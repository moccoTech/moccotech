'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useModal } from '../context/ModalContext';
import Button from './Button';
import { urlFor } from '../lib/sanity';
import MoccoPortableText from './MoccoPortableText';

function AboutPageContent({ content }) {
  const { handleModal } = useModal();

  return (
    <div className="py-4 sm:py-8 grid sm:grid-cols-2 gap-6 items-center order-last">
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-4">
          <MoccoPortableText value={content.blockEditor} />
        </div>
        <Button type="primary" onClick={handleModal}>
          Get in touch
        </Button>
      </motion.div>
      <motion.div
        className="h-72 sm:h-[400px]"
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Image
          src={urlFor(content.image).url()}
          alt="About us"
          priority
          width="0"
          height="0"
          sizes="100vw"
          className="w-full h-full object-cover rounded-lg"
        />
      </motion.div>
    </div>
  );
}

export default AboutPageContent;
