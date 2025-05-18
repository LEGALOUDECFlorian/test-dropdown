import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkedDropdownComponent } from './linked-dropdown.component';

describe('LinkedDropdownComponent', () => {
  let component: LinkedDropdownComponent;
  let fixture: ComponentFixture<LinkedDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinkedDropdownComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinkedDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
