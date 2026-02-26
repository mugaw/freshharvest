"use client";

import { useEffect, useMemo, useState, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { categories, products } from "../data/products";
import { getAssetPath } from "@/lib/paths";

const categoryLabels: Record<string, string> = {
  fruits: "Fresh Fruits",
  vegetables: "Garden Vegetables",
  dairy: "Dairy & Eggs",
  pantry: "Pantry Staples",
  protein: "Seafood & Protein",
};

function ShopContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") ?? "all";
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [visibleCount, setVisibleCount] = useState(6);
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    setActiveCategory(initialCategory);
  }, [initialCategory]);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        activeCategory === "all" || product.category === activeCategory;
      const matchesQuery =
        query.trim().length === 0 ||
        product.name.toLowerCase().includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, query]);

  const visibleProducts = filteredProducts.slice(0, visibleCount);

  const handleLoadMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      setVisibleCount((count) => Math.min(count + 3, filteredProducts.length));
      setIsLoading(false);
    }, 600);
  };

  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-12">
      <div className="flex flex-wrap items-center justify-between gap-6">
        <div>
          <p className="text-sm font-semibold text-green-700">Shop</p>
          <h1 className="mt-2 text-3xl font-semibold text-zinc-900">
            Build your cart from today&apos;s harvest.
          </h1>
          <p className="mt-3 text-base text-zinc-600">
            Choose a category or browse everything at once. Every item includes
            full metric specifications for easy planning.
          </p>
        </div>
        <div className="flex w-full max-w-sm items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2 shadow-sm">
          <input
            className="w-full bg-transparent text-sm text-zinc-700 outline-none"
            placeholder="Search products"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
          <span className="text-xs font-semibold text-zinc-400">
            {filteredProducts.length}
          </span>
        </div>
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        <button
          className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
            activeCategory === "all"
              ? "border-zinc-900 bg-zinc-900 text-white"
              : "border-zinc-200 bg-white text-zinc-700 hover:border-zinc-300"
          }`}
          onClick={() => setActiveCategory("all")}
          type="button"
        >
          All products
        </button>
        {categories.map((category) => (
          <button
            key={category.key}
            className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
              activeCategory === category.key
                ? "border-green-600 bg-green-600 text-white"
                : "border-zinc-200 bg-white text-zinc-700 hover:border-zinc-300"
            }`}
            onClick={() => setActiveCategory(category.key)}
            type="button"
          >
            {categoryLabels[category.key]}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visibleProducts.map((product) => (
          <article
            key={product.slug}
            className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="relative h-44">
              <Image
                src={getAssetPath(product.image)}
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
              <p className="mt-2 text-sm text-zinc-500">{product.origin}</p>
              <div className="mt-4 grid gap-1 text-xs text-zinc-500">
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
              <div className="mt-5 flex items-center gap-3">
                <Link
                  className="inline-flex flex-1 items-center justify-center rounded-full border border-zinc-200 px-4 py-2 text-sm font-semibold text-zinc-900 transition hover:border-zinc-300"
                  href={`/products/${product.slug}`}
                >
                  View details
                </Link>
                <Link
                  className="inline-flex flex-1 items-center justify-center rounded-full bg-zinc-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-zinc-800"
                  href={`/cart?add=${product.slug}`}
                >
                  Add to cart
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      {visibleProducts.length === 0 && (
        <div className="mt-10 rounded-2xl border border-dashed border-zinc-300 bg-white p-10 text-center text-sm text-zinc-500">
          No products match your search. Try clearing filters or searching a
          different keyword.
        </div>
      )}

      {visibleProducts.length < filteredProducts.length && (
        <div className="mt-10 flex justify-center">
          <button
            className="inline-flex items-center justify-center rounded-full border border-zinc-200 bg-white px-6 py-3 text-sm font-semibold text-zinc-900 transition hover:border-zinc-300 disabled:cursor-not-allowed disabled:opacity-60"
            disabled={isLoading}
            onClick={handleLoadMore}
            type="button"
          >
            {isLoading ? "Loading more..." : "Load more"}
          </button>
        </div>
      )}
    </main>
  );
}

export default function ShopPage() {
  return (
    <Suspense fallback={<div className="flex min-h-[50vh] items-center justify-center p-6"><p className="text-zinc-500">Loading shop...</p></div>}>
      <ShopContent />
    </Suspense>
  );
}
