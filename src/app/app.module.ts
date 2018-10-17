import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule} from '@angular/material/input';
import {   MatSelectModule } from '@angular/material/select';
import {  MatButtonModule} from '@angular/material/button';
import {   MatCheckboxModule} from '@angular/material/checkbox';
 import {   MatChipsModule } from '@angular/material/chips';
 import {   MatRadioModule } from '@angular/material/radio';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDividerModule} from '@angular/material/divider';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule,MatCardModule,
MatToolbarModule,MatIconModule,MatMenuModule} from '@angular/material';
import { ParticipantComponent } from './participant/participant.component';


const modules=[BrowserModule,
  AppRoutingModule,
  BrowserAnimationsModule,
  MatInputModule,
  MatSelectModule,
  MatButtonModule,
  MatCheckboxModule,
  MatChipsModule,
  ReactiveFormsModule,
MatRadioModule,
MatSlideToggleModule,
MatTooltipModule,
MatDividerModule,
MatDatepickerModule,
MatNativeDateModule,
MatCardModule,
MatToolbarModule,MatIconModule,MatMenuModule]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SettingsComponent,
    PageNotFoundComponent,
    ParticipantComponent,
    
  ],
  imports: [
    ...modules
  ],
  exports :[...modules],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
