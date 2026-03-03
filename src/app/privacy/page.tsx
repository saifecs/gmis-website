import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for GREENMARK Integrated Services.",
};

export default function PrivacyPage() {
  return (
    <>
      <section className="bg-primary-dark py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white">
            Privacy Policy
          </h1>
          <p className="mt-4 text-white/90">
            Last updated: {new Date().toLocaleDateString("en-GB")}
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 prose prose-neutral">
          <p className="text-concrete">
            GREENMARK Integrated Services (&quot;we&quot;, &quot;us&quot;) is committed to
            protecting your privacy. This page is a placeholder for your
            privacy policy. Please replace this content with your full privacy
            policy, including: information we collect, how we use it, cookies,
            third-party sharing, data retention, your rights (including under
            applicable Saudi and international regulations), and contact
            details for privacy inquiries.
          </p>
          <p className="mt-4 text-concrete">
            For questions, contact us at{" "}
            <a href="mailto:info@gmis.sa" className="text-primary hover:underline">
              info@gmis.sa
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
