import { Component, Output } from '@angular/core';
import { Task } from 'src/app/models/task';
import { GetYesterdayService } from 'src/app/services/get-yesterday.service';
import { EventEmitter } from '@angular/core';

export interface TaskIcons {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  @Output() SendTask:EventEmitter<Task> = new EventEmitter();
  public task = new Task();

  constructor(private getYesterdayService:GetYesterdayService) { }
 
  myFilter =(d: Date): boolean => {
    let yesterday:Date = this.getYesterdayService.getYesterday();
    return d >= yesterday;
  }

  async addTask(){
  await this.SendTask.emit(this.task);
   this.task = new Task();
  }

}
