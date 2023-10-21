import { formatCurrency } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UuidService } from '../uuid.service';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-stdform',
  templateUrl: './stdform.component.html',
  styleUrls: ['./stdform.component.scss']
})
export class StdformComponent implements OnInit {
  studentform !:FormGroup
  constructor(private _stdservices:StudentService,
    private _generateuuid:UuidService) { }

  ngOnInit(): void {
    this.getcreatestdform()
  }

getcreatestdform(){
  this.studentform= new FormGroup({
    fname: new FormControl(null,[Validators.required]),
    lname:new FormControl(null,[Validators.required]),
    email:new FormControl(null,[Validators.required]),
    contact:new FormControl(null,Validators.required)
  })
}
onaddstd(){
  // console.log(this.studentform)
  console.log(this.studentform.value)
 let stdobj={...this.studentform.value,stdid:this._generateuuid.generateUUID()}
 console.log(stdobj)
 this._stdservices.getobjdata(stdobj)

 this.studentform.reset()
}


}
