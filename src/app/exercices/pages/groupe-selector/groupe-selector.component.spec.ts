import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupeSelectorComponent } from './groupe-selector.component';

describe('GroupeSelectorComponent', () => {
  let component: GroupeSelectorComponent;
  let fixture: ComponentFixture<GroupeSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GroupeSelectorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GroupeSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
