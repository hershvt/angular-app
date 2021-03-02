import { Component, OnInit } from '@angular/core';
import { person } from '../person.model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  person1: person;
  person2: person; 
  person3: person;

  persons=[];

  constructor() {
    this.person1 = new person(1,'Pappu','Ghodbandar');
    this.person2 = new person(7,'Jethiya','Gokuldham');
    this.person3 = new person(27,'Babita','Thane');

   }

  ngOnInit(): void {
    this.persons.push(this.person1);
    this.persons.push(this.person2);
    this.persons.push(this.person3);
  

    
  }

}

