import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {
  assignmentData:any = [];

  constructor(private serviceService :ServiceService ) { }

  ngOnInit(): void {
    // this.getAssignmetData();
  }
  // getAssignmetData(){
  //   this.serviceService.getAssignmentData().subscribe(
  //     (Ares)=>{
  //       console.log("Ares",Ares);
  //       this.assignmentData=Ares;
  //       console.log("assignmentData",this.assignmentData);
  //     },
  //     (err)=>{
  //       console.log("err",err);
  //     }
  //   )
  // }
}