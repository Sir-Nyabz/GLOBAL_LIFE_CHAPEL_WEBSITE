import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Feed1000Component } from './feed1000.component';

describe('Feed1000Component', () => {
  let component: Feed1000Component;
  let fixture: ComponentFixture<Feed1000Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Feed1000Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Feed1000Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
