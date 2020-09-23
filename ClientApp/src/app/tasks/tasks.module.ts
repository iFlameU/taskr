import {NgModule} from '@angular/core';
import {TasksComponent} from './tasks.component';
import {AddTaskButtonComponent} from './add-task-button/add-task-button.component';
import {RouterModule} from '@angular/router';
import { AddTaskFormComponent } from './add-task-form/add-task-form.component';
import {ReactiveFormsModule} from '@angular/forms';

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
            path: '',
            pathMatch: 'full',
            component: AddTaskButtonComponent
          },
          {
            path: 'add-task-form',
            component: AddTaskFormComponent
          },
          {
            path: '**',
            redirectTo: ''
          }
        ]
      }
    ]),
    ReactiveFormsModule
  ],
  exports: [
    TasksComponent
  ]
})
export class TasksModule {
}
