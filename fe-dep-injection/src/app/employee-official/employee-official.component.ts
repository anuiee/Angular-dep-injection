import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-official',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee-official.component.html',
  styleUrl: './employee-official.component.scss'
})
export class EmployeeOfficialComponent {
  employeeOfficial: any[] = [];

  constructor(private empService : EmployeeService){}
  ngOnInit():void{
    // debugger
    this.employeeOfficial = this.empService?.getEmpOfficial();
    console.log(this.employeeOfficial);
    
  }
}
