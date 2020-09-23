import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-task-form',
  templateUrl: './add-task-form.component.html',
  styleUrls: ['./add-task-form.component.css']
})
export class AddTaskFormComponent implements OnInit {
  taskForm: FormGroup;

  constructor(
    formBuilder: FormBuilder
  ) {
    this.taskForm = formBuilder.group({
      name: ['', Validators.required],
      description: ['']
    });
  }

  ngOnInit() {
  }

  addTask() {
  }
}
