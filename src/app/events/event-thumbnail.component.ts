import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-event-thumbnail',
  templateUrl: './event-thumbnail.component.html' 
})
export class EventThumbnailComponent implements OnInit {

  @Input() eventData:any
  //Add  input decorator to property == eventData
  constructor() { }

  ngOnInit(): void {

  }

  
}
