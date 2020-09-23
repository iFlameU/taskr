export class Task {
  name: string;
  description: string;

  constructor(newTask: Task) {
    this.name = newTask.name;
    this.description = newTask.description;
  }
}
