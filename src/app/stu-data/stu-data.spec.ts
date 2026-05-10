import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StuData } from './stu-data';

describe('StuData', () => {
  let component: StuData;
  let fixture: ComponentFixture<StuData>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StuData]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StuData);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
