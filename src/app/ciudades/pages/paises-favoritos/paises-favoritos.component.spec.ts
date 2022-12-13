import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaisesFavoritosComponent } from './paises-favoritos.component';

describe('PaisesFavoritosComponent', () => {
  let component: PaisesFavoritosComponent;
  let fixture: ComponentFixture<PaisesFavoritosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaisesFavoritosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaisesFavoritosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
