import { Component } from '@angular/core';
import { Task } from './task.model';



@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent {
  tasks: Task[] = [];

  constructor() {}


  addTask() {
    const newTask = new Task('Title', 'DueDate', 'Priority', 'Status');

    this.tasks.push(newTask);
    console.log(newTask);
  }
}
