import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FotoKontoComponent } from './foto-konto.component';

describe('FotoKontoComponent', () => {
  let component: FotoKontoComponent;
  let fixture: ComponentFixture<FotoKontoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FotoKontoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FotoKontoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
