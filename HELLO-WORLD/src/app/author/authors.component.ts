import { AuthorsService } from '../authors.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

  title='my title';
  courses;
  constructor(service:AuthorsService) {

    this.courses=service.getAuthors();

  }

  getCourses(){
    return this.courses;
  }
  getTitle(){
    return this.title;
  }
  ngOnInit(): void {
  }

}
