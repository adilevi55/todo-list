import { Component, OnInit, Input, SimpleChanges, OnChanges, OnDestroy } from '@angular/core';
import { Task } from 'src/app/models/task';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { DeleteTaskService } from 'src/app/services/delete-task.service';



@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnChanges, OnInit {
  constructor(private deleteTaskService: DeleteTaskService) { }
  @Input() taskAdd: Task;
  taskList: Task[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.taskAdd.currentValue !== undefined) {
      this.taskList.push(changes.taskAdd.currentValue);
      localStorage.setItem("taskList", JSON.stringify(this.taskList));
    }
  }
  ngOnInit() {
    let localStorageTask = JSON.parse(localStorage.getItem("taskList"));
    if (localStorageTask !== null && localStorageTask.length > 0) {
      this.taskList = localStorageTask;
    }
  }
  onChange(event, task) {
    if (event.checked === true) {
      task.completed = true;
    }
    else {
      task.completed = false;
    }
    localStorage.setItem("taskList", JSON.stringify(this.taskList));
  }

  deleteTask(deletedTask) {
    this.deleteTaskService.deleteTask(deletedTask, this.taskList)
  }
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.taskList, event.previousIndex, event.currentIndex);
  }
}
