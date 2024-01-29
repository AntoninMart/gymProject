import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSeancePageComponent } from './list-seance-page.component';

describe('ListSeancePageComponent', () => {
  let component: ListSeancePageComponent;
  let fixture: ComponentFixture<ListSeancePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListSeancePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListSeancePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
