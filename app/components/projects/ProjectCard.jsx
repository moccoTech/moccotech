'use client';

import Image from 'next/image';
import Link from 'next/link';

import { motion } from 'framer-motion';

function ProjectCard({ title, shortDescription, image, id }) {
  return (
    <Link href={`/project/${id}`}>
      <motion.div
        className="flex flex-col gap-2 border-b pb-6 sm:border-b-0 sm:pb-0"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-full h-64 sm:h-72 relative border-2 border-white hover:border-indigo-500 duration-300 rounded-xl">
          <Image
            src={image}
            alt={title}
            priority
            width="0"
            height="0"
            sizes="100vw"
            className="w-full h-full object-cover object-center rounded-lg"
          />
        </div>
        <h3 className="font-heading text-2xl z-[5] text-gray-700">{title}</h3>
        <p className="text-md z-[5] text-gray-600 line-clamp-2">
          {shortDescription}
        </p>
      </motion.div>
    </Link>
  );
}

export default ProjectCard;
