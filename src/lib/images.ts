// Real high-fashion editorial photography from Unsplash.
// All full-color, no filters applied.

const UNSPLASH = "https://images.unsplash.com";

export const heroImages = [
  `${UNSPLASH}/photo-1483985988355-763728e1935b?q=80&w=1000`,
  `${UNSPLASH}/photo-1539008835657-9e8e9680c956?q=80&w=1000`,
  `${UNSPLASH}/photo-1515886657613-9f3515b0c78f?q=80&w=1000`,
  `${UNSPLASH}/photo-1550614000-4b95d99fbfa3?q=80&w=1000`,
  `${UNSPLASH}/photo-1490481651871-ab68de25d43d?q=80&w=1000`,
  `${UNSPLASH}/photo-1509631179647-0177331693ae?q=80&w=1000`,
  `${UNSPLASH}/photo-1581044777550-4cfa60707c03?q=80&w=1000`,
  `${UNSPLASH}/photo-1529139574466-a303027c1d8b?q=80&w=1000`,
  `${UNSPLASH}/photo-1512436991641-6745cdb1723f?q=80&w=1000`,
  `${UNSPLASH}/photo-1542291026-7eec264c27ff?q=80&w=1000`,
  `${UNSPLASH}/photo-1617137968427-85924c800a22?q=80&w=1000`,
  `${UNSPLASH}/photo-1488161628813-04466f872be2?q=80&w=1000`,
] as const;

/** Deterministic image for a product index (0-based). */
export const productImage = (index: number) =>
  heroImages[((index % 12) + 12) % 12];

/** Deterministic gallery images for a product index. */
export const productGallery = (index: number) => [
  heroImages[12 + (index % 4)],
  heroImages[12 + ((index + 1) % 4)],
  heroImages[12 + ((index + 2) % 4)],
];

/** Deterministic image for a lookbook frame index. */
export const lookbookImage = (index: number) =>
  heroImages[index % 12];

/** About story chapter images. */
export const aboutImages = [
  `${UNSPLASH}/photo-1483985988355-763728e1935b?q=80&w=1000`,
  `${UNSPLASH}/photo-1515886657613-9f3515b0c78f?q=80&w=1000`,
  `${UNSPLASH}/photo-1490481651871-ab68de25d43d?q=80&w=1000`,
  `${UNSPLASH}/photo-1509631179647-0177331693ae?q=80&w=1000`,
] as const;

/** Philosophy section image. */
export const philosophyImage = `${UNSPLASH}/photo-1483985988355-763728e1935b?q=80&w=1000`;