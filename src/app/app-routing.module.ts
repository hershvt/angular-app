import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { DemoComponent } from './demo/demo.component';
import { PersonFormComponent } from './person-form/person-form.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CourseInfoComponent } from './course-info/course-info.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path : '', redirectTo : '/Home', pathMatch : 'full'},
  {path : 'Home', component : HomeComponent},
  {path : 'Courses', component : CoursesComponent},
  {path : 'Course-info/:id', component : CourseInfoComponent},
  {path : 'Persons', component : DemoComponent,
  children:[ {path : 'Add-Person', component : PersonFormComponent}]
},
{path : '**', component : PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
