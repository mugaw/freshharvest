"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

// Contact Form Schema
const contactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactFormValues) => {
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      console.log("Form submitted:", data);
      setIsSubmitting(false);
      setIsSuccess(true);
      reset();
      // Hide success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-12 md:py-20">
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <p className="text-sm font-semibold text-green-700">Get in touch</p>
          <h1 className="mt-2 text-3xl font-semibold text-zinc-900 md:text-5xl">
            We're here to help.
          </h1>
          <p className="mt-4 max-w-lg text-base text-zinc-600">
            Have a question about a recent delivery, want to know more about our sourcing, or interested in becoming a farm partner? Reach out to us.
          </p>

          <div className="mt-10 flex flex-col gap-8">
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-zinc-100 text-zinc-900">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-zinc-900">Email us</h3>
                <p className="mt-1 text-sm text-zinc-600">Our support team replies within 2 hours during business hours.</p>
                <a href="mailto:support@freshharvest.com" className="mt-2 inline-block text-sm font-semibold text-green-700 hover:underline">
                  support@freshharvest.com
                </a>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-zinc-100 text-zinc-900">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-zinc-900">Call us</h3>
                <p className="mt-1 text-sm text-zinc-600">Mon-Fri from 8am to 6pm PST.</p>
                <a href="tel:+18001234567" className="mt-2 inline-block text-sm font-semibold text-green-700 hover:underline">
                  1-800-123-4567
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-zinc-100 text-zinc-900">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-zinc-900">Office</h3>
                <p className="mt-1 text-sm text-zinc-600">123 Market Street, Suite 400<br/>San Francisco, CA 94105</p>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm md:p-10">
          <h2 className="text-xl font-semibold text-zinc-900">Send us a message</h2>
          
          {isSuccess && (
            <div className="mt-6 rounded-2xl bg-green-50 p-4 text-sm text-green-800 border-l-4 border-green-600">
              <p className="font-semibold">Thank you for reaching out!</p>
              <p className="mt-1">We've received your message and will get back to you shortly.</p>
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-zinc-700">
                Full name
              </label>
              <input
                id="name"
                {...register("name")}
                className={`mt-2 block w-full rounded-xl border ${errors.name ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : 'border-zinc-300 focus:border-green-600 focus:ring-green-600'} px-4 py-3 text-sm text-zinc-900 outline-none transition`}
                placeholder="Jane Doe"
              />
              {errors.name && (
                <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>
              )}
            </div>

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
              <label htmlFor="subject" className="block text-sm font-medium text-zinc-700">
                Subject
              </label>
              <input
                id="subject"
                {...register("subject")}
                className={`mt-2 block w-full rounded-xl border ${errors.subject ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : 'border-zinc-300 focus:border-green-600 focus:ring-green-600'} px-4 py-3 text-sm text-zinc-900 outline-none transition`}
                placeholder="How can we help?"
              />
              {errors.subject && (
                <p className="mt-1 text-xs text-red-500">{errors.subject.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-zinc-700">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                {...register("message")}
                className={`mt-2 block w-full rounded-xl border ${errors.message ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : 'border-zinc-300 focus:border-green-600 focus:ring-green-600'} px-4 py-3 text-sm text-zinc-900 outline-none transition resize-none`}
                placeholder="Tell us what's on your mind..."
              />
              {errors.message && (
                <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-6 flex w-full items-center justify-center rounded-full bg-zinc-900 px-6 py-4 text-sm font-semibold text-white transition hover:bg-zinc-800 disabled:opacity-70 disabled:cursor-not-allowed hover:scale-[1.02] active:scale-[0.98]"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
