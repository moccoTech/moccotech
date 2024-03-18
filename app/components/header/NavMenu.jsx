import { useModal } from '@/app/context/ModalContext';
import Button from '../Button';
import StyledNavLink from './StyledNavLink';

function NavMenu({ isMenuActive, setIsMenuActive }) {
  const { handleModal } = useModal();
  return (
    <div
      className={`menu-sidebar h-dvh w-4/5 sm:w-1/4 fixed ${
        isMenuActive ? '-right-0 ' : '-right-full sm:-right-1/4 '
      }top-0 px-6 py-6 sm:py-8 backdrop-blur duration-300 bg-slate-50 z-20 flex flex-col justify-between`}
    >
      <ul className="flex flex-col gap-1">
        <li>
          <StyledNavLink href="/" setIsMenuActive={setIsMenuActive}>
            Home
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink href="/projects" setIsMenuActive={setIsMenuActive}>
            Projects
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink href="/services" setIsMenuActive={setIsMenuActive}>
            Services
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink href="/about" setIsMenuActive={setIsMenuActive}>
            About
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink href="/contact" setIsMenuActive={setIsMenuActive}>
            Contact
          </StyledNavLink>
        </li>
      </ul>
      <Button type="primary" onClick={handleModal}>
        Get in touch
      </Button>
    </div>
  );
}

export default NavMenu;
