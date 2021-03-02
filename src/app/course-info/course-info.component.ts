import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-info',
  templateUrl: './course-info.component.html',
  styleUrls: ['./course-info.component.css']
})
export class CourseInfoComponent implements OnInit {
  title;  
  constructor(public actRoute : ActivatedRoute) { 
    this.title=actRoute.snapshot.params.id;
  }

  ngOnInit(): void {
  }

}
