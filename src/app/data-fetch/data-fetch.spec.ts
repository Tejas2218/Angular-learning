import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataFetch } from './data-fetch';

describe('DataFetch', () => {
  let component: DataFetch;
  let fixture: ComponentFixture<DataFetch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataFetch]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataFetch);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
