import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http"

import { AppComponent } from './app.component';
import { UseHttpExampleComponent } from './use-http-example/use-http-example.component';
import { HttpMapServiceComponent } from './http-map-service/http-map-service.component';

@NgModule({
  declarations: [
    AppComponent,
    UseHttpExampleComponent,
    HttpMapServiceComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
