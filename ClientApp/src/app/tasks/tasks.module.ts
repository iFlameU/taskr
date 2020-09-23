import {NgModule} from '@angular/core';
import {TasksComponent} from './tasks.component';
import {AddTaskButtonComponent} from './add-task-button/add-task-button.component';
import {RouterModule} from '@angular/router';;
import { AddTaskFormComponent } from './add-task-form/add-task-form.component'

@NgModule({
  declarations: [
    TasksComponent
    ,
    AddTaskButtonComponent
,
    AddTaskFormComponent
  ],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: TasksComponent,
        children: [
          {
            path: 'add-task-form',
            component: AddTaskFormComponent
          },
          {
            path: '**',
            component: AddTaskButtonComponent
          }
        ]
      }
    ])
  ],
  exports: [
    TasksComponent
  ]
})
export class TasksModule {
}
