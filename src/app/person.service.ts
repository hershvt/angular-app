import { person } from './person.model';
import { Injectable } from '@angular/core';

@Injectable()
export class PersonService{
person1: person;
person2: person;
person3: person;

persons = [];

constructor() { 
    this.person1= new person(1,'Pappu','gokuldham');
    this.person2= new person(1,'Daya','gokuldham');
    this.person3= new person(1,'Babita','gokuldham');
    this.persons.push(this.person1);
    this.persons.push(this.person2);
    this.persons.push(this.person3);
    }
    getPersons(): person[] {
       return this.persons;
    }
    addPerson( person : person):void {
     this.persons.push(person);

    }
}