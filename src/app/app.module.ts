import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CommentsService} from './comments.service';
import {HttpClientModule} from '@angular/common/http';
import {AppchildComponent} from './child-app.component';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatTooltipModule} from '@angular/material/tooltip';


import { AppComponent } from './app.component';
import 'hammerjs';


@NgModule({
  declarations: [
    AppComponent,
    AppchildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTooltipModule,
    MatCheckboxModule

  ],
  providers: [CommentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
