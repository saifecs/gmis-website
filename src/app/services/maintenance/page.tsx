import { Metadata } from "next";
import { ServiceDetailLayout } from "@/components/ServiceDetailLayout";
import { getTranslations } from "@/lib/translations";
import { defaultLocale } from "@/i18n/config";

export const metadata: Metadata = {
  title: "Maintenance & O&M",
  description:
    "Contract-based landscape maintenance, lawn care, seasonal programs, irrigation O&M. Saudi Arabia and Canada.",
};

export default async function MaintenancePage() {
  const t = getTranslations(defaultLocale);
  const s = t.serviceDetail.maintenance;
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
