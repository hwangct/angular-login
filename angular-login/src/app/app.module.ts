import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';

import {
  MatButtonModule,
  MatSidenavModule,
  MatCheckboxModule,
  MatInputModule,
  MatToolbarModule,
  MatCardModule,
} from '@angular/material';
import { LoginComponent } from './login/login.component';
import { LoginFieldComponent } from './login/login-field/login-field.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginFieldComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatToolbarModule,
    MatCardModule,
    FormsModule,
    MatIconModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
