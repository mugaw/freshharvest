"use client";

import Link from "next/link";
import { Truck, Clock, MapPin, Search } from "lucide-react";

export default function DeliveryPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-12">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold text-green-700">How it works</p>
          <h1 className="mt-2 text-3xl font-semibold text-zinc-900">
            Fresh from farm to door, delivered daily.
          </h1>
          <p className="mt-4 text-base text-zinc-600">
            We operate our own refrigerated vans to ensure your groceries arrive in perfect condition. No third-party couriers, no gig workers. Just trained Fresh Harvest staff handling your food with care.
          </p>
          <div className="mt-8 flex flex-col gap-6">
             <div className="flex gap-4">
               <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-700">
                 <Clock className="h-5 w-5" />
               </div>
               <div>
                  <h3 className="font-semibold text-zinc-900">Morning & Evening Slots</h3>
                  <p className="mt-1 text-sm text-zinc-600">Choose a 2-hour delivery window that works for your schedule. We deliver from 7 AM to 9 PM, 7 days a week.</p>
               </div>
             </div>
             <div className="flex gap-4">
               <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-700">
                 <Truck className="h-5 w-5" />
               </div>
               <div>
                  <h3 className="font-semibold text-zinc-900">Cold-Chain Delivery</h3>
                  <p className="mt-1 text-sm text-zinc-600">Our vans are temperature-controlled. Your leafy greens stay crisp, and your dairy stays precisely chilled until it reaches your fridge.</p>
               </div>
             </div>
             <div className="flex gap-4">
               <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-700">
                 <MapPin className="h-5 w-5" />
               </div>
               <div>
                  <h3 className="font-semibold text-zinc-900">Live Tracking</h3>
                  <p className="mt-1 text-sm text-zinc-600">Get an SMS when your driver is 15 minutes away, and track their progress live on our interactive map.</p>
               </div>
             </div>
          </div>
          <div className="mt-8">
            <Link
              className="inline-flex items-center justify-center rounded-full bg-green-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-green-500 hover:scale-105 active:scale-95"
              href="/shop"
            >
              Start shopping
            </Link>
          </div>
        </div>
        
        <div className="space-y-6">
           <div className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm transition hover:shadow-md">
             <h2 className="text-xl font-semibold text-zinc-900">Check Your Zip Code</h2>
             <p className="mt-2 text-sm text-zinc-600">See if we deliver to your neighborhood.</p>
             <form className="mt-4 flex gap-2" onSubmit={(e) => e.preventDefault()}>
               <div className="relative flex-1">
                 <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />
                 <input 
                    type="text" 
                    placeholder="Enter zip code..."
                    className="w-full rounded-full border border-zinc-200 bg-zinc-50 py-2 pl-10 pr-4 text-sm text-zinc-900 outline-none transition focus:border-green-600 focus:bg-white focus:ring-1 focus:ring-green-600"
                    required
                 />
               </div>
               <button 
                  type="button"
                  className="rounded-full bg-zinc-900 px-5 py-2 text-sm font-semibold text-white transition hover:bg-zinc-800"
               >
                 Check
               </button>
             </form>
             <div className="mt-4 rounded-2xl bg-zinc-50 p-4 text-center">
                <p className="text-sm text-zinc-500">Currently serving: SF Bay Area, Los Angeles, and Seattle Metro.</p>
             </div>
           </div>

           <div className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm transition hover:shadow-md">
             <h2 className="text-xl font-semibold text-zinc-900">Delivery Fees</h2>
             <div className="mt-4 space-y-3">
               <div className="flex items-center justify-between border-b border-zinc-100 pb-3">
                 <span className="text-sm text-zinc-600">Orders under $35</span>
                 <span className="font-semibold text-zinc-900">$7.99</span>
               </div>
               <div className="flex items-center justify-between border-b border-zinc-100 pb-3">
                 <span className="text-sm text-zinc-600">Orders $35 - $75</span>
                 <span className="font-semibold text-zinc-900">$3.99</span>
               </div>
               <div className="flex items-center justify-between">
                 <span className="text-sm font-medium text-green-700">Orders over $75</span>
                 <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs font-bold text-green-700">FREE</span>
               </div>
             </div>
           </div>
        </div>
      </div>
    </main>
  );
}
