import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { TaskListComponent } from './task-list/task-list.component'
import { TaskDetailsComponent } from './task-details/task-details.component'
import { TaskAddComponent } from './task-add/task-add.component'

const routes: Routes = [
  { path: "", component: TaskListComponent },
  { path: "task-details/:id", component: TaskDetailsComponent },
  { path: "task-add", component: TaskAddComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasksRoutingModule { }
