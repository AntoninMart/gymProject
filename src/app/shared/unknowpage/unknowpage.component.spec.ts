import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnknowpageComponent } from './unknowpage.component';

describe('UnknowpageComponent', () => {
  let component: UnknowpageComponent;
  let fixture: ComponentFixture<UnknowpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [UnknowpageComponent]
});
    fixture = TestBed.createComponent(UnknowpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
