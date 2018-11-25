import { Component, OnInit } from '@angular/core';
import { HubConnection, HubConnectionBuilder } from '@aspnet/signalr';

@Component({
  selector: 'app-echo-signalr',
  templateUrl: './echo-signalr.component.html',
  styleUrls: ['./echo-signalr.component.scss']
})
export class EchoSignalrComponent implements OnInit {

  public hubConnection: HubConnection;
  public messages: string[] = [];
  public message: string;

  constructor() { }

  ngOnInit() {

    const builder = new HubConnectionBuilder();
    this.hubConnection = builder.withUrl('/hubs/echo').build();
    // this.hubConnection.start();
    this.hubConnection.start().then(() => {
      console.log('Connection started');
    })
    .catch(err => { console.error(err); });

    this.hubConnection.on('Send', (message) => {
      this.messages.push(message);
    });
  }

  send() {
    // message sent from the client to the server
    this.hubConnection.invoke('Echo', this.message);
    this.message = '';
  }

}
