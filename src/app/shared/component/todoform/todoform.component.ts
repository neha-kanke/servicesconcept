import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Itodo } from '../../models/todolist';
import { UuidService } from '../uuid.service';
import { TodoservicesService } from '../todoservices.service';

@Component({
  selector: 'app-todoform',
  templateUrl: './todoform.component.html',
  styleUrls: ['./todoform.component.scss']
})
export class TodoformComponent implements OnInit {
  todoform !:FormGroup

  constructor(private _todoservice:TodoservicesService,
     private _generateUUID:UuidService) { }

  ngOnInit(): void {
    this.todoform=new FormGroup({
      todoitem:new FormControl(null,[Validators.required])

    })
  } 
  onaddtodo(){
    if(this.todoform.valid){
      console.log(this.todoform)
      // console.log(this.todoform.value)
      let val=this.todoform.value
      // here api call to //post method /// data srvices / back end send karacha ahe 
      // let todoobj=this.todoform.value  /// object cha ahe alreday ata mannun psred
      // todoobj.todoid=this._generateUUID.generateUUID()  fisrt way 
      let todoobj:Itodo={...this.todoform.value, todoid:this._generateUUID.generateUUID()}   /// second way solve
      console.log(todoobj)
      this._todoservice.addtodoitem(todoobj)
      
    }
    this.todoform.reset()

  }


}
