import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChristForAllComponent } from './christ-for-all.component';

describe('ChristForAllComponent', () => {
  let component: ChristForAllComponent;
  let fixture: ComponentFixture<ChristForAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChristForAllComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChristForAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
