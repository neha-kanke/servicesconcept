import { Component, OnInit } from '@angular/core';
import { Itodo } from '../../models/todolist';
import { TodoservicesService } from '../todoservices.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {
todosarray:Array<Itodo>=[]  // services madun aalela data strore karayasthi property pahije

  constructor(private _todoservice:TodoservicesService) { }

  ngOnInit(): void {
    this.todosarray=this._todoservice.getalltodoitem()
    

}
}
