import { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { getTranslations } from "@/lib/translations";
import { site } from "@/lib/content";
import type { Locale } from "@/i18n/config";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = getTranslations(locale);
  return {
    title: t.contact.title,
    description: t.contact.subtitle,
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const t = getTranslations(locale);

  return (
    <>
      <section className="bg-primary-dark py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white">
            {t.contact.title}
          </h1>
          <p className="mt-4 text-lg text-white/90 max-w-2xl">
            {t.contact.subtitle}
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <h2 className="font-heading text-2xl font-bold text-neutral-900">
                {t.contact.headOffice}
              </h2>
              <address className="mt-4 text-concrete not-italic">
                <p>{t.site.addressKSA}</p>
                <p className="mt-2">
                  <a href={`tel:${site.phoneKSA.replace(/\s/g, "")}`} className="text-primary hover:underline">
                    {t.site.phoneKSA}
                  </a>
                </p>
                <p>
                  <a href={`mailto:${site.email}`} className="text-primary hover:underline">
                    {t.site.email}
                  </a>
                </p>
              </address>

              <h2 className="font-heading text-2xl font-bold text-neutral-900 mt-12">
                {t.contact.canadaOffice}
              </h2>
              <address className="mt-4 text-concrete not-italic">
                <p>{t.site.addressCanada}</p>
                <p className="mt-2">
                  <a href={`tel:${site.phoneCanada.replace(/\s/g, "")}`} className="text-primary hover:underline">
                    {t.site.phoneCanada}
                  </a>
                </p>
                <p>
                  <a href={`https://${site.websiteCanada}`} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    {t.site.websiteCanada}
                  </a>
                </p>
              </address>
            </div>

            <ContactForm t={t} />
          </div>
        </div>
      </section>
    </>
  );
}
