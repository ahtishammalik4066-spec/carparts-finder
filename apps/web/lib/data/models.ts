import type { Model } from "@partfinder/shared";
import { slugify } from "../utils";
import { getMakeBySlug } from "./makes";

const CREATED_AT = "2024-01-01T00:00:00Z";

const MODELS_BY_MAKE: Record<string, string[]> = {
  toyota: ["Corolla", "Yaris", "Hilux", "Fortuner", "Land Cruiser", "Prado", "Vitz", "Passo"],
  honda: ["Civic", "City", "BR-V", "Vezel", "Accord"],
  suzuki: ["Alto", "Cultus", "Wagon R", "Swift", "Bolan", "Ravi", "Mehran"],
  nissan: ["Dayz", "Note", "X-Trail", "Sunny", "Juke"],
  mitsubishi: ["Lancer", "Pajero", "Outlander", "Mirage"],
  hyundai: ["Elantra", "Tucson", "Sonata", "Santro"],
  kia: ["Sportage", "Picanto", "Sorento", "Stonic"],
  daihatsu: ["Mira", "Move", "Cuore"],
  bmw: ["3 Series", "5 Series", "X1", "X5"],
  "mercedes-benz": ["C-Class", "E-Class", "GLA"],
  audi: ["A4", "Q5"],
  volkswagen: ["Golf", "Passat"],
  ford: ["Ranger", "Everest", "Figo"],
  chevrolet: ["Cruze", "Optra"],
  "land-rover": ["Range Rover", "Discovery"],
  mazda: ["323", "CX-5"],
  subaru: ["Impreza", "Forester"],
  isuzu: ["D-Max"],
  mg: ["HS", "ZS"],
  changan: ["Alsvin", "Karvaan"],
};

export const models: Model[] = Object.entries(MODELS_BY_MAKE).flatMap(([makeSlug, modelNames]) => {
  const make = getMakeBySlug(makeSlug);
  if (!make) return [];
  return modelNames.map((name) => ({
    id: `${makeSlug}-${slugify(name)}`,
    makeId: make.id,
    name,
    slug: slugify(name),
    createdAt: CREATED_AT,
  }));
});

export function getModelsByMakeId(makeId: string): Model[] {
  return models.filter((m) => m.makeId === makeId);
}

export function getModelBySlug(slug: string): Model | undefined {
  return models.find((m) => m.slug === slug);
}

export function getModelById(id: string): Model | undefined {
  return models.find((m) => m.id === id);
}
