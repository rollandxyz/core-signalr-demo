import { Component, OnInit } from '@angular/core';
import { HubConnection, HubConnectionBuilder } from '@aspnet/signalr';

@Component({
  selector: 'app-welcome-signalr',
  templateUrl: './welcome-signalr.component.html',
  styleUrls: ['./welcome-signalr.component.scss']
})
export class WelcomeSignalrComponent implements OnInit {

  messages: string[] = [];
  constructor() { }

  ngOnInit() {
    const connection = new HubConnectionBuilder().withUrl('/hub').build();
    connection.on('welcome', (messages: any[]) => {
      this.messages = messages.map(message => message.message);
    });
    connection.start().catch(err => console.error(err.toString()));
  }

}
