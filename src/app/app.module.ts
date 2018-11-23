import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookService } from './book.service';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { LengthPipe } from './length.pipe';
import { AddBookComponent } from './addbook/addbook.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    DetailsComponent,
    LengthPipe,
    AddBookComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
