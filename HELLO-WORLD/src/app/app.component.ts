import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @Input('format') inputFormat;
  courses;
  ViewType='lidfsdfsdst';
  tweet={
    body:'tweet body goes here..',
    likesCount:10,
    isActive:true
  }
  title = 'Angular App';
  post={
    title:"my Title",
isFavourite:false
  }
  onFavouriteChange( eventArgs){
console.log('onFavouriteChange ',eventArgs)
  }
  onAdd(){
    this.courses.push({id:4,name:'course4'});
  }
  onChange(course){
    course.name='change in the name'
  }
  loadCourses(){
    this.courses=[
      {id:1,name:'course1'},
      {id:2,name:'course2'},
      {id:3,name:'coures3'},
    ];
  }
  trackCourse(index,course){
    return course?course.id:undefined;
  }

}
