export const placeholderPhotoIds = ["01", "02", "03", "04"] as const;

export const travelDestinations = [
  {
    slug: "barcelona",
    name: "Barcelona",
    description: "Gaudi geometry, coastal light, and late-night streets.",
    detailDescription:
      "Mediterranean light, layered streets, and bold geometry.",
    notes: "Selection in progress. Final edit will focus on rhythm and scale.",
    heroId: "01",
  },
  {
    slug: "valencia",
    name: "Valencia",
    description: "Market rhythm, modern lines, and soft Mediterranean light.",
    detailDescription: "Coastal calm, market energy, and modern lines.",
    notes: "Selection in progress. Edit will balance architecture and street.",
    heroId: "02",
  },
  {
    slug: "madrid",
    name: "Madrid",
    description: "City scale, quiet alleys, and the energy between them.",
    detailDescription: "City pace, quiet corners, and human moments.",
    notes: "Selection in progress. Edit will emphasize contrast and color.",
    heroId: "03",
  },
  {
    slug: "granada",
    name: "Granada",
    description: "Warm tones, layered history, and late afternoon light.",
    detailDescription: "Courtyards, texture, and the rhythm of old streets.",
    notes: "Selection in progress. Edit will focus on light and detail.",
    heroId: "04",
  },
  {
    slug: "cordoba",
    name: "Cordoba",
    description: "Quiet corners, white walls, and subtle color.",
    detailDescription: "Patios, geometry, and slow movement through the city.",
    notes: "Selection in progress. Edit will emphasize calm and texture.",
    heroId: "01",
  },
  {
    slug: "malaga",
    name: "Malaga",
    description: "Coastal pace, bright afternoons, and street life.",
    detailDescription: "Sea air, sunlight, and the energy of open streets.",
    notes: "Selection in progress. Edit will balance color and shadow.",
    heroId: "02",
  },
  {
    slug: "sevilla",
    name: "Sevilla",
    description: "Shadows, arches, and warm evening light.",
    detailDescription: "Courtyards, movement, and strong contrast.",
    notes: "Selection in progress. Edit will highlight rhythm and form.",
    heroId: "03",
  },
  {
    slug: "paris",
    name: "Paris",
    description: "Stone textures, quiet mornings, and soft light.",
    detailDescription: "Wide avenues, small gestures, and layered scenes.",
    notes: "Selection in progress. Edit will refine tone and pacing.",
    heroId: "04",
  },
] as const;

export type TravelDestination = (typeof travelDestinations)[number];
