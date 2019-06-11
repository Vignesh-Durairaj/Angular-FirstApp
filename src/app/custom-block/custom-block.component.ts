import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-block',
  template: `
    <h2>Hello. {{ blockTitle }}</h2>
    <ul>
      <li *ngFor="let employee of employees">{{ employee.name }}<{{ employee.shortName }}> -- {{ employee.almaMater }}</li>
    </ul>
  `, 
  styleUrls: ['./custom-block.component.css']
})
export class CustomBlockComponent implements OnInit {

  blockTitle: String;
  employees: object;

  constructor() {
    this.blockTitle = `This is a new-custom element created!`;
    this.employees = [
      {
        name: 'Vignesh Durairaj', 
        shortName: 'Vikhi',
        almaMater: 'Anna University, Chennai'
      }, {
        name: 'Durairaj Subramaniam', 
        shortName: 'Durai', 
        almaMater: 'Madurai Kamarajar University, Madurai'
      }, {
        name: 'Shantha Kumari Durairaj', 
        shortName: 'Chitra', 
        almaMater: 'Bharathiar University, Coimbatore'
      } 
    ];
   }

  ngOnInit() {
  }

}
