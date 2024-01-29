import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSeancePageComponent } from './update-seance-page.component';

describe('UpdateSeancePageComponent', () => {
  let component: UpdateSeancePageComponent;
  let fixture: ComponentFixture<UpdateSeancePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateSeancePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateSeancePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
