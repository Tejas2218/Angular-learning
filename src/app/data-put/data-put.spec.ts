import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataPut } from './data-put';

describe('DataPut', () => {
  let component: DataPut;
  let fixture: ComponentFixture<DataPut>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataPut]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataPut);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
