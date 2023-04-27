import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedTheOrphansComponent } from './feed-the-orphans.component';

describe('FeedTheOrphansComponent', () => {
  let component: FeedTheOrphansComponent;
  let fixture: ComponentFixture<FeedTheOrphansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedTheOrphansComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeedTheOrphansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
