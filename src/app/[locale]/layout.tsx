import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { getTranslations } from "@/lib/translations";
import { locales, type Locale } from "@/i18n/config";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!(locales as readonly string[]).includes(locale)) {
    notFound();
  }

  const localeTyped = locale as Locale;
  const t = getTranslations(localeTyped);

  return (
    <>
      <Header locale={localeTyped} t={t} />
      <main className="flex-1">{children}</main>
      <Footer locale={localeTyped} t={t} />
    </>
  );
}