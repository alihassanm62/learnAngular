import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {

  constructor() { }
  myvalue='';
  clicked=true;
  class="btn btn-danger";
  ngOnInit(): void {
  }
  changeButton(){
    this.clicked=!this.clicked;
    this.class=this.clicked?"btn btn-success":"btn btn-danger";
  }
}
