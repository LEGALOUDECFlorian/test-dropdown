import { Component, ElementRef, OnInit, ViewChild, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownService } from '../../services/dropdown.service';
import { CategoryOption, DropdownSelection, SubcategoryOption } from '../../models/data.models';

@Component({
  selector: 'app-linked-dropdown',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './linked-dropdown.component.html',
  styleUrl: './linked-dropdown.component.scss'
})
export class LinkedDropdownComponent implements OnInit {
  // Injection du service
  private dropdownService = inject(DropdownService);
  
  // Références DOM pour les dropdowns
  @ViewChild('categoryDropdown', { static: false }) categoryDropdownRef?: ElementRef;
  @ViewChild('subcategoryDropdown', { static: false }) subcategoryDropdownRef?: ElementRef;
  
  // État des dropdowns (ouvert/fermé)
  isOpenCategory = signal<boolean>(false);
  isOpenSubcategory = signal<boolean>(false);
  
  // État de la sélection
  selection = signal<DropdownSelection>({
    category: null,
    subcategory: null
  });
  
  // Libellé par défaut pour les dropdowns
  readonly DEFAULT_PLACEHOLDER = 'Sélectionner';
  
  // Signaux pour les données
  categories = signal<CategoryOption[]>([]);
  
  // Signal calculé pour les sous-catégories basé sur la catégorie sélectionnée
  subcategories = computed(() => {
    const categoryId = this.selection().category?.id;
    return categoryId ? this.dropdownService.getSubcategoriesByCategoryId(categoryId) : [];
  });
  
  // Libellés affichés dans les dropdowns
  categoryLabel = computed(() => this.selection().category?.label || this.DEFAULT_PLACEHOLDER);
  subcategoryLabel = computed(() => this.selection().subcategory?.label || this.DEFAULT_PLACEHOLDER);
  
  ngOnInit(): void {
    // Chargement des données initiales
    this.categories.set(this.dropdownService.getCategories());
    
    // Ajout d'un écouteur pour fermer les dropdowns lorsqu'on clique en dehors
    document.addEventListener('click', this.handleClickOutside.bind(this));
  }
  
  /**
   * Gère le clic en dehors des dropdowns pour les fermer
   */
  handleClickOutside(event: MouseEvent): void {
    if (this.categoryDropdownRef && 
        !this.categoryDropdownRef.nativeElement.contains(event.target) &&
        this.subcategoryDropdownRef && 
        !this.subcategoryDropdownRef.nativeElement.contains(event.target)) {
      this.isOpenCategory.set(false);
      this.isOpenSubcategory.set(false);
    }
  }
  
  /**
   * Bascule l'état d'ouverture du dropdown de catégories
   */
  toggleCategoryDropdown(): void {
    this.isOpenCategory.update(current => !current);
    if (this.isOpenCategory()) {
      this.isOpenSubcategory.set(false);
    }
  }
  
  /**
   * Bascule l'état d'ouverture du dropdown de sous-catégories
   */
  toggleSubcategoryDropdown(): void {
    // Ne permet l'ouverture que si une catégorie est sélectionnée
    if (this.selection().category) {
      this.isOpenSubcategory.update(current => !current);
      if (this.isOpenSubcategory()) {
        this.isOpenCategory.set(false);
      }
    }
  }
  
  /**
   * Sélectionne une catégorie
   */
  selectCategory(category: CategoryOption): void {
    this.selection.update(current => {
      // Si la catégorie change, réinitialiser la sous-catégorie
      if (!current.category || current.category.id !== category.id) {
        return { category, subcategory: null };
      }
      return { ...current, category };
    });
    
    this.isOpenCategory.set(false);
  }
  
  /**
   * Sélectionne une sous-catégorie
   */
  selectSubcategory(subcategory: SubcategoryOption): void {
    this.selection.update(current => ({ ...current, subcategory }));
    this.isOpenSubcategory.set(false);
  }
}