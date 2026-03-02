import { notFound } from "next/navigation";
import { locales, type Locale } from "@/i18n/config";
import { getTranslations } from "@/lib/translations";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

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
  if (!locales.includes(locale as Locale)) notFound();
  const t = getTranslations(locale as Locale);

  return (
    <>
      <Header locale={locale as Locale} t={t} />
      <main className="flex-1">{children}</main>
      <Footer locale={locale as Locale} t={t} />
    </>
  );
}
