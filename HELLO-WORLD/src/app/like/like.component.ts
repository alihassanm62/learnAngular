import { Component, OnInit, ViewEncapsulation,Input, Output } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css'],
  encapsulation:ViewEncapsulation.Emulated
})
export class LikeComponent implements OnInit {

  @Input('likesCount') likesCount:number;
  @Input('isActive') liked:boolean;
  @Output('likeArgs') number:number;

  constructor() { }

  ngOnInit(): void {
  }
  onLikeClick(){
    this.liked=!this.liked;
    if(this.liked){
      this.likesCount++;
    }else{
      this.likesCount--;
    }
  }
}
