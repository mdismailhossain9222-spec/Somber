// High-end clothing-only editorial photography from Unsplash.
// All full-color, no filters applied. NO humans/models — only garments.

const UNSPLASH = "https://images.unsplash.com";

export const clothingImages = [
  `${UNSPLASH}/photo-1567401893414-76b7b1e5a7a5?q=80&w=1000`, // Clothes on rack
  `${UNSPLASH}/photo-1584346133934-a3afd2a33c4c?q=80&w=1000`, // Folded shirts
  `${UNSPLASH}/photo-1551028719-00167b16eac5?q=80&w=1000`, // Leather jacket on hanger
  `${UNSPLASH}/photo-1576566588028-4147f3842f27?q=80&w=1000`, // Folded sweater
  `${UNSPLASH}/photo-1595777457583-95e059d581b8?q=80&w=1000`, // Dress on mannequin
  `${UNSPLASH}/photo-1624378439575-d8705ad7ae80?q=80&w=1000`, // Trousers/Pants
  `${UNSPLASH}/photo-1523381210434-271e8be1f52b?q=80&w=1000`, // Hanging colorful shirts
  `${UNSPLASH}/photo-1489987707025-afc232f7ea0f?q=80&w=1000`, // Clothing rack minimal
  `${UNSPLASH}/photo-1445205170230-053b83016050?q=80&w=1000`, // Clothing details
  `${UNSPLASH}/photo-1558769132-cb1aea458c5e?q=80&w=1000`, // Sweaters folded
  `${UNSPLASH}/photo-1521572163474-6864f9cf17ab?q=80&w=1000`, // T-shirt flat lay
  `${UNSPLASH}/photo-1583743814966-8936f5b7be1a?q=80&w=1000`, // T-shirt on hanger
] as const;

/** Deterministic image for a product index (0-based). */
export const productImage = (index: number) =>
  clothingImages[((index % 12) + 12) % 12];

/** Deterministic gallery images for a product index. */
export const productGallery = (index: number) => [
  clothingImages[12 + (index % 4)],
  clothingImages[12 + ((index + 1) % 4)],
  clothingImages[12 + ((index + 2) % 4)],
];

/** Deterministic image for a lookbook frame index. */
export const lookbookImage = (index: number) =>
  clothingImages[index % 12];

/** About story chapter images (clothing-only). */
export const aboutImages = [
  `${UNSPLASH}/photo-1567401893414-76b7b1e5a7a5?q=80&w=1000`,
  `${UNSPLASH}/photo-1489987707025-afc232f7ea0f?q=80&w=1000`,
  `${UNSPLASH}/photo-1445205170230-053b83016050?q=80&w=1000`,
  `${UNSPLASH}/photo-1558769132-cb1aea458c5e?q=80&w=1000`,
] as const;

/** Philosophy section image. */
export const philosophyImage = `${UNSPLASH}/photo-1567401893414-76b7b1e5a7a5?q=80&w=1000`;