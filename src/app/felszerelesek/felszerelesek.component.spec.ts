import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FelszerelesekComponent } from './felszerelesek.component';

describe('FelszerelesekComponent', () => {
  let component: FelszerelesekComponent;
  let fixture: ComponentFixture<FelszerelesekComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FelszerelesekComponent]
    });
    fixture = TestBed.createComponent(FelszerelesekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
