import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCityDetailComponent } from './edit-city-detail.component';

describe('EditCityDetailComponent', () => {
  let component: EditCityDetailComponent;
  let fixture: ComponentFixture<EditCityDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCityDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCityDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
