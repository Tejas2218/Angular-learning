import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aip } from './aip';

describe('Aip', () => {
  let component: Aip;
  let fixture: ComponentFixture<Aip>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Aip]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Aip);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
