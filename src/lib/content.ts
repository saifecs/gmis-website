export const site = {
  name: "GREENMARK Integrated Services",
  nameAr: "شركة جرينمارك إنتجريتد سيرفيسز",
  tagline: "Building the Future of Outdoor Environments",
  taglineAr: "نبني مستقبل البيئات الخارجية",
  cr: "7053403460",
  email: "info@gmis.sa",
  phoneKSA: "+966 54 292 2256",
  phoneCanada: "+1 403-614-8476",
  websiteCanada: "www.easylandscape.ca",
  addressKSA: "Riyadh, Saudi Arabia",
  addressCanada: "Calgary, Alberta, Canada",
} as const;

export const nav = {
  home: "Home",
  about: "About",
  services: "Services",
  landscaping: "Landscaping",
  concrete: "Concrete & Hardscape",
  irrigation: "Irrigation",
  maintenance: "Maintenance",
  projects: "Projects",
  sectors: "Sectors",
  hseq: "HSEQ",
  sustainability: "Sustainability",
  contact: "Contact",
} as const;

export const stats = [
  { value: "270+", label: "Projects Delivered" },
  { value: "5000+", label: "Trees Planted" },
  { value: "8+", label: "Years Proven Experience" },
  { value: "0.00", label: "LTIFR" },
] as const;

export const servicesOverview = [
  {
    id: "landscaping",
    title: "Landscaping",
    slug: "/services/landscaping",
    description:
      "Soft and hard landscaping, sod, planting, mulch, artificial grass, and full design-to-install support.",
  },
  {
    id: "concrete",
    title: "Concrete & Hardscape",
    slug: "/services/concrete",
    description:
      "Walkways, patios, driveways, retaining walls, structural concrete, steps, curbs, and decorative finishes.",
  },
  {
    id: "irrigation",
    title: "Irrigation",
    slug: "/services/irrigation",
    description:
      "Smart irrigation design and installation, drainage, French drains, and water management systems.",
  },
  {
    id: "maintenance",
    title: "Maintenance",
    slug: "/services/maintenance",
    description:
      "Contract-based landscape maintenance, lawn care, fertilization, seasonal clean-ups, and O&M.",
  },
] as const;

export const vision2030 = {
  headline: "Supporting Saudi Vision 2030",
  body: "Delivering sustainable, water-efficient, high-quality environments aligned with national transformation goals.",
} as const;

export const cta = {
  primary: "Request a Consultation",
  secondary: "Get in Touch",
} as const;

export const coreValues = [
  "Excellence in Delivery",
  "Safety & Responsibility",
  "Integrity & Trust",
  "Sustainability",
  "Local Empowerment",
  "Innovation",
] as const;

export const sectors = [
  "Real estate developers",
  "Master-planned community developers",
  "Commercial property owners",
  "Municipal & public sector entities",
  "Hospitality developers",
  "Vision 2030 giga-project contractors",
  "High-end residential clients",
  "Property managers",
  "Facility management companies",
] as const;

export const hseqKpis = [
  { label: "LTIFR", value: "0.00" },
  { label: "Major incidents", value: "Zero" },
  { label: "Safety culture", value: "Daily Toolbox Talks" },
] as const;
