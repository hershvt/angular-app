import { Component, OnInit } from '@angular/core';
import { CourseService } from '../service/course.service';
import { Course } from '../model/course.model';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  

  courses : Course[] = [];

  
   
  constructor(public courseService : CourseService) {


  }

  ngOnInit(): void {
   this.courseService.getCourses() .subscribe(resp => {
     console.log(resp);
     this.courses=resp.body;
   });
  }

  
}
