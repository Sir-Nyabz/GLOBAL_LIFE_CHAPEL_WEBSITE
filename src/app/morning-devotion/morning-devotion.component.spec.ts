import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MorningDevotionComponent } from './morning-devotion.component';

describe('MorningDevotionComponent', () => {
  let component: MorningDevotionComponent;
  let fixture: ComponentFixture<MorningDevotionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MorningDevotionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MorningDevotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
