import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinistriesOrDepartmentsComponent } from './ministries-or-departments.component';

describe('MinistriesOrDepartmentsComponent', () => {
  let component: MinistriesOrDepartmentsComponent;
  let fixture: ComponentFixture<MinistriesOrDepartmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinistriesOrDepartmentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MinistriesOrDepartmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
