import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreReportsV1Component } from './store-reports-v1.component';

describe('StoreReportsV1Component', () => {
  let component: StoreReportsV1Component;
  let fixture: ComponentFixture<StoreReportsV1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreReportsV1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoreReportsV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
