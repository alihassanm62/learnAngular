import { CoursesService } from './courses.service';
import { Component } from '@angular/core';

@Component({
  selector:'courses',
  template:'<h2>Title: {{getTitle()}}</h2><ul ><li *ngFor="let course of courses">{{course}}</li></ul>'
})

export  class CoursesComponent{

    private title:string='List of courses';
    getTitle(){
      return this.title;
    }
    /**
     *
     */
     courses;
    constructor(service:CoursesService) {
         this.courses=service.getCourses();
    }

}
