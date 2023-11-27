import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeOfficialComponent } from './employee-official.component';

describe('EmployeeOfficialComponent', () => {
  let component: EmployeeOfficialComponent;
  let fixture: ComponentFixture<EmployeeOfficialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeOfficialComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmployeeOfficialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
