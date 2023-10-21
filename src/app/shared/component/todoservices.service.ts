import { Injectable } from '@angular/core';
import { Itodo } from '../models/todolist';

@Injectable({
  providedIn: 'root'
})
export class TodoservicesService {
todoarray:Array<Itodo>=[
//  {
//   todoid:1,
//   todoitem:"angular"
//  }
]
  constructor() { }

  addtodoitem(todo:Itodo){   // form madhe data get karayasthi function write kele ahe 
    this.todoarray.push(todo)
  }
  getalltodoitem(){
    return this.todoarray
  }
}
