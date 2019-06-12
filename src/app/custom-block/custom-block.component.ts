import { Component, OnInit, NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-custom-block',
  template: `
    <div (click)=clear()>
    <h2>Hello. {{ blockTitle }}</h2>
    <br />
    Enter a text here : <input type='text' [(ngModel)]='textVal' /><br />
    The value is : {{ textVal }} <br />
    <br />
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
  textVal: String;

  constructor(private http: HttpClient) {
    this.blockTitle = `This is a new-custom element created!`;
  }

  showEmployee(employee) {
    this.employeeDetails = `Employee : ${employee.name}, who is also known to be ${employee.shortName} has been graduated from "${employee.almaMater}"`;
  }

  clear() {
    this.employeeDetails = '';
  }

  ngOnInit(): void {
    this.http.get<Object>('./assets/data/employees.json').subscribe (
      data => {this.employees = data}
    );
  }

}
