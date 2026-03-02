"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import type { Locale } from "@/i18n/config";
import type { getTranslations } from "@/lib/translations";
import { LocaleSwitcher } from "./LocaleSwitcher";

type T = ReturnType<typeof getTranslations>;

function buildNav(t: T, locale: Locale) {
  const prefix = `/${locale}`;
  return [
    { href: `${prefix}/`, label: t.nav.home },
    { href: `${prefix}/about`, label: t.nav.about },
    {
      href: `${prefix}/services`,
      label: t.nav.services,
      children: [
        { href: `${prefix}/services/landscaping`, label: t.nav.landscaping },
        { href: `${prefix}/services/concrete`, label: t.nav.concrete },
        { href: `${prefix}/services/irrigation`, label: t.nav.irrigation },
        { href: `${prefix}/services/maintenance`, label: t.nav.maintenance },
      ],
    },
    { href: `${prefix}/projects`, label: t.nav.projects },
    { href: `${prefix}/sectors`, label: t.nav.sectors },
    { href: `${prefix}/hseq`, label: t.nav.hseq },
    { href: `${prefix}/sustainability`, label: t.nav.sustainability },
    { href: `${prefix}/contact`, label: t.nav.contact },
  ];
}

export function Header({
  locale,
  t,
}: {
  locale: Locale;
  t: T;
}) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const mainNav = buildNav(t, locale);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-neutral-100 shadow-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 lg:h-18 items-center justify-between">
          <Link
            href={`/${locale}/`}
            className="flex items-center gap-3 hover:opacity-90 transition-opacity"
          >
            <Image
              src="/logo.png"
              alt="Green Mark Integrated Services"
              width={220}
              height={72}
              className="h-14 sm:h-16 w-auto object-contain"
              priority
            />
          </Link>

          <div className="hidden lg:flex items-center gap-1" aria-label="Main">
            <nav className="flex items-center gap-1">
              {mainNav.map((item) =>
                item.children ? (
                  <div
                    key={item.href}
                    className="relative group"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <button
                      type="button"
                      className="px-4 py-3 text-sm font-medium text-neutral-900 hover:text-primary rounded-md"
                      aria-expanded={servicesOpen}
                    >
                      {item.label}
                    </button>
                    <div
                      className={`absolute top-full left-0 mt-0 w-56 rounded-card bg-white shadow-lg border border-neutral-100 py-2 rtl:left-auto rtl:right-0 ${
                        servicesOpen ? "block" : "hidden"
                      }`}
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-neutral-900 hover:bg-neutral-50 hover:text-primary"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="px-4 py-3 text-sm font-medium text-neutral-900 hover:text-primary rounded-md"
                  >
                    {item.label}
                  </Link>
                )
              )}
            </nav>
            <span className="mx-1 w-px self-stretch bg-neutral-200" aria-hidden />
            <LocaleSwitcher />
          </div>

          <div className="flex lg:hidden items-center gap-2">
            <LocaleSwitcher />
            <button
              type="button"
              className="p-2 rounded-md text-neutral-900 hover:bg-neutral-50"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {mobileOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {mobileOpen && (
          <nav
            className="lg:hidden py-4 border-t border-neutral-100"
            aria-label="Mobile"
          >
            <ul className="space-y-1">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block px-4 py-3 text-neutral-900 hover:bg-neutral-50 rounded-md"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.children?.map((child) => (
                    <li key={child.href} className="ps-6 rtl:ps-0 rtl:pe-6">
                      <Link
                        href={child.href}
                        className="block px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-50 rounded-md"
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </li>
              ))}
            </ul>
            <div className="mt-3 px-4 pt-3 border-t border-neutral-100">
              <p className="text-xs font-medium text-neutral-500 mb-2">{locale === "ar" ? "اللغة" : "Language"}</p>
              <LocaleSwitcher />
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
