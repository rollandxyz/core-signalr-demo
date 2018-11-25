import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeSignalrComponent } from './components/welcome-signalr/welcome-signalr.component';
import { ValueSignalrComponent } from './components/value-signalr/value-signalr.component';
import { EchoSignalrComponent } from './components/echo-signalr/echo-signalr.component';
import { DrinkingSignalrComponent } from './components/drinking-signalr/drinking-signalr.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeSignalrComponent,
    ValueSignalrComponent,
    EchoSignalrComponent,
    DrinkingSignalrComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
