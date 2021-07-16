import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  constructor() { }

  options=[
    {id:1,name:'dev'},
    {id:2,name:'learning'},
    {id:3,name:'business'}
  ];
  ngOnInit(): void {
  }
  log(name){
    console.log(name)
  }
  onSubmit(form){
    console.log(form)
  }
}
