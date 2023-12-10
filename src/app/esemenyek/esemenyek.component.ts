import { Component } from '@angular/core';

@Component({
  selector: 'app-esemenyek',
  templateUrl: './esemenyek.component.html',
  styleUrls: ['./esemenyek.component.css']
})
export class EsemenyekComponent {
  events = [
    { label: 'Esemény 1', value: 'event1' },
    { label: 'Esemény 2', value: 'event2' },
  ];
}
