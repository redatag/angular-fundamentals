import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-event-thumbnail',
  templateUrl: './event-thumbnail.component.html' 
})
export class EventThumbnailComponent implements OnInit {

  @Input() eventData:any
  //Add  input decorator to property == eventData

  @Output() eventClick = new EventEmitter();
  // decorate our created eventClick property with Output decorator and set it to  new EventEmiter
  constructor() { }

  ngOnInit(): void {
  }
  handleClickMe(){
    //each time buttun clicked emit an event and we can pass our data along with this event
    
    this.eventClick.emit(this.eventData.name);
    //this.eventClick.emit('data from child to parent'); 
    //we emit a string "data from child to parent"
    //this child comp now outputting this data when button clicked and parent can listen to that data
    // to enabel paren use data from child  we add another event handler to the child comp element in our parent comp
    //   <app-event-thumbnail (eventClick)="handleEventClicked($event)" [eventData]="firstEvent"></app-event-thumbnail>
    //(eventClick)="handleEventClicked()"  eventClick bind to eventClick output property in child comp
    //when eventClick fired in child copm it call the handleEventClicked($event) method in parent comp
    //$event  refer to the data emited with our event (in our case is string "data from child to parent")
// you can pass only  single value with event emitter , if y need to sentd n=multiple value y can wrap them in object
    // console.log('Clicked');
  }

  logFoo(){
    console.log('Foo');
    
  }
  
}
