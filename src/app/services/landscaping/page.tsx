import { Metadata } from "next";
import { ServiceDetailLayout } from "@/components/ServiceDetailLayout";
import { getTranslations } from "@/lib/translations";
import { defaultLocale } from "@/i18n/config";

export const metadata: Metadata = {
  title: "Landscaping Services",
  description:
    "Soft and hard landscaping: sod, planting, mulch, artificial grass. Design coordination and installation for developers and commercial parks in KSA.",
};

export default async function LandscapingPage() {
  const t = getTranslations(defaultLocale);
  const s = t.serviceDetail.landscaping;
  return (
    <ServiceDetailLayout
      title={s.title}
      description={s.description}
      scope={s.scope}
      process={s.process}
      deliverables={s.deliverables}
      locale={defaultLocale}
      t={t}
    />
  );
}
