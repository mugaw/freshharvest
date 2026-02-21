import { Star, StarHalf } from "lucide-react";

const REVIEWS = [
  {
    id: 1,
    name: "Maya L.",
    date: "February 12, 2026",
    rating: 5,
    title: "Best produce delivery I've tried",
    content: "The produce is vibrant and lasts all week. Delivery is always on time, and the reusable totes are so much better than dealing with cardboard boxes. Highly recommend the heirloom tomatoes!",
  },
  {
    id: 2,
    name: "Daniel R.",
    date: "January 28, 2026",
    rating: 5,
    title: "Love the farm stories",
    content: "I love learning exactly where my food comes from. The smart swaps when something sells out are always spot-on, though honestly they rarely run out of things. The wild salmon is incredible.",
  },
  {
    id: 3,
    name: "Priya S.",
    date: "January 15, 2026",
    rating: 4.5,
    title: "Cooking at home is fun again",
    content: "We cook more at home now because having high-quality ingredients just makes a difference. The dairy is especially good—the creamy brie is a weekly staple for us now.",
  },
  {
    id: 4,
    name: "Michael T.",
    date: "December 05, 2025",
    rating: 5,
    title: "Incredible customer service",
    content: "I once accidentally ordered delivery to the wrong address. Support fixed it within 10 minutes. The drivers are polite, and the food quality speaks for itself.",
  },
  {
    id: 5,
    name: "Sarah W.",
    date: "November 22, 2025",
    rating: 5,
    title: "Eco-friendly and delicious",
    content: "Finally, a grocery delivery service that doesn't wrap everything in plastic! The closed-loop packaging system is brilliant. The carrots actually taste like carrots.",
  },
  {
    id: 6,
    name: "David K.",
    date: "November 10, 2025",
    rating: 4,
    title: "Great quality, slightly pricey",
    content: "You definitely pay a premium compared to a big box supermarket, but the quality justifies it. The berries never have mold, and the greens don't wilt after two days.",
  },
];

function RatingStars({ rating }: { rating: number }) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div className="flex text-amber-500">
      {[...Array(fullStars)].map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-current" />
      ))}
      {hasHalfStar && <StarHalf className="h-4 w-4 fill-current" />}
      {[...Array(5 - Math.ceil(rating))].map((_, i) => (
        <Star key={`empty-${i}`} className="h-4 w-4 text-zinc-300" />
      ))}
    </div>
  );
}

export default function ReviewsPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-12 text-center md:py-20">
      <p className="text-sm font-semibold text-green-700">Customer feedback</p>
      <h1 className="mt-2 text-3xl font-semibold text-zinc-900 md:text-5xl">
        Don&apos;t just take our word for it.
      </h1>
      <p className="mx-auto mt-4 max-w-2xl text-base text-zinc-600">
        We&apos;ve delivered over 100,000 orders to households across the coast. Here is what they have to say about the Fresh Harvest experience.
      </p>

      <div className="mt-12 flex flex-col justify-center gap-6 sm:flex-row sm:items-center">
        <div className="flex items-center justify-center gap-4 rounded-3xl bg-amber-50 px-8 py-4">
          <div className="text-4xl font-bold text-amber-700">4.9</div>
          <div>
            <div className="flex text-amber-500">
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 fill-current" />
            </div>
            <p className="mt-1 text-sm font-medium text-amber-800">out of 5 stars</p>
          </div>
        </div>
        <p className="text-sm font-medium text-zinc-500">Based on 2,400+ reviews</p>
      </div>

      <div className="mt-16 grid gap-6 text-left md:grid-cols-2 lg:grid-cols-3">
        {REVIEWS.map((review) => (
          <div key={review.id} className="flex flex-col rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:shadow-md">
            <div className="mb-4 flex items-center justify-between">
              <RatingStars rating={review.rating} />
              <span className="text-xs text-zinc-400">{review.date}</span>
            </div>
            <h3 className="text-lg font-semibold text-zinc-900">{review.title}</h3>
            <p className="mt-3 flex-1 text-sm text-zinc-600">&quot;{review.content}&quot;</p>
            <div className="mt-6 flex items-center gap-3 border-t border-zinc-100 pt-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-100 text-xs font-bold text-zinc-700">
                {review.name.charAt(0)}
              </div>
              <span className="text-sm font-medium text-zinc-900">{review.name}</span>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-12 flex justify-center">
         <button className="rounded-full border border-zinc-200 bg-white px-6 py-3 text-sm font-semibold text-zinc-700 transition hover:bg-zinc-50 hover:border-zinc-300">
           Load more reviews
         </button>
      </div>
    </main>
  );
}
