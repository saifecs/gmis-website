"use client";

import { useState } from "react";
import { site } from "@/lib/content";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <section className="bg-primary-dark py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white">
            Contact
          </h1>
          <p className="mt-4 text-lg text-white/90 max-w-2xl">
            Get in touch for a consultation. Our team will respond within 24
            hours.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <h2 className="font-heading text-2xl font-bold text-neutral-900">
                Head Office (KSA)
              </h2>
              <address className="mt-4 text-concrete not-italic">
                <p>{site.addressKSA}</p>
                <p className="mt-2">
                  <a
                    href={`tel:${site.phoneKSA.replace(/\s/g, "")}`}
                    className="text-primary hover:underline"
                  >
                    {site.phoneKSA}
                  </a>
                </p>
                <p>
                  <a
                    href={`mailto:${site.email}`}
                    className="text-primary hover:underline"
                  >
                    {site.email}
                  </a>
                </p>
              </address>

              <h2 className="font-heading text-2xl font-bold text-neutral-900 mt-12">
                Canada Office
              </h2>
              <address className="mt-4 text-concrete not-italic">
                <p>{site.addressCanada}</p>
                <p className="mt-2">
                  <a
                    href={`tel:${site.phoneCanada.replace(/\s/g, "")}`}
                    className="text-primary hover:underline"
                  >
                    {site.phoneCanada}
                  </a>
                </p>
                <p>
                  <a
                    href={`https://${site.websiteCanada}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    {site.websiteCanada}
                  </a>
                </p>
              </address>
            </div>

            <div className="rounded-card border border-neutral-100 bg-neutral-50 p-8">
              <h2 className="font-heading text-xl font-bold text-neutral-900">
                Request a Consultation
              </h2>
              {submitted ? (
                <p className="mt-4 text-primary font-medium">
                  Thank you. We will respond within 24 hours.
                </p>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-neutral-900"
                    >
                      Name
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
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-neutral-900"
                    >
                      Email
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
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-neutral-900"
                    >
                      Phone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      className="mt-1 block w-full rounded-lg border border-neutral-300 bg-white px-4 py-2 text-neutral-900 focus:border-primary focus:ring-1 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-neutral-900"
                    >
                      Message
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
                    Send
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
