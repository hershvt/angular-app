import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from '../model/course.model';

@Injectable()
export class CourseService{

constructor(public http: HttpClient){

}



    getCourses() : Observable<HttpResponse<Course[]>>{
         return this.http.get<Course[]>('https://www.techskillsit.com/demo/courses',{observe : 'response'}); 
    }

    getCourse(id: Number){

    }
}