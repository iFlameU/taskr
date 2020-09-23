import {NgModule} from '@angular/core';
import {TasksComponent} from './tasks.component';
import { AddTaskButtonComponent } from './add-task-button/add-task-button.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    TasksComponent
,
    AddTaskButtonComponent
  ],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: TasksComponent,
        children: [
          {
            path: '',
            component: AddTaskButtonComponent
          }]
      }
    ])
  ],
  exports: [
    TasksComponent
  ]
})
export class TasksModule {
}
