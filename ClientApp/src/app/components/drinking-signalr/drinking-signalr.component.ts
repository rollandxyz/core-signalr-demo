import { Component, OnInit } from '@angular/core';
import { HubConnection, HubConnectionBuilder } from '@aspnet/signalr';
import { Md5 } from 'ts-md5';

@Component({
  selector: 'app-drinking-signalr',
  templateUrl: './drinking-signalr.component.html',
  styleUrls: ['./drinking-signalr.component.scss']
})
export class DrinkingSignalrComponent implements OnInit {

  public group: any;
  public _hubConnection: HubConnection;
  public groupKey = '';
  public email = '';
  constructor() { }

  ngOnInit() {
    const builder = new HubConnectionBuilder();
    this._hubConnection = builder.withUrl('/hubs/drinking').build();

    this._hubConnection.on('Group', (data: any) => {
      this.group = data;
    });

    this._hubConnection.start()
      .then(() => {
        console.log('Hub connection started');
      })
      .catch(err => {
        console.log('Error while establishing connection');
      });
      console.log(this._hubConnection);
  }
  createOrJoin() {
    console.log('this.groupKey, this.email', this.groupKey, this.email);
    this._hubConnection.invoke('CreateOrJoin', this.groupKey, this.email);
  }

  readyStart(): boolean {
    return !this.group.hasStarted;
    // && this._hubConnection.connection.connectionId === this.group.owner;
  }
  drink() {
      this._hubConnection.invoke('Drink');
  }

  start() {
      this._hubConnection.invoke('Start');
  }

  clear() {
      console.log('test');
      console.log(this.group);
      this.group = null;
      console.log(this.group);
  }
  getGravatarByEmail(email: string): string {
      if (!email) {
        email = ' ';
      }
      return 'http://www.gravatar.com/avatar/' + Md5.hashStr(email) + '?s=210&d=mm';
  }

}
