import Link from "next/link";
import Image from "next/image";
import type { Locale } from "@/i18n/config";
import type { getTranslations } from "@/lib/translations";
import { site } from "@/lib/content";

type T = ReturnType<typeof getTranslations>;

export function Footer({ locale, t }: { locale: Locale; t: T }) {
  const prefix = `/${locale}`;
  const footerLinks = {
    company: [
      { href: `${prefix}/about`, label: t.footer.companyOverview },
      { href: `${prefix}/about#vision`, label: t.footer.visionMission },
      { href: `${prefix}/services`, label: t.footer.services },
      { href: `${prefix}/projects`, label: t.footer.projects },
      { href: `${prefix}/contact`, label: t.footer.careers },
    ],
    legal: [{ href: `${prefix}/privacy`, label: t.footer.privacyPolicy }],
  };

  return (
    <footer className="bg-primary-dark text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="lg:col-span-2">
            <Link
              href={`/${locale}/`}
              className="inline-block hover:opacity-90 transition-opacity"
            >
              <Image
                src="/logo.png"
                alt="Green Mark Integrated Services"
                width={500}
                height={88}
                className="h-20 w-auto object-contain [filter:brightness(0)_invert(1)]"
              />
            </Link>
            <p className="mt-3 text-sm text-white/80 max-w-md">
              {t.site.tagline}. {t.site.taglineShort}
            </p>
          </div>
          <div>
            <h3 className="font-heading font-semibold text-white mb-4">
              {t.footer.quickLinks}
            </h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/80 hover:text-sand"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-heading font-semibold text-white mb-4">
              {t.footer.contact}
            </h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <strong className="text-white">KSA</strong>
                <br />
                {t.site.addressKSA}
                <br />
                <a href={`tel:${site.phoneKSA.replace(/\s/g, "")}`} className="hover:text-sand">
                  {t.site.phoneKSA}
                </a>
                <br />
                <a href={`mailto:${site.email}`} className="hover:text-sand">
                  {t.site.email}
                </a>
              </li>
              <li className="pt-2">
                <strong className="text-white">Canada</strong>
                <br />
                {t.site.addressCanada}
                <br />
                <a href={`tel:${site.phoneCanada.replace(/\s/g, "")}`} className="hover:text-sand">
                  {t.site.phoneCanada}
                </a>
                <br />
                <a
                  href={`https://${site.websiteCanada}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-sand"
                >
                  {t.site.websiteCanada}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/20 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/70">
            © {new Date().getFullYear()} {t.site.name}. {t.footer.copyright}{" "}
            {t.site.cr}
          </p>
          <div className="flex gap-6">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-white/70 hover:text-sand"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
