import { Metadata } from "next";
import { ServiceDetailLayout } from "@/components/ServiceDetailLayout";
import { getTranslations } from "@/lib/translations";
import { defaultLocale } from "@/i18n/config";

export const metadata: Metadata = {
  title: "Concrete & Hardscape",
  description:
    "Walkways, patios, driveways, retaining walls, structural concrete. Stamped, exposed aggregate, and broom finishes in Riyadh and KSA.",
};

export default async function ConcretePage() {
  const t = getTranslations(defaultLocale);
  const s = t.serviceDetail.concrete;
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
