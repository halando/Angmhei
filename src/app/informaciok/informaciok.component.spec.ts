import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformaciokComponent } from './informaciok.component';

describe('InformaciokComponent', () => {
  let component: InformaciokComponent;
  let fixture: ComponentFixture<InformaciokComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InformaciokComponent]
    });
    fixture = TestBed.createComponent(InformaciokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
