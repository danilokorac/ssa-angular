import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { UsersComponent } from './users/users.component';
const routes: Routes = [
  {path:'users', component: UsersComponent},
  {path:'', redirectTo:'/users', pathMatch:'full'},
  {path:'todo/:userId', component: TodoComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
