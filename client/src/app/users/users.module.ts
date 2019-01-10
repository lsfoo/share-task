import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { UsersRoutingModule } from './users-routing.module'
import { RegisterComponent } from './register/register.component'
import { LoginComponent } from './login/login.component';
import { JobListComponent } from './job-list/job-list.component'

@NgModule({
  declarations: [RegisterComponent, LoginComponent, JobListComponent],
  imports: [CommonModule, UsersRoutingModule]
})
export class UsersModule {}
