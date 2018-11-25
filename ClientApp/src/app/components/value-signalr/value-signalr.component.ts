import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-value-signalr',
  templateUrl: './value-signalr.component.html',
  styleUrls: ['./value-signalr.component.scss']
})
export class ValueSignalrComponent implements OnInit {
  values: string[];
  constructor() { }

  ngOnInit() {
  }

}
