import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataPost } from './data-post';

describe('DataPost', () => {
  let component: DataPost;
  let fixture: ComponentFixture<DataPost>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataPost]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataPost);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
