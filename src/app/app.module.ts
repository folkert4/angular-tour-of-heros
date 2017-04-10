import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'; // <-- NGModel lives here!
import { HeroDetailComponent } from './hero-detail.component';

import { AppComponent }  from './app.component';

@NgModule({
  imports: [
      BrowserModule,
      FormsModule // <-- import forms module to allow binding with [(NGModel)]!
    ],
  declarations: [
    AppComponent,
    HeroDetailComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
