import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  val:Boolean = true
  val1 : Boolean = false

  val3:Boolean = true
  val4 : Boolean = false
  constructor() { }

  ngOnInit(): void {
  }
  toggleDropdown(){
    this.val = !this.val
    this.val1 = !this.val1
  }
  toggleDropdown2(){
    this.val3 = !this.val3
    this.val4 = !this.val4
  }
}
