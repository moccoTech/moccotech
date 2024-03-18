import { urlFor } from '@/app/lib/sanity';
import Image from 'next/image';

function ReviewCard({ name, position, shortDesc, avatar }) {
  return (
    <div className="flex flex-col gap-3 p-5 rounded-xl ring-1 ring-gray-300 hover:ring-indigo-500 duration-300 hover:ring-2">
      <div className="flex gap-3 items-center">
        <Image
          src={urlFor(avatar).url()}
          alt={name}
          width={50}
          height={50}
          priority
        />
        <div>
          <h4 className="font-heading text-lg font-semibold">{name}</h4>
          <p className="font-body text-gray-600">{position}</p>
        </div>
      </div>
      <div>
        <p className="text-gray-600">{shortDesc}</p>
      </div>
    </div>
  );
}

export default ReviewCard;
