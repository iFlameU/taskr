import {Injectable} from '@angular/core';
import { Task } from '../models/Task';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackEnd {

  constructor(
    private httpClient: HttpClient
  ) {}

  addTask(task: Task) {
    return this.httpClient.post('api/addTask', task);
  }
}
