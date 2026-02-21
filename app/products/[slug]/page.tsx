import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "../../data/products";

type ProductPageProps = {
  params: { slug: string };
};

export default function ProductPage({ params }: ProductPageProps) {
  const product = products.find((item) => item.slug === params.slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-12">
      <div className="flex flex-wrap items-center justify-between gap-6">
        <div>
          <p className="text-sm font-semibold text-green-700">
            {product.category}
          </p>
          <h1 className="mt-2 text-3xl font-semibold text-zinc-900">
            {product.name}
          </h1>
          <p className="mt-3 text-base text-zinc-600">{product.description}</p>
        </div>
        <div className="flex items-center gap-3">
          <Link
            className="inline-flex items-center justify-center rounded-full border border-zinc-200 px-5 py-2 text-sm font-semibold text-zinc-900 transition hover:border-zinc-300"
            href="/shop"
          >
            Back to shop
          </Link>
          <Link
            className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-5 py-2 text-sm font-semibold text-white transition hover:bg-zinc-800"
            href={`/cart?add=${product.slug}`}
          >
            Add to cart
          </Link>
        </div>
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm">
          <Image
            src={product.image}
            alt={product.name}
            width={760}
            height={640}
            className="h-full w-full object-cover"
            priority
          />
        </div>
        <div className="space-y-6 rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm">
          <div>
            <p className="text-sm font-semibold text-green-700">Pricing</p>
            <p className="mt-2 text-3xl font-semibold text-zinc-900">
              {product.price}
            </p>
            <p className="mt-2 text-sm text-zinc-500">
              Harvested from {product.origin}
            </p>
          </div>
          <div className="rounded-2xl bg-zinc-50 p-4">
            <p className="text-sm font-semibold text-zinc-900">
              Full specifications
            </p>
            <div className="mt-3 grid gap-2 text-sm text-zinc-600">
              <span>
                Weight: {product.metrics.weight.grams} g (
                {product.metrics.weight.kilograms} kg)
              </span>
              <span>
                Volume: {product.metrics.volume.milliliters} ml (
                {product.metrics.volume.liters} L)
              </span>
              <span>
                Size: {product.metrics.size.centimeters} cm (
                {product.metrics.size.meters} m)
              </span>
            </div>
          </div>
          <div className="rounded-2xl border border-dashed border-zinc-200 p-4 text-sm text-zinc-500">
            Packed within 6 hours of harvest and chilled for delivery. Each
            order includes a reusable tote and freshness guide.
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <Link
              className="inline-flex items-center justify-center rounded-full border border-zinc-200 px-5 py-2 text-sm font-semibold text-zinc-900 transition hover:border-zinc-300"
              href="/delivery"
            >
              See delivery times
            </Link>
            <Link
              className="inline-flex items-center justify-center rounded-full bg-green-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-green-500"
              href="/contact"
            >
              Ask about sourcing
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
