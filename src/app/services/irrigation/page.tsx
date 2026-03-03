import { Metadata } from "next";
import { ServiceDetailLayout } from "@/components/ServiceDetailLayout";
import { getTranslations } from "@/lib/translations";
import { defaultLocale } from "@/i18n/config";

export const metadata: Metadata = {
  title: "Irrigation & Water Management",
  description:
    "Smart irrigation design and installation, drainage, French drains. Water-efficient systems for KSA and GCC.",
};

export default async function IrrigationPage() {
  const t = getTranslations(defaultLocale);
  const s = t.serviceDetail.irrigation;
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
