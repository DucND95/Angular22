import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public name = 'duc';
  public age = 16;
  public myColor = 'red';
  constructor() { }
  public sodem = 8;
  ngOnInit(): void {
  }
  resetName() {
    this.name = '';
  }
 
}
