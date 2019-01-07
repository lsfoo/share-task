import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path: 'jobs',
  loadChildren: './jobs/jobs.module#JobsModule'
}, {
  path: 'tasks',
  loadChildren: './tasks/tasks.module#TasksModule'
}, {
  path: '', loadChildren: './tasks/tasks.module#TasksModule'
}, {
  path: '', loadChildren: './users/users.module#UsersModule'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
