import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { PersonService } from '../person.service';
import { person } from '../person.model';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css']
})
export class PersonFormComponent implements OnInit {
  mypersonService : PersonService;
  constructor( personService : PersonService ,public router : Router ) { 
    this.mypersonService = personService ;
  }
  
  ngOnInit(): void {
  }


  onFormSubmit(personForm: NgForm) {
  let Person = new person (personForm.value.id,personForm.value.name,personForm.value.Address);
  this.mypersonService.addPerson(Person);
  this.router.navigate(['Persons']);
  }
  
}
 