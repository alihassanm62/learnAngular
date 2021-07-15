import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {
  @Input('is-favourite') isFavourite:boolean;
  @Output()  change=new EventEmitter();
  constructor() { }
  myvalue='';


  class="btn btn-danger";
  ngOnInit(): void {
  }
  changeButton(){
    this.isFavourite=!this.isFavourite;
    this.class=this.isFavourite?"btn btn-success":"btn btn-danger";
    this.change.emit({newValue: this.isFavourite});
  }
}
