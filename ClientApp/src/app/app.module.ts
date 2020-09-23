import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import {TasksModule} from './tasks/tasks.module';
import {TasksComponent} from './tasks/tasks.component';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    TasksModule,
    RouterModule.forRoot([
      {
        path: '',
        pathMatch: 'full',
        component: TasksComponent
      },
      {
        path: '**',
        component: TasksComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
