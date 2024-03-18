'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

function ServiceCard({ id, name, icon, shortDesc, serviceId, setServiceId }) {
  const isCurrentCard = id === serviceId;
  return (
    <motion.div
      className={`p-5 rounded-lg ring-1 ring-gray-300 hover:ring-2 hover:ring-indigo-500 duration-300 space-y-2 ${
        isCurrentCard && 'ring-indigo-500 ring-2'
      }`}
      role="button"
      onClick={() => setServiceId(id)}
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <h3 className="font-heading font-semibold text-xl flex gap-2 text-gray-800">
        <span>{name}</span>
        <Image
          src={icon}
          alt={name}
          width={20}
          height={20}
          style={{ width: 'auto', height: 'auto' }}
        />
      </h3>
      <p className="font-body text-gray-600">{shortDesc}</p>
    </motion.div>
  );
}

export default ServiceCard;
