import { Component } from '@angular/core';
import { Task } from 'src/app/models/task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TODO';
  taskGoingToAdd:Task;
  onAddTask(newTask):void{
    this.taskGoingToAdd = newTask;
  }

}
