import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CompletedPage } from './completed/completed.page';
import { TodoPage } from './todo/todo.page';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [AppComponent, CompletedPage, TodoPage, NavbarComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
