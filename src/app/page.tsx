import Image from "next/image";
import Link from "next/link";
import { categories, products } from "./data/products";

const stats = [
  { label: "Local farms", value: "120+" },
  { label: "Morning deliveries", value: "2,400" },
  { label: "Average rating", value: "4.9/5" },
];

export default function Home() {
  return (
    <main>
      <section className="mx-auto grid w-full max-w-6xl gap-12 px-6 py-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
              Fresh arrivals every morning
            </p>
            <h1 className="mt-5 text-4xl font-semibold leading-tight text-zinc-900 md:text-5xl">
              Seasonal produce and pantry essentials, delivered with care.
            </h1>
            <p className="mt-5 text-lg text-zinc-600">
              Curated boxes from nearby farms, delivered the same day. Build
              your weekly lineup with handpicked fruit, vegetables, dairy, and
              proteins.
            </p>
            <div className="mt-7 flex flex-wrap gap-4">
              <Link
                className="inline-flex items-center justify-center rounded-full bg-green-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-green-500"
                href="/shop"
              >
                Shop fresh
              </Link>
              <Link
                className="inline-flex items-center justify-center rounded-full border border-zinc-200 bg-white px-6 py-3 text-sm font-semibold text-zinc-900 transition hover:border-zinc-300"
                href="/shop?box=weekly"
              >
                Build a weekly box
              </Link>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-6">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-semibold text-zinc-900">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm text-zinc-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -left-6 top-6 hidden h-28 w-28 rounded-3xl bg-green-100 lg:block" />
            <div className="relative overflow-hidden rounded-[32px] border border-white bg-white shadow-xl">
              <Image
                src="/images/products/grocery-basket.jpg"
                alt="Fresh Harvest grocery basket"
                width={640}
                height={720}
                className="h-full w-full object-cover"
                priority
              />
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm">
                <p className="text-sm font-semibold text-zinc-900">
                  Delivery today
                </p>
                <p className="mt-1 text-xs text-zinc-500">
                  Order by 2 PM for same-day freshness.
                </p>
              </div>
              <div className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm">
                <p className="text-sm font-semibold text-zinc-900">
                  Smart substitutions
                </p>
                <p className="mt-1 text-xs text-zinc-500">
                  Curated swaps if a harvest sells out.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="categories" className="mx-auto w-full max-w-6xl px-6 py-12">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold text-green-700">
                Shop by category
              </p>
              <h2 className="mt-2 text-3xl font-semibold text-zinc-900">
                Everything you need for the week.
              </h2>
            </div>
            <Link
              className="text-sm font-semibold text-green-700 hover:text-green-800"
              href="/shop"
            >
              Browse all products
            </Link>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => (
              <article
                key={category.title}
                className="group overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm"
              >
                <div className="relative h-40">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-green-700">
                    {category.detail}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-zinc-900">
                    {category.title}
                  </h3>
                  <Link
                    className="mt-3 inline-flex text-sm font-semibold text-zinc-700 transition hover:text-zinc-900"
                    href={`/shop?category=${category.key}`}
                  >
                    Shop now →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="featured" className="mx-auto w-full max-w-6xl px-6 py-12">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold text-green-700">
                Featured picks
              </p>
              <h2 className="mt-2 text-3xl font-semibold text-zinc-900">
                Fresh now, ready to deliver.
              </h2>
            </div>
            <Link
              className="text-sm font-semibold text-green-700 hover:text-green-800"
              href="/shop?filter=featured"
            >
              View weekly specials
            </Link>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.slice(0, 6).map((product) => (
              <article
                key={product.name}
                className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm"
              >
                <div className="relative h-44">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between">
                    <Link
                      className="text-lg font-semibold text-zinc-900 transition hover:text-zinc-700"
                      href={`/products/${product.slug}`}
                    >
                      {product.name}
                    </Link>
                    <span className="text-sm font-semibold text-green-700">
                      {product.price}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-zinc-500">
                    Packed this morning · {product.origin}
                  </p>
                  <a
                    className="mt-4 inline-flex w-full items-center justify-center rounded-full border border-zinc-200 px-4 py-2 text-sm font-semibold text-zinc-900 transition hover:border-zinc-300"
                    href={`/cart?add=${product.slug}`}
                  >
                    Add to cart
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="sustainability" className="mx-auto w-full max-w-6xl px-6 py-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <div className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm">
              <p className="text-sm font-semibold text-green-700">
                Sustainability built in
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-zinc-900">
                Good for the planet, better for your table.
              </h2>
              <p className="mt-4 text-base text-zinc-600">
                We partner with regenerative farms and deliver with reusable
                crates. Every order helps fund composting, soil restoration, and
                reduced food waste.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-zinc-50 p-4">
                  <p className="text-sm font-semibold text-zinc-900">
                    Reusable packaging
                  </p>
                  <p className="mt-2 text-xs text-zinc-500">
                    Returnable crates and low-waste bags.
                  </p>
                </div>
                <div className="rounded-2xl bg-zinc-50 p-4">
                  <p className="text-sm font-semibold text-zinc-900">
                    Transparent sourcing
                  </p>
                  <p className="mt-2 text-xs text-zinc-500">
                    Meet the farms behind every ingredient.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-3xl border border-zinc-200 shadow-sm">
              <Image
                src="/images/products/sustainability.jpg"
                alt="Sustainability and farm practices"
                width={720}
                height={640}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </section>

        <section id="reviews" className="mx-auto w-full max-w-6xl px-6 py-12">
          <div className="rounded-3xl border border-zinc-200 bg-white p-10 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-6">
              <div>
                <p className="text-sm font-semibold text-green-700">
                  Loved by busy households
                </p>
                <h2 className="mt-2 text-3xl font-semibold text-zinc-900">
                  Customers feel the freshness.
                </h2>
              </div>
              <Link
                className="inline-flex items-center justify-center rounded-full border border-zinc-200 px-5 py-2 text-sm font-semibold text-zinc-900 transition hover:border-zinc-300"
                href="/reviews"
              >
                Read all reviews
              </Link>
            </div>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {[
                {
                  name: "Maya L.",
                  quote:
                    "The produce is vibrant and lasts all week. Delivery is always on time.",
                },
                {
                  name: "Daniel R.",
                  quote:
                    "I love the farm stories and the easy swaps when something sells out.",
                },
                {
                  name: "Priya S.",
                  quote:
                    "We cook more at home now. The salmon and dairy are especially good.",
                },
              ].map((review) => (
                <div
                  key={review.name}
                  className="rounded-2xl bg-zinc-50 p-5"
                >
                  <p className="text-sm text-zinc-600">{review.quote}</p>
                  <p className="mt-4 text-sm font-semibold text-zinc-900">
                    {review.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-6 pb-16">
          <div className="rounded-3xl bg-zinc-900 px-8 py-10 text-white md:px-12">
            <div className="flex flex-wrap items-center justify-between gap-8">
              <div>
                <p className="text-sm font-semibold text-green-300">
                  Weekly harvest updates
                </p>
                <h2 className="mt-3 text-3xl font-semibold">
                  Get fresh market drops in your inbox.
                </h2>
                <p className="mt-3 text-sm text-zinc-300">
                  Early access to limited harvests, new farms, and seasonal
                  recipes.
                </p>
              </div>
              <Link
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-zinc-900"
                href="/contact#newsletter"
              >
                Join the list
              </Link>
            </div>
          </div>
        </section>
    </main>
  );
}
