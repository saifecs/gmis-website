import { Metadata } from "next";
import { ServiceDetailLayout } from "@/components/ServiceDetailLayout";
import { getTranslations } from "@/lib/translations";
import type { Locale } from "@/i18n/config";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = getTranslations(locale);
  return {
    title: t.serviceDetail.maintenance.title,
    description: t.serviceDetail.maintenance.description,
  };
}

export default async function MaintenancePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const t = getTranslations(locale);
  const s = t.serviceDetail.maintenance;

  return (
    <ServiceDetailLayout
      title={s.title}
      description={s.description}
      scope={s.scope}
      process={s.process}
      deliverables={s.deliverables}
      locale={locale}
      t={t}
    />
  );
}
