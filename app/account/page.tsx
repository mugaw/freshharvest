"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";
import { Leaf } from "lucide-react";

// Sign In Form Schema
const signInSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
  password: z.string().min(6, { message: "Password must be at least 6 characters." }),
});

type SignInValues = z.infer<typeof signInSchema>;

export default function AccountPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isLoginMode, setIsLoginMode] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SignInValues>({
    resolver: zodResolver(signInSchema),
  });

  const onSubmit = () => {
    setIsSubmitting(true);
    setIsError(false);
    
    // Simulate API call resulting in an error because backend isn't real
    setTimeout(() => {
      setIsSubmitting(false);
      setIsError(true);
      reset({ password: '' }); 
    }, 1500);
  };

  return (
    <main className="flex min-h-[calc(100vh-80px)] items-center justify-center p-6">
      <div className="w-full max-w-sm rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm">
        <div className="mb-8 flex flex-col items-center text-center">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-green-100 text-green-700">
             <Leaf className="h-6 w-6" />
          </div>
          <h1 className="text-2xl font-bold text-zinc-900">
            {isLoginMode ? "Welcome back" : "Create an account"}
          </h1>
          <p className="mt-2 text-sm text-zinc-600">
            {isLoginMode 
               ? "Enter your details to access your account." 
               : "Sign up to start building your weekly box."}
          </p>
        </div>

        {isError && (
          <div className="mb-6 rounded-2xl bg-red-50 p-4 text-sm text-red-800 border-l-4 border-red-600">
            <p className="font-semibold">Authentication Error</p>
            <p className="mt-1">Invalid email or password. Please try again.</p>
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {!isLoginMode && (
             <div>
               <label htmlFor="name" className="block text-sm font-medium text-zinc-700">
                 Full name
               </label>
               <input
                 id="name"
                 type="text"
                 className="mt-2 block w-full rounded-xl border border-zinc-300 px-4 py-3 text-sm text-zinc-900 outline-none transition focus:border-green-600 focus:ring-green-600"
                 placeholder="Jane Doe"
               />
             </div>
          )}
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-zinc-700">
              Email address
            </label>
            <input
              id="email"
              type="email"
              {...register("email")}
              className={`mt-2 block w-full rounded-xl border ${errors.email ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : 'border-zinc-300 focus:border-green-600 focus:ring-green-600'} px-4 py-3 text-sm text-zinc-900 outline-none transition`}
              placeholder="jane@example.com"
            />
            {errors.email && (
              <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-zinc-700">
              Password
            </label>
            <input
              id="password"
              type="password"
              {...register("password")}
              className={`mt-2 block w-full rounded-xl border ${errors.password ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : 'border-zinc-300 focus:border-green-600 focus:ring-green-600'} px-4 py-3 text-sm text-zinc-900 outline-none transition`}
              placeholder="••••••••"
            />
            {errors.password && (
              <p className="mt-1 text-xs text-red-500">{errors.password.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-6 flex w-full items-center justify-center rounded-full bg-green-600 px-6 py-4 text-sm font-semibold text-white transition hover:bg-green-500 disabled:opacity-70 disabled:cursor-not-allowed hover:scale-[1.02] active:scale-[0.98]"
          >
            {isSubmitting ? "Processing..." : (isLoginMode ? "Sign in" : "Create account")}
          </button>
        </form>

        <div className="mt-8 text-center text-sm">
          <p className="text-zinc-600">
            {isLoginMode ? "Don't have an account?" : "Already have an account?"}{" "}
            <button 
              type="button" 
              onClick={() => {
                 setIsLoginMode(!isLoginMode);
                 setIsError(false);
                 reset();
              }} 
              className="font-semibold text-zinc-900 hover:underline"
            >
              {isLoginMode ? "Sign up" : "Sign in"}
            </button>
          </p>
        </div>
      </div>
    </main>
  );
}
