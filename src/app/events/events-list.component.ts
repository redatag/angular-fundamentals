import { Component } from "@angular/core";


@Component({
    selector: 'events-list',
    templateUrl: './events-list.component.html'
})
export class EventsListComponent{
    firstEvent = {
        id: 1,
        name:'Angular connect',
        date: '20/10/2022',
        time: '8am', 
        price: 100.99,
        imageUrl: '/assets/images/angularconnect-shield.png',
        location: {address: '123 Main St', city: 'Salt Lake City, UT', country: 'USA'}
    }
    //pass data from event list comp to envent-thumbnail comp from parent to child
    //in chuld we define input decorator @Input()
    //<event-thumbnail [eventData]="firstEvent"></event-thumbnail>
    //"firstEvent" corresponds to firstEvent in parent comp ((or match tne name of member in our parent comp)
    //[eventData]  attribute corresponds to (or match tne name of)  our input property in child com @Input() eventData: any
    //[eventData]="firstEvent" mean that this component has an input parameter and we want to pass the value of "FirstEvent" from its parent component 

}