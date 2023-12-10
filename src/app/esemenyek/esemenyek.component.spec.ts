import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsemenyekComponent } from './esemenyek.component';

describe('EsemenyekComponent', () => {
  let component: EsemenyekComponent;
  let fixture: ComponentFixture<EsemenyekComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EsemenyekComponent]
    });
    fixture = TestBed.createComponent(EsemenyekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
