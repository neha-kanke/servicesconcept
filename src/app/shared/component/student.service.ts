import { Injectable } from '@angular/core';
import { Istd } from '../models/stdinfo';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  students:Array<Istd>=[]
  gtstdalldata(){
     return this.students
  }
  getobjdata(std:Istd){
    this.students.push(std)
    
  }

  constructor() { }
}
