import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriqueMesuresComponent } from './historique-mesures.component';

describe('HistoriqueMesuresComponent', () => {
  let component: HistoriqueMesuresComponent;
  let fixture: ComponentFixture<HistoriqueMesuresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HistoriqueMesuresComponent]
    });
    fixture = TestBed.createComponent(HistoriqueMesuresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
