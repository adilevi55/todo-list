import { Injectable } from '@angular/core';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class DeleteTaskService {

  deleteTask(deletedTask,taskList):Task[] {
    for (let i = 0; i <= taskList.length; i++) {
      if (deletedTask == taskList[i]) {
        taskList.splice(i, 1);
        localStorage.setItem("taskList", JSON.stringify(taskList));
        return taskList
      }
    }
  }
}
