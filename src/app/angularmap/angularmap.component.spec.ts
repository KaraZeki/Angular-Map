import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularmapComponent } from './angularmap.component';

describe('AngularmapComponent', () => {
  let component: AngularmapComponent;
  let fixture: ComponentFixture<AngularmapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularmapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
