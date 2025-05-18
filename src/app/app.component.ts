import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinkedDropdownComponent } from './components/linked-dropdown/linked-dropdown.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, LinkedDropdownComponent],
  template: `
    <div class="container">
      <h1>Sélection de catégories</h1>
      <app-linked-dropdown></app-linked-dropdown>

      <div class="info-panel">
        <h2>Exemple de composant dropdown réactif avec Angular 19</h2>
        <p>Ce composant utilise les nouvelles fonctionnalités d'Angular 19:</p>
        <ul>
          <li>Signaux (_an_r/core)</li>
          <li>Control flow (if/for)</li>
          <li>Injection avec inject()</li>
          <li>ViewChild() pour les références</li>
          <li>Composants standalone</li>
        </ul>
      </div>
    </div>
  `,
  styles: [`
    .container {
      max-width: 800px;
      margin: 0 auto;
      padding: 20px;
      font-family: Arial, sans-serif;
    }
    
    h1 {
      color: #333;
      margin-bottom: 20px;
    }
    
    .info-panel {
      margin-top: 40px;
      padding: 20px;
      background-color: #f5f5f5;
      border-radius: 4px;
    }
    
    h2 {
      margin-top: 0;
      color: #555;
    }
    
    ul {
      margin-top: 10px;
    }
    
    li {
      margin-bottom: 5px;
    }
  `]
})
export class AppComponent {
  title = 'linked-dropdown-app';
}