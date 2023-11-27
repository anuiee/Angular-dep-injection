import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeService } from '../employee.service';


@Component({
  selector: 'app-employee-personal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee-personal.component.html',
  styleUrl: './employee-personal.component.scss'
})
export class EmployeePersonalComponent {

  employeePersonal: any[] = [];

  constructor(private empService : EmployeeService){}
  ngOnInit():void{
    // debugger
    this.employeePersonal = this.empService?.getEmpPersonal();
    console.log(this.employeePersonal);
    
  }
}
