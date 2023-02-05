import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurGeneralOverseerComponent } from './our-general-overseer.component';

describe('OurGeneralOverseerComponent', () => {
  let component: OurGeneralOverseerComponent;
  let fixture: ComponentFixture<OurGeneralOverseerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurGeneralOverseerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurGeneralOverseerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
