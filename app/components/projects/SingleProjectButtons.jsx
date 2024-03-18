'use client';

import { useModal } from '@/app/context/ModalContext';
import Button from '../Button';

function SingleProjectButtons({ singleProject }) {
  const { handleModal } = useModal();

  return (
    <div className="flex gap-2 items-center">
      <Button type="primary" onClick={handleModal}>
        Get in touch
      </Button>
      <Button type="inverse" external={singleProject.link}>
        View project
      </Button>
    </div>
  );
}

export default SingleProjectButtons;
