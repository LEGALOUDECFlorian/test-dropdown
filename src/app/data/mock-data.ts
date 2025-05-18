import { CategoryOption, SubcategoryOption } from "../models/data.models";

/**
 * Données de test pour les catégories
 */
export const CATEGORIES: CategoryOption[] = [
  { id: 1, label: 'Électronique' },
  { id: 2, label: 'Vêtements' },
  { id: 3, label: 'Alimentation' },
  { id: 4, label: 'Maison & Jardin' },
  { id: 5, label: 'Sports & Loisirs' }
];

/**
 * Données de test pour les sous-catégories
 */
export const SUBCATEGORIES: SubcategoryOption[] = [
  // Sous-catégories pour Électronique (id: 1)
  { id: 101, categoryId: 1, label: 'Téléphones' },
  { id: 102, categoryId: 1, label: 'Ordinateurs' },
  { id: 103, categoryId: 1, label: 'Accessoires' },
  { id: 104, categoryId: 1, label: 'Audio & Vidéo' },
  
  // Sous-catégories pour Vêtements (id: 2)
  { id: 201, categoryId: 2, label: 'Hommes' },
  { id: 202, categoryId: 2, label: 'Femmes' },
  { id: 203, categoryId: 2, label: 'Enfants' },
  { id: 204, categoryId: 2, label: 'Chaussures' },
  
  // Sous-catégories pour Alimentation (id: 3)
  { id: 301, categoryId: 3, label: 'Fruits & Légumes' },
  { id: 302, categoryId: 3, label: 'Viandes' },
  { id: 303, categoryId: 3, label: 'Produits laitiers' },
  { id: 304, categoryId: 3, label: 'Boissons' },
  
  // Sous-catégories pour Maison & Jardin (id: 4)
  { id: 401, categoryId: 4, label: 'Meubles' },
  { id: 402, categoryId: 4, label: 'Décoration' },
  { id: 403, categoryId: 4, label: 'Jardinage' },
  { id: 404, categoryId: 4, label: 'Cuisine' },
  
  // Sous-catégories pour Sports & Loisirs (id: 5)
  { id: 501, categoryId: 5, label: 'Équipement sportif' },
  { id: 502, categoryId: 5, label: 'Camping' },
  { id: 503, categoryId: 5, label: 'Jeux & Jouets' },
  { id: 504, categoryId: 5, label: 'Livres & Musique' }
];