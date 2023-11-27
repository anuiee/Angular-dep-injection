import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }
  empOfficial : any[] = [
    {'Fullname':'Anushree Das','Id':'EMP001','Designation':'Web Developer Trainee'},
    {'Fullname':'Meera','Id':'EMP002','Designation':'Software Engineer '},
    {'Fullname':'John','Id':'EMP003','Designation':'Software Tester '}
  ];

  getEmpOfficial(): any[]{
    return this.empOfficial;
  }

  empPersonal : any[] = [
    {'Id':'EMP001','Fullname':'Anushree Das','Place':'Malappuram','gender':'Female'},
    {'Id':'EMP002','Fullname':'Meera','Place':'Kottayam','gender':'Female'},
    {'Id':'EMP003','Fullname':'John','Place':'Calicut','gender':'Male'},
  ];
  getEmpPersonal(): any[]{
    return this.empPersonal;
  }
}
