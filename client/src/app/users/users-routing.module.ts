import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
<<<<<<< HEAD
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
=======
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
>>>>>>> 1f1d868e85d2863c2f9672fd07cd73728beff1c2

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register', component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
