import { Component, OnInit } from '@angular/core';
import { Istd } from '../../models/stdinfo';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-stdtable',
  templateUrl: './stdtable.component.html',
  styleUrls: ['./stdtable.component.scss']
})
export class StdtableComponent implements OnInit {
  stdarray:Array<Istd>=[]
  constructor( private _studentservices:StudentService) { }

  ngOnInit(): void {
    this.stdarray=this._studentservices.gtstdalldata()
  }

}
