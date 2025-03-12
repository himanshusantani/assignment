import Image from 'next/image';
import React from 'react';

// Assume we have a star.png in the public folder
const starIcon = "/Icons/star.png";

interface Review {
  id: number;
  author: string;
  initials: string;
  rating: number;
  comment: string;
  verifiedBuyer: boolean;
  timeAgo: string;
}

const ReviewSection: React.FC = () => {
  const reviews: Review[] = [
    {
      id: 1,
      author: "Peggy G.",
      initials: "PG",
      rating: 5,
      comment: "Excellent Product",
      verifiedBuyer: true,
      timeAgo: "1 week ago"
    },
    {
      id: 2,
      author: "Mona Lisa",
      initials: "ML",
      rating: 5,
      comment: "Perfect fit. Superb Quality!",
      verifiedBuyer: true,
      timeAgo: "2 week ago"
    },
    {
      id: 3,
      author: "Mona Lisa",
      initials: "ML",
      rating: 4,
      comment: "Great Quality. Packaging could be better.",
      verifiedBuyer: true,
      timeAgo: "2 week ago"
    }
  ];

  const averageRating = 4.8;
  const totalReviews = 120;

  const renderStars = (rating: number) => {
    return (
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <img 
            key={i} 
            src={starIcon} 
            alt="star" 
            className={`h-4 w-4 ${i < rating ? "opacity-100" : "opacity-30"}`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className=" mx-auto p-4">
      {/* Tabs */}
      <div className="border-b border-gray-200 mb-4">
        <div className="flex">
          <button className="py-2 px-4 border-b-2 border-black font-medium">
            Reviews
          </button>
          <button className="py-2 px-4 text-gray-500 font-medium">
            Questions
          </button>
        </div>
      </div>

      {/* Rating summary */}
      <div className="flex items-center mb-4">
        <div className="mr-2">
          <span className="text-2xl font-bold">{averageRating}</span>
        </div>
        <div className="flex items-center">
          <div className="flex mr-2">
            {renderStars(Math.round(averageRating))}
          </div>
          <span className="text-xs text-gray-500">
            Based on {totalReviews} reviews
          </span>
        </div>
      </div>

      {/* Write review button */}
      <div className="mb-6">
        <button className="bg-black text-white py-2 px-4 rounded-md w-64">
          Write a Review
        </button>
      </div>

      {/* Filter dropdown */}
      <div className="flex justify-end mb-6">
        <div className="relative">
          <select className="appearance-none border border-gray-300 rounded-md px-4 py-2 pr-8 focus:outline-none">
            <option>Highest Rating</option>
            <option>Lowest Rating</option>
            <option>Most Recent</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>

      {/* Reviews list */}
      <div className="space-y-6">
        {reviews.map((review) => (
          <div key={review.id} className="border-b border-gray-200 pb-6">
            <div className="flex justify-between items-start mb-2">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-400 rounded-full flex items-center justify-center text-white mr-3">
                  {review.initials}
                </div>
                <div>
                  <div className="font-medium">{review.author}</div>
                  <div className="flex items-center">
                    <span className="text-xs bg-gray-100 text-gray-600 px-1 py-0.5 rounded-sm flex items-center">
                      Verified Buyer 
                      {review.verifiedBuyer && (
                        <span ><Image src="/Icons/Tick.png" alt='Tick' height={15} width={15}/></span>
                      )}
                    </span>
                  </div>
                </div>
              </div>
              <div className="text-sm text-gray-500">{review.timeAgo}</div>
            </div>
            <div className="mb-2">
              {renderStars(review.rating)}
            </div>
            <div className="text-sm">{review.comment}</div>
          </div>
        ))}
      </div>

      {/* Read all reviews button */}
      <div className="text-center mt-6">
        <button className="text-black font-medium">
          Read All Reviews
        </button>
      </div>
    </div>
  );
};

export default ReviewSection;