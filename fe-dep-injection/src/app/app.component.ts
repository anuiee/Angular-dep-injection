import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { EmployeeOfficialComponent } from './employee-official/employee-official.component';
import { EmployeePersonalComponent } from './employee-personal/employee-personal.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, EmployeeOfficialComponent,EmployeePersonalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'fe-dep-injection';
}
