import Image from "next/image";
import Link from "next/link";

export default function PartnersPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-12">
      <div className="mb-12 md:mb-20">
        <p className="text-sm font-semibold text-green-700">Our Network</p>
        <h1 className="mt-2 text-3xl font-semibold text-zinc-900 md:text-5xl">
          Meet the farms behind the food.
        </h1>
        <p className="mt-4 max-w-2xl text-base text-zinc-600">
          We pride ourselves on our direct relationships with small-scale, regenerative farms. Every purchase you make supports these independent growers directly.
        </p>
      </div>

      <div className="space-y-16 lg:space-y-24">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
           <div className="relative h-64 overflow-hidden rounded-3xl border border-zinc-200 shadow-sm sm:h-80 lg:h-96">
             <Image 
                src="/images/categories/vegetables.jpg" 
                alt="Green acreage farm" 
                fill 
                className="object-cover transition-transform duration-700 hover:scale-105"
             />
           </div>
           <div>
             <h2 className="text-2xl font-bold text-zinc-900">Green Acreage Fields</h2>
             <p className="mt-2 text-sm font-semibold text-zinc-500">Watsonville, CA • Partner since 2021</p>
             <p className="mt-4 text-base text-zinc-600">
               Green Acreage is a third-generation family farm that focuses purely on heirloom varieties. They are our primary supplier for tomatoes, peppers, and summer squash. By utilizing ladybugs rather than synthetic pesticides, they&apos;ve maintained an incredible biodiversity on their land.
             </p>
             <Link href="/shop?category=vegetables" className="mt-6 inline-flex text-sm font-semibold text-green-700 hover:underline">
               Shop their produce &rarr;
             </Link>
           </div>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
           <div className="order-2 lg:order-1">
             <h2 className="text-2xl font-bold text-zinc-900">Marin Coastal Dairy</h2>
             <p className="mt-2 text-sm font-semibold text-zinc-500">Petaluma, CA • Partner since 2022</p>
             <p className="mt-4 text-base text-zinc-600">
               Operating entirely on grassy rolling hills near the ocean, Marin Coastal produces some of the richest milk, butter, and cheese in the state. Their cows are 100% grass-fed and rotationally grazed, ensuring the land has time to recover and capture carbon.
             </p>
             <Link href="/shop?category=dairy" className="mt-6 inline-flex text-sm font-semibold text-green-700 hover:underline">
               Shop their dairy &rarr;
             </Link>
           </div>
           <div className="order-1 relative h-64 overflow-hidden rounded-3xl border border-zinc-200 shadow-sm sm:h-80 lg:h-96 lg:order-2">
             <Image 
                src="/images/categories/dairy.jpg" 
                alt="Marin Coastal Dairy" 
                fill 
                className="object-cover transition-transform duration-700 hover:scale-105"
             />
           </div>
        </div>

        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
           <div className="relative h-64 overflow-hidden rounded-3xl border border-zinc-200 shadow-sm sm:h-80 lg:h-96">
             <Image 
                src="/images/categories/fruits.jpg" 
                alt="Valley Orchards" 
                fill 
                className="object-cover transition-transform duration-700 hover:scale-105"
             />
           </div>
           <div>
             <h2 className="text-2xl font-bold text-zinc-900">Valley Orchards</h2>
             <p className="mt-2 text-sm font-semibold text-zinc-500">Yakima Valley, WA • Partner since 2023</p>
             <p className="mt-4 text-base text-zinc-600">
               Known for their incredibly crisp apples and perfectly sweet stone fruit, Valley Orchards operates on a zero-waste philosophy. Windfall fruit is immediately turned into compost that feeds the very trees it fell from.
             </p>
             <Link href="/shop?category=fruits" className="mt-6 inline-flex text-sm font-semibold text-green-700 hover:underline">
               Shop their fruits &rarr;
             </Link>
           </div>
        </div>
      </div>

      <div className="mt-24 rounded-3xl bg-zinc-900 px-6 py-16 text-center text-white md:px-12">
         <h2 className="text-3xl font-bold">Are you a local producer?</h2>
         <p className="mx-auto mt-4 max-w-xl text-zinc-300">
           We are always looking to expand our network of sustainable, high-quality farms and artisans. We offer fair compensation, transparent contracts, and reliable weekly volume.
         </p>
         <Link
            className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-bold text-zinc-900 transition hover:bg-zinc-200 hover:scale-105 active:scale-95"
            href="/contact"
          >
            Become a Partner
         </Link>
      </div>
    </main>
  );
}
