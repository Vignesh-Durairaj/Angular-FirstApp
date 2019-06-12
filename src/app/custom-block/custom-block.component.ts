import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-block',
  template: `
    <div (click)=clear()>
    <h2>Hello. {{ blockTitle }}</h2>
    <ul>
      <li 
        *ngFor = "let emp of employees" 
        (mouseover) = showEmployee(emp)
        [style.backgroundColor] = "emp.gender === 'M' ? '#90E4F9' : '#EFB6E6'">
        {{ emp.name }}<{{ emp.shortName }}> -- {{ emp.almaMater }}
      </li>
    </ul>
    <span *ngIf=employeeDetails>{{ employeeDetails }}</span>
    </div>
  `, 
  styleUrls: ['./custom-block.component.css']
})
export class CustomBlockComponent implements OnInit {

  blockTitle: String;
  employees: object;
  employeeDetails: String;

  constructor() {
    this.blockTitle = `This is a new-custom element created!`;
    this.employees = [
      {
        name: 'Vignesh Durairaj', 
        shortName: 'Vikhi',
        almaMater: 'Anna University, Chennai',
        gender: 'M'
      }, {
        name: 'Durairaj Subramaniam', 
        shortName: 'Durai', 
        almaMater: 'Madurai Kamarajar University, Madurai', 
        gender: 'M'
      }, {
        name: 'Shantha Kumari Durairaj', 
        shortName: 'Chitra', 
        almaMater: 'Bharathiar University, Coimbatore', 
        gender: 'F'
      } 
    ];
   }

   showEmployee(employee) {
    this.employeeDetails = `Employee : ${employee.name}, who is also known to be ${employee.shortName} has been graduated from "${employee.almaMater}"`;
   }

   clear() {
     this.employeeDetails = '';
   }
  ngOnInit() {
  }

}
