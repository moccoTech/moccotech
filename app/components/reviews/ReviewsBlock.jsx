import { client } from '@/app/lib/sanity';
import ReviewCard from './ReviewCard';

async function getReviews() {
  const query = `*[_type == 'reviews'] {
    author,
    review,
    avatar,
    position,
    _id
  }`;

  const reviews = client.fetch(query);

  return reviews;
}

async function ReviewsBlock() {
  const reviews = await getReviews();

  return (
    <div className="grid grod-cols-1 sm:grid-cols-3 gap-5 mt-10">
      {reviews.map((review) => {
        return (
          <ReviewCard
            key={review._id}
            name={review.author}
            position={review.position}
            shortDesc={review.review}
            avatar={review.avatar}
          />
        );
      })}
    </div>
  );
}

export default ReviewsBlock;
