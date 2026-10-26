// Local editorial images generated for SØNDER (see public/images/).
// Named sonder-01..sonder-16.jpg. All full-color, no filters applied.

const BASE = "/images";

export const heroImages = [
  `${BASE}/sonder-01.jpg`,
  `${BASE}/sonder-02.jpg`,
  `${BASE}/sonder-03.jpg`,
  `${BASE}/sonder-04.jpg`,
  `${BASE}/sonder-05.jpg`,
  `${BASE}/sonder-06.jpg`,
  `${BASE}/sonder-07.jpg`,
  `${BASE}/sonder-08.jpg`,
  `${BASE}/sonder-09.jpg`,
  `${BASE}/sonder-10.jpg`,
  `${BASE}/sonder-11.jpg`,
  `${BASE}/sonder-12.jpg`,
  `${BASE}/sonder-13.jpg`,
  `${BASE}/sonder-14.jpg`,
  `${BASE}/sonder-15.jpg`,
  `${BASE}/sonder-16.jpg`,
] as const;

/** Deterministic image for a product index (0-based). */
export const productImage = (index: number) =>
  heroImages[((index % 12) + 12) % 12];

/** Deterministic gallery images for a product index (3 images, in-bounds). */
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
  `${BASE}/sonder-13.jpg`,
  `${BASE}/sonder-14.jpg`,
  `${BASE}/sonder-15.jpg`,
  `${BASE}/sonder-16.jpg`,
] as const;

/** Philosophy section image. */
export const philosophyImage = `${BASE}/sonder-01.jpg`;