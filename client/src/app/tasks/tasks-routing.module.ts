import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { TaskListComponent } from './task-list/task-list.component'
import { TaskDetailsComponent } from './task-details/task-details.component'

const routes: Routes = [
  { path: '', component: TaskListComponent },
  { path: 'task-details/:id', component: TaskDetailsComponent }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasksRoutingModule {}
