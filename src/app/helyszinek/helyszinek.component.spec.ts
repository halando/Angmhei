import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelyszinekComponent } from './helyszinek.component';

describe('HelyszinekComponent', () => {
  let component: HelyszinekComponent;
  let fixture: ComponentFixture<HelyszinekComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HelyszinekComponent]
    });
    fixture = TestBed.createComponent(HelyszinekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
