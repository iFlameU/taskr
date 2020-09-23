import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BackEnd} from '../../services/backend.service';
import {Task} from '../../models/Task';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-task-form',
  templateUrl: './add-task-form.component.html',
  styleUrls: ['./add-task-form.component.css']
})
export class AddTaskFormComponent implements OnInit {
  taskForm: FormGroup;

  constructor(
    formBuilder: FormBuilder,
    private backend: BackEnd,
    private router: Router
  ) {
    this.taskForm = formBuilder.group({
      name: ['', Validators.required],
      description: ['']
    });
  }

  ngOnInit() {
  }

  addTask() {
    this.backend.addTask(new Task(this.taskForm.getRawValue()))
      .subscribe(
        _ => {this.router.navigateByUrl('').then(); },
        error => alert(error.message)
      );
  }
}
