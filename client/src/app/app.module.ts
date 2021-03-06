import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import {HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import {DataService} from './services/data.service';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent],

})
export class AppModule { }
