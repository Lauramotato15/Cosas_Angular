import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasiPagesComponent } from './basi-pages.component';

describe('BasiPagesComponent', () => {
  let component: BasiPagesComponent;
  let fixture: ComponentFixture<BasiPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BasiPagesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasiPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
