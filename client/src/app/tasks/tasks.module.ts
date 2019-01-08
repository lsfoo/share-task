import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { TasksRoutingModule } from './tasks-routing.module'
import { TaskListComponent } from './task-list/task-list.component'
import { TaskDetailsComponent } from './task-details/task-details.component';
import { TaskAddComponent } from './task-add/task-add.component'

@NgModule({
  declarations: [TaskListComponent, TaskDetailsComponent, TaskAddComponent],
  imports: [CommonModule, TasksRoutingModule]
})
export class TasksModule {}
