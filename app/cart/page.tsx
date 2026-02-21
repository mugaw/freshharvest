"use client";

import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, Suspense } from "react";
import { products, type Product } from "../data/products";
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag } from "lucide-react";

type CartItem = Product & { quantity: number };

function CartContent() {
  const searchParams = useSearchParams();
  const addedProductSlug = searchParams.get("add");
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Basic mockup: start with one default item and add the url param item if it exists
    const initialItems: CartItem[] = [];
    
    // Default item so cart isn't empty unless everything is removed
    const defaultProduct = products.find(p => p.slug === "organic-carrots");
    if (defaultProduct) {
      initialItems.push({ ...defaultProduct, quantity: 1 });
    }

    if (addedProductSlug) {
      const productToAdd = products.find(p => p.slug === addedProductSlug);
      if (productToAdd) {
        // If it's already the default, increment quantity. Otherwise add it.
        const existing = initialItems.find(item => item.slug === productToAdd.slug);
        if (existing) {
          existing.quantity += 1;
        } else {
          initialItems.push({ ...productToAdd, quantity: 1 });
        }
      }
    }
    // eslint-disable-next-line
    setCartItems(initialItems);
    setIsLoaded(true);
  }, [addedProductSlug]);

  const updateQuantity = (slug: string, delta: number) => {
    setCartItems(items => 
      items.map(item => {
        if (item.slug === slug) {
          const newQty = item.quantity + delta;
          return newQty > 0 ? { ...item, quantity: newQty } : item;
        }
        return item;
      })
    );
  };

  const removeItem = (slug: string) => {
    setCartItems(items => items.filter(item => item.slug !== slug));
  };

  if (!isLoaded) return null;

  const subtotal = cartItems.reduce((acc, item) => {
    const priceNum = parseFloat(item.price.replace('$', ''));
    return acc + (priceNum * item.quantity);
  }, 0);
  
  const deliveryFee = subtotal > 75 ? 0 : 7.99;
  const total = subtotal + deliveryFee;

  if (cartItems.length === 0) {
    return (
      <main className="flex min-h-[calc(100vh-80px)] items-center justify-center p-6 text-center">
        <div className="flex flex-col items-center">
          <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-zinc-100 text-zinc-400">
            <ShoppingBag className="h-10 w-10" />
          </div>
          <h1 className="text-2xl font-bold text-zinc-900">Your cart is empty</h1>
          <p className="mt-2 text-zinc-600">Looks like you haven&apos;t added anything to your box yet.</p>
          <Link
            href="/shop"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-green-600 px-8 py-3 text-sm font-semibold text-white transition hover:bg-green-500 hover:scale-105"
          >
            Start shopping
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-12">
      <h1 className="text-3xl font-semibold text-zinc-900">Your Cart</h1>
      
      <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_400px]">
        <div className="flex flex-col gap-6">
          {cartItems.map((item) => (
            <div key={item.slug} className="group relative flex gap-6 rounded-3xl border border-zinc-200 bg-white p-4 shadow-sm transition hover:shadow-md sm:p-6">
              <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-2xl sm:h-32 sm:w-32">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col justify-between">
                <div className="flex justify-between gap-4">
                  <div>
                    <h3 className="font-semibold text-zinc-900">{item.name}</h3>
                    <p className="mt-1 text-xs text-zinc-500">{item.origin}</p>
                    <p className="mt-2 text-sm font-medium text-green-700">{item.price}</p>
                  </div>
                  <button 
                    onClick={() => removeItem(item.slug)}
                    className="flex h-8 w-8 items-center justify-center rounded-full text-zinc-400 hover:bg-red-50 hover:text-red-500 transition"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
                
                <div className="mt-4 flex items-center gap-3">
                  <div className="flex items-center rounded-full border border-zinc-200 bg-zinc-50">
                    <button 
                      onClick={() => updateQuantity(item.slug, -1)}
                      className="flex h-8 w-8 items-center justify-center rounded-full text-zinc-600 hover:bg-zinc-200 transition"
                      disabled={item.quantity <= 1}
                    >
                      <Minus className="h-3 w-3" />
                    </button>
                    <span className="w-8 text-center text-sm font-semibold text-zinc-900">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.slug, 1)}
                      className="flex h-8 w-8 items-center justify-center rounded-full text-zinc-600 hover:bg-zinc-200 transition"
                    >
                      <Plus className="h-3 w-3" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="relative">
          <div className="sticky top-6 rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-xl font-semibold text-zinc-900">Order Summary</h2>
            
            <div className="mt-6 flex flex-col gap-3 border-b border-zinc-100 pb-6">
              <div className="flex justify-between text-sm text-zinc-600">
                <span>Subtotal</span>
                <span className="font-medium text-zinc-900">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm text-zinc-600">
                <span>Delivery logic</span>
                {deliveryFee === 0 ? (
                  <span className="font-bold text-green-700">FREE</span>
                ) : (
                  <span className="font-medium text-zinc-900">${deliveryFee.toFixed(2)}</span>
                )}
              </div>
            </div>
            
            <div className="mt-6 flex justify-between">
              <span className="text-base font-semibold text-zinc-900">Total</span>
              <span className="text-lg font-bold text-zinc-900">${total.toFixed(2)}</span>
            </div>

            {subtotal < 75 && (
               <div className="mt-6 rounded-2xl bg-amber-50 p-4 text-sm text-amber-800">
                 Add <span className="font-bold">${(75 - subtotal).toFixed(2)}</span> more to your cart to get free delivery!
               </div>
            )}
            
            <button className="group mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-green-600 px-6 py-4 text-sm font-bold text-white transition hover:bg-green-500 hover:scale-[1.02] active:scale-[0.98]">
              Proceed to Checkout
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </button>
            <p className="mt-4 text-center text-xs text-zinc-400">
              Secure checkout verified by Stripe
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default function CartPage() {
  return (
    <Suspense fallback={<div className="flex min-h-[50vh] items-center justify-center p-6"><p className="text-zinc-500">Loading cart...</p></div>}>
      <CartContent />
    </Suspense>
  );
}
