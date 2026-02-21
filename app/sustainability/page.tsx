import Image from "next/image";
import Link from "next/link";
import { Leaf, Recycle, Sprout } from "lucide-react";

export default function SustainabilityPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-12">
      <div className="mb-12 text-center md:mb-20">
        <p className="text-sm font-semibold text-green-700">Our commitment</p>
        <h1 className="mt-2 text-3xl font-semibold text-zinc-900 md:text-5xl">
          Radically transparent sustainability.
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base text-zinc-600">
          We don't just talk about being green. We measure our impact, reduce waste at every step, and invest directly in the soil that grows our food.
        </p>
      </div>

      <div className="grid gap-12 lg:grid-cols-3">
        <div className="group rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
          <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-green-50 text-green-700 transition group-hover:bg-green-100 group-hover:scale-110">
            <Recycle className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-semibold text-zinc-900">Closed-Loop Packaging</h3>
          <p className="mt-3 text-sm text-zinc-600">
            Say goodbye to cardboard boxes. Your order arrives in reusable, insulated totes. Leave them out before your next delivery, and we sanitize and reuse them. Soft plastics are replaced with compostable cellulose where safety allows.
          </p>
        </div>
        
        <div className="group rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
          <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-green-50 text-green-700 transition group-hover:bg-green-100 group-hover:scale-110">
            <Sprout className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-semibold text-zinc-900">Regenerative Farming</h3>
          <p className="mt-3 text-sm text-zinc-600">
            We prioritize partners who practice crop rotation, cover cropping, and minimal tilling. By restoring soil health, our farms draw down carbon, increase water retention, and produce significantly more nutritious food.
          </p>
        </div>

        <div className="group rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
          <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-green-50 text-green-700 transition group-hover:bg-green-100 group-hover:scale-110">
            <Leaf className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-semibold text-zinc-900">Zero Food Waste</h3>
          <p className="mt-3 text-sm text-zinc-600">
            Because we operate a direct-to-consumer model, we only harvest and source what is ordered. Any surplus, ugly produce, or soon-to-expire items are donated to local food banks or sent to our composting partners.
          </p>
        </div>
      </div>

      <div className="mt-16 overflow-hidden rounded-3xl border border-zinc-200 shadow-sm relative h-96 w-full lg:h-[32rem]">
         <Image
            src="/images/products/sustainability.jpg"
            alt="Farm soil showing regenerative agriculture"
            fill
            className="object-cover"
         />
         <div className="absolute inset-0 bg-zinc-900/40" />
         <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-white">
            <h2 className="text-2xl font-bold md:text-4xl">Join the movement.</h2>
            <p className="mt-4 max-w-lg text-sm font-medium opacity-90 md:text-base">
              Every purchase casts a vote for the food system you want to see. Vote for soil health, local economies, and less waste.
            </p>
            <Link
              className="mt-8 inline-flex items-center justify-center rounded-full bg-green-600 px-8 py-3 text-sm font-bold text-white shadow-lg transition hover:bg-green-500 hover:scale-105 active:scale-95"
              href="/shop"
            >
              Shop Sustainably
            </Link>
         </div>
      </div>
    </main>
  );
}
