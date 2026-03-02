"use client";

import { useState } from "react";
import type { getTranslations } from "@/lib/translations";

type T = ReturnType<typeof getTranslations>;

export function ContactForm({ t }: { t: T }) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="rounded-card border border-neutral-100 bg-neutral-50 p-8">
      <h2 className="font-heading text-xl font-bold text-neutral-900">
        {t.contact.formTitle}
      </h2>
      {submitted ? (
        <p className="mt-4 text-primary font-medium">{t.contact.thankYou}</p>
      ) : (
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-neutral-900">
              {t.contact.name}
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="mt-1 block w-full rounded-lg border border-neutral-300 bg-white px-4 py-2 text-neutral-900 focus:border-primary focus:ring-1 focus:ring-primary"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-neutral-900">
              {t.contact.email}
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="mt-1 block w-full rounded-lg border border-neutral-300 bg-white px-4 py-2 text-neutral-900 focus:border-primary focus:ring-1 focus:ring-primary"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-neutral-900">
              {t.contact.phone}
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              className="mt-1 block w-full rounded-lg border border-neutral-300 bg-white px-4 py-2 text-neutral-900 focus:border-primary focus:ring-1 focus:ring-primary"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-neutral-900">
              {t.contact.message}
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              className="mt-1 block w-full rounded-lg border border-neutral-300 bg-white px-4 py-2 text-neutral-900 focus:border-primary focus:ring-1 focus:ring-primary"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-lg bg-primary px-4 py-3 font-semibold text-white hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            {t.contact.send}
          </button>
        </form>
      )}
    </div>
  );
}
