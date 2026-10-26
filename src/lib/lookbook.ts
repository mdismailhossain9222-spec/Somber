import { lookbookImage } from "@/lib/images";

export type LookbookFrame = {
  id: string;
  title: string;
  chapter: string;
  image: string;
  tall?: boolean;
};

export const lookbook: LookbookFrame[] = [
  {
    id: "void-01",
    title: "Void, standing",
    chapter: "Chapter 01",
    image: lookbookImage(0),
    tall: true,
  },
  {
    id: "void-02",
    title: "Street meridian",
    chapter: "Chapter 01",
    image: lookbookImage(1),
  },
  {
    id: "craft-01",
    title: "Tailor’s hour",
    chapter: "Chapter 02",
    image: lookbookImage(2),
    tall: true,
  },
  {
    id: "craft-02",
    title: "Black on black",
    chapter: "Chapter 02",
    image: lookbookImage(3),
  },
  {
    id: "light-01",
    title: "Chalk light",
    chapter: "Chapter 03",
    image: lookbookImage(4),
    tall: true,
  },
  {
    id: "light-02",
    title: "After the sitting",
    chapter: "Chapter 03",
    image: lookbookImage(5),
  },
  {
    id: "city-01",
    title: "Copenhagen dusk",
    chapter: "Chapter 04",
    image: lookbookImage(6),
  },
  {
    id: "city-02",
    title: "The long coat",
    chapter: "Chapter 04",
    image: lookbookImage(7),
    tall: true,
  },
  {
    id: "form-01",
    title: "Second skin",
    chapter: "Chapter 05",
    image: lookbookImage(8),
  },
  {
    id: "form-02",
    title: "Atelier quiet",
    chapter: "Chapter 05",
    image: lookbookImage(9),
    tall: true,
  },
  {
    id: "night-01",
    title: "Noir study",
    chapter: "Chapter 06",
    image: lookbookImage(10),
  },
  {
    id: "night-02",
    title: "Last light",
    chapter: "Chapter 06",
    image: lookbookImage(11),
    tall: true,
  },
];
