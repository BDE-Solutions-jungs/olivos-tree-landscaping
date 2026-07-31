export const BUSINESS = {
  name: "Olivos Tree Service Plus Landscaping LLC",
  phone: "(317) 529-6350",
  address: "278 N East St, Plainfield, IN 46168",
  hours: "Monday to Saturday, 7:00 a.m. - 7:00 p.m.",
  rating: "5.0 stars from 29 Google reviews",
  languages: ["English", "Spanish"],
  serviceArea: [
    "Plainfield, Indiana",
    "Hendricks County",
    "Surrounding central Indiana areas",
  ],
  propertyTypes: ["Residential", "Commercial"],
  estimates: "Free written estimates, honest pricing, no surprise charges.",
} as const;

export const SERVICES = [
  { name: "Trimming & pruning", description: "Skilled pruning that improves the health, shape and safety of your trees." },
  { name: "Tree removal", description: "Safe removal of hazardous, damaged or dead trees with the right equipment." },
  { name: "Stump grinding", description: "Stumps ground down and the ground left ready for sod or beds." },
  { name: "Emergency service", description: "Fast response after storms, fallen limbs or property damage." },
  { name: "Landscaping", description: "Mulch, shrubs, stone edging, planting and seasonal cleanups." },
  { name: "Lot clearing", description: "Brush and lot clearing for construction or new projects." },
] as const;
