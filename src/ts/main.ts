import { Activity } from "./class/Activity";
import { Event } from "./class/Event";
import { Task } from "./class/Task";

(function(Activity, Event){

  Event.click('add-task', agregar);
  
  let contenedor = Event.getContainer('list');
  console.log(contenedor);

  function agregar(){
    
    let taskName: string = Event.getValue('#taskName');
    let task = new Task(taskName);

    if(taskName == ''){
      console.log('Input your task');
    }
    else {
      Activity.addTask(task);
      Activity.showTask(Activity.tasks, 'list');
      Event.clearForm('form');
    }

    if(contenedor.hasChildNodes()){
      Event.click("remove-task", eliminar);
      // let element = document.getElementById("remove-task");
      // element.onclick = eliminar;

      function eliminar(){
        //let containerElement = element.parentNode;
        let id = task.id;
        Activity.removeTask(id);
        Activity.showTask(Activity.tasks, 'list');
      }
    }
  }
})(new Activity, new Event);