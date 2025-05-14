import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreGenerateReportsv1Component } from './store-generate-reportsv1.component';

describe('StoreGenerateReportsv1Component', () => {
  let component: StoreGenerateReportsv1Component;
  let fixture: ComponentFixture<StoreGenerateReportsv1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreGenerateReportsv1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoreGenerateReportsv1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
