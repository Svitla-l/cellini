import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RememberEmailComponent } from './remember-email.component';

describe('RememberEmailComponent', () => {
  let component: RememberEmailComponent;
  let fixture: ComponentFixture<RememberEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RememberEmailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RememberEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
