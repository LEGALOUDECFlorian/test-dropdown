// Définition des modèles de données pour notre application

/**
 * Interface pour les options du premier niveau (catégories)
 */
export interface CategoryOption {
  id: number;
  label: string;
}

/**
 * Interface pour les options du second niveau (sous-catégories)
 */
export interface SubcategoryOption {
  id: number;
  categoryId: number; // Référence à la catégorie parente
  label: string;
}

/**
 * Type pour la sélection actuelle
 */
export interface DropdownSelection {
  category: CategoryOption | null;
  subcategory: SubcategoryOption | null;
}