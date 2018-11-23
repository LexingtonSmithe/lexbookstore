import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {DetailsComponent} from './details/details.component';
import {AddBookComponent} from './addbook/addbook.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'details/:id', component: DetailsComponent},
  {path: 'newBook', component: AddBookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
