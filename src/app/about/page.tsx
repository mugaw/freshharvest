import Image from "next/image";
import Link from "next/link";
import { getAssetPath } from "@/lib/paths";


export default function AboutPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-12">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold text-green-700">Our story</p>
          <h1 className="mt-2 text-3xl font-semibold text-zinc-900">
            Fresh Harvest connects local farms with modern kitchens.
          </h1>
          <p className="mt-4 text-base text-zinc-600">
            We started as a neighborhood farm stand and grew into a weekly
            delivery service that keeps farmers in control of their harvest. Our
            team curates each order, verifies quality metrics, and ships within
            hours of packing.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-zinc-200 bg-white p-4">
              <p className="text-sm font-semibold text-zinc-900">Quality-led</p>
              <p className="mt-2 text-xs text-zinc-500">
                We inspect every box before it ships.
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-200 bg-white p-4">
              <p className="text-sm font-semibold text-zinc-900">
                Farm partnerships
              </p>
              <p className="mt-2 text-xs text-zinc-500">
                Long-term agreements that reward sustainable practices.
              </p>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              className="inline-flex items-center justify-center rounded-full bg-green-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-green-500"
              href="/shop"
            >
              Shop the harvest
            </Link>
            <Link
              className="inline-flex items-center justify-center rounded-full border border-zinc-200 bg-white px-6 py-3 text-sm font-semibold text-zinc-900 transition hover:border-zinc-300"
              href="/partners"
            >
              Meet our partners
            </Link>
          </div>
        </div>
        <div className="overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm">
          <Image
            src={getAssetPath("/images/products/sustainability.jpg")}
            alt="Fresh Harvest team on the farm"
            width={720}
            height={640}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </main>
  );
}
