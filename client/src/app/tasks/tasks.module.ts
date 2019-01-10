import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker'
import { defineLocale } from 'ngx-bootstrap/chronos'
import { zhCnLocale } from 'ngx-bootstrap/locale'

import { TimepickerModule } from 'ngx-bootstrap/timepicker'
import { TabsModule } from 'ngx-bootstrap/tabs'

import { TasksRoutingModule } from './tasks-routing.module'
import { TaskListComponent } from './task-list/task-list.component'
import { TaskDetailsComponent } from './task-details/task-details.component'
import { TaskAddComponent } from './task-add/task-add.component'
defineLocale('zh-cn', zhCnLocale)

@NgModule({
  declarations: [TaskListComponent, TaskDetailsComponent, TaskAddComponent],
  imports: [
    CommonModule,
    TasksRoutingModule,
    BsDatepickerModule.forRoot(),
    TimepickerModule.forRoot(),
    TabsModule.forRoot()
  ]
})
export class TasksModule {}
