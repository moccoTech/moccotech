'use client';

import { useModal } from '@/app/context/ModalContext';
import Button from '../Button';
import InfiniteScrollBar from './InfiniteScrollBar';
import HomeBannerLink from './HomeBannerLink';

function HomeBanner({ technologies, projects }) {
  const { handleModal } = useModal();

  return (
    <div className="py-20 relative overflow-hidden sm:h-[500px]">
      <div className="absolute top-0 sm:-rotate-45 sm:translate-x-[-40%] sm:translate-y-0 md:translate-x-[-40%]">
        <InfiniteScrollBar items={technologies} />
      </div>
      <div className="absolute bottom-0 left-0">
        <InfiniteScrollBar items={projects} />
      </div>
      <div className="px-4 sm:absolute sm:top-1/2 sm:left-3/4 sm:-translate-x-1/2 sm:-translate-y-3/4 sm:min-w-[250px] mb-6 sm:mb-0">
        <ul>
          <li>
            <HomeBannerLink href="/projects">Projects</HomeBannerLink>
          </li>
          <li>
            <HomeBannerLink onClick={handleModal}>Consulting</HomeBannerLink>
          </li>
          <li>
            <HomeBannerLink href="#feedback">Feedback</HomeBannerLink>
          </li>
          <li>
            <HomeBannerLink href="/services">Services</HomeBannerLink>
          </li>
          <li>
            <HomeBannerLink href="/about">About us</HomeBannerLink>
          </li>
        </ul>
      </div>
      <div className="px-4 sm:absolute sm:bottom-[35%] sm:left-[20%] sm:-translate-y-1/2">
        <Button type="primary" onClick={handleModal}>
          Get in touch
        </Button>
      </div>
    </div>
  );
}

export default HomeBanner;
