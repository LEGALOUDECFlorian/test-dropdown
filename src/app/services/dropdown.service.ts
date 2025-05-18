import { Injectable, signal } from '@angular/core';
import { CategoryOption, SubcategoryOption } from '../models/data.models';
import { CATEGORIES, SUBCATEGORIES } from '../data/mock-data';

@Injectable({
  providedIn: 'root'
})
export class DropdownService {
  // Utilisation des signaux pour les données réactives
  private categories = signal<CategoryOption[]>([]);
  private subcategories = signal<SubcategoryOption[]>([]);
  
  constructor() {
    // Initialisation avec les données de test
    this.loadData();
  }
  
  /**
   * Charge les données depuis la source (mock pour l'instant)
   */
  loadData(): void {
    // Dans un cas réel, cela pourrait être un appel API
    this.categories.set(CATEGORIES);
    this.subcategories.set(SUBCATEGORIES);
  }
  
  /**
   * Retourne toutes les catégories
   */
  getCategories(): CategoryOption[] {
    return this.categories();
  }
  
  /**
   * Retourne les sous-catégories filtrées par catégorie
   */
  getSubcategoriesByCategoryId(categoryId: number | null): SubcategoryOption[] {
    if (categoryId === null) {
      return [];
    }
    return this.subcategories().filter(sub => sub.categoryId === categoryId);
  }
  
  /**
   * Récupère une catégorie par son ID
   */
  getCategoryById(id: number): CategoryOption | undefined {
    return this.categories().find(category => category.id === id);
  }
  
  /**
   * Récupère une sous-catégorie par son ID
   */
  getSubcategoryById(id: number): SubcategoryOption | undefined {
    return this.subcategories().find(subcategory => subcategory.id === id);
  }
}