import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MatButtonModule,
  MatSidenavModule,
  MatListModule,
  MatCheckboxModule,
  MatInputModule,
  MatToolbarModule,
  MatCardModule,
  MatIconModule,
  MatNativeDateModule
} from '@angular/material';

import { LoginComponent } from './login/login.component';
import { LoginFieldComponent } from './login/login-field/login-field.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

/**
 * Routing
 * 
 * 1) pathMatch is required with redirectTo
 * 2) pathMatch should be set to full when path is set to ''
 * 3) wildcard case when path is set to '**'
 */
const appRoutes: Routes = [
  { path: '', redirectTo: '/second', pathMatch: 'full', data: { title: 'Default Component' } },
  { path: 'first', component: FirstComponent, data: { title: 'First Component' } },
  { path: 'second', component: SecondComponent, data: { title: 'Second Component' } },
  {
    path: '**',
    component: PageNotFoundComponent,
    data: {
      title: 'Page Not Found'
    }
  }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginFieldComponent,
    NavigationComponent,
    FirstComponent,
    SecondComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    CommonModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatToolbarModule,
    MatNativeDateModule,
    MatCardModule,
    FormsModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    RouterModule.forRoot(
      appRoutes,
      { useHash: true }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
