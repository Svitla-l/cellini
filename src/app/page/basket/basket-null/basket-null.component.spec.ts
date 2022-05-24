import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasketNullComponent } from './basket-null.component';

describe('BasketNullComponent', () => {
  let component: BasketNullComponent;
  let fixture: ComponentFixture<BasketNullComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasketNullComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasketNullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
