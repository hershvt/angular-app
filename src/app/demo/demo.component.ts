import { Component, OnInit } from '@angular/core';
import { person } from '../person.model';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  
persons = [];
constructor(personService : PersonService) {
  this.persons = personService.getPersons(); 
 
  }
  
  

  ngOnInit(): void {
  
  }

}
