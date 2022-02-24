import { Event } from "./Event";
import { Task } from "./Task";

export class Activity {
  tasks: Array<Task> = [];
  
  addTask(task: Task): any {
    return this.tasks.push(task);
  }

  showTask(tasks: Task[], container: string): void {
    let taskHTML: string = ``;
    for(let task of tasks){
      console.log(task);
      taskHTML += `
      <div class="elemento">
        <div class="contenedor-descripcion" id="${task.id}">
          <i class="fas fa-play"></i>
          <p id="remove-task">${task.name}</p>
        </div>
        <div class="contenedor-estado">
          <select class="estado">
            <option value="Realizado" selected>Realizado</option>
            <option value="Pendiente" selected>Pendiente</option>
          </select>
        </div>
      </div>`;
    }
    document.getElementById(container).innerHTML = taskHTML;
  }

  removeTask(id: number): void {
    let idRemove = this.tasks.findIndex(task => task.id == id);
    --idRemove;
    this.tasks.splice(idRemove, 1);
  }
}