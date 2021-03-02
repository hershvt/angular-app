import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CoursesComponent } from './courses/courses.component';
import { DemoComponent } from './demo/demo.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { PersonFormComponent } from './person-form/person-form.component';
import { PersonService } from './person.service';


import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CourseInfoComponent } from './course-info/course-info.component';
import { HomeComponent } from './home/home.component';
import { TaskComponent } from './task/task.component';
import { TasklistComponent } from './tasklist/tasklist.component';
import { CourseService } from './service/course.service';
import {HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CoursesComponent,
    DemoComponent,
    FooterComponent,
    PersonFormComponent,
    PageNotFoundComponent,
    CourseInfoComponent,
    HomeComponent,
    TaskComponent,
    TasklistComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
    ],
  providers: [PersonService, CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
