import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeancePageComponent } from './seance-page.component';

describe('SeancePageComponent', () => {
  let component: SeancePageComponent;
  let fixture: ComponentFixture<SeancePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeancePageComponent]
    });
    fixture = TestBed.createComponent(SeancePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
