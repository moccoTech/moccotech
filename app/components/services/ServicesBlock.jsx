'use client';

import { Fragment, useState } from 'react';
import { motion } from 'framer-motion';

import ServiceCard from './ServiceCard';
import Button from '../Button';
import { useModal } from '@/app/context/ModalContext';
import { urlFor } from '@/app/lib/sanity';

function ServicesBlock({ services }) {
  const { handleModal } = useModal();
  const [serviceId, setServiceId] = useState(services[0].id);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-6">
      {services.map((service) => (
        <Fragment key={service.id}>
          <ServiceCard
            id={service.id}
            name={service.title}
            icon={urlFor(service.icon).url()}
            shortDesc={service.shortDescription}
            description={service.description}
            setServiceId={setServiceId}
            serviceId={serviceId}
          />
          {serviceId === service.id && (
            <motion.div
              className={`row-start-${
                service.id + 2
              } sm:row-start-2 sm:col-start-1 sm:col-end-4`}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <p className="font-body text-gray-600">{service.description}</p>
              <div className="flex gap-3 mt-4">
                <Button type="primary" onClick={handleModal}>
                  Get in touch
                </Button>
                <Button type="plane" to="/projects">
                  Projects
                </Button>
              </div>
            </motion.div>
          )}
        </Fragment>
      ))}
    </div>
  );
}

export default ServicesBlock;
