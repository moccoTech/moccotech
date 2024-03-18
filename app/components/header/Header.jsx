'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import Logo from '../Logo';
import NavIcon from './NavIcon';
import NavMenu from './NavMenu';

function Header() {
  const [isMenuActive, setIsMenuActive] = useState(false);

  return (
    <>
      <div className="w-full py-4 px-4 sm:px-12 flex justify-between sticky top-0 border-b items-center bg-gray-50 backdrop-blur-sm bg-opacity-90 z-10">
        <Logo />
        <NavIcon onClick={() => setIsMenuActive(true)} />
      </div>
      <NavMenu isMenuActive={isMenuActive} setIsMenuActive={setIsMenuActive} />
      <AnimatePresence>
        {isMenuActive && (
          <motion.div
            role="button"
            initial={{
              backgroundColor: 'rgba(55, 65, 81, 0)',
              backdropFilter: 'blur(0px)',
            }}
            animate={{
              backgroundColor: 'rgba(55, 65, 81, 0.4)',
              backdropFilter: 'blur(6px)',
            }}
            exit={{
              backgroundColor: 'rgba(55, 65, 81, 0)',
              backdropFilter: 'blur(0px)',
            }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            onClick={() => setIsMenuActive(false)}
            className="h-dvh w-dvw z-10 fixed top-0 left-0 bg-gray-700 bg-opacity-50 backdrop-blur"
          ></motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Header;
