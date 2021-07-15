import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css']
})
export class ZippyComponent implements OnInit {

  constructor() { }

  expanded:boolean;
  @Input('heading') heading;

  ngOnInit(): void {
  }
  toggle(){
    this.expanded=!this.expanded;
    console.log(this.expanded)
  }
}
