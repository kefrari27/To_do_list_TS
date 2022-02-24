export class Task {
  static countOfActivity: number = 0;
  id: number;
  name: string;
  
  constructor(name: string){
    this.name = name;
    this.id = ++Task.countOfActivity;
  }
}