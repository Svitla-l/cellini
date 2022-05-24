import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEtryComponent } from './admin-etry.component';

describe('AdminEtryComponent', () => {
  let component: AdminEtryComponent;
  let fixture: ComponentFixture<AdminEtryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminEtryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEtryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
