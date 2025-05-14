import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreViewReportsv1Component } from './store-view-reportsv1.component';

describe('StoreViewReportsv1Component', () => {
  let component: StoreViewReportsv1Component;
  let fixture: ComponentFixture<StoreViewReportsv1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreViewReportsv1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoreViewReportsv1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
