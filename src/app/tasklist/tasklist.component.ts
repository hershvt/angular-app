import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent implements OnInit {
  @Input() tasks=[];
  todaysDate: Date = new Date();
  constructor() { }

  ngOnInit(): void {
  }

}
