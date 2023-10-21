import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoformComponent } from './shared/component/todoform/todoform.component';
import { TodolistComponent } from './shared/component/todolist/todolist.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StdtableComponent } from './shared/component/stdtable/stdtable.component';
import { StdformComponent } from './shared/component/stdform/stdform.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoformComponent,
    TodolistComponent,
    StdtableComponent,
    StdformComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
