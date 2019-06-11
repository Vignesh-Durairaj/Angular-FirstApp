import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-block',
  template: `<h2>Hello. {{ blockTitle }}</h2>`, 
  styleUrls: ['./custom-block.component.css']
})
export class CustomBlockComponent implements OnInit {

  blockTitle = `This is a customer element created!`;
  constructor() { }

  ngOnInit() {
  }

}
