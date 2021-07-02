import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  assignmentData: any;
  mcqData: any;

  constructor(private serviceService: ServiceService) { }

  ngOnInit(): void {
    this.getMyMcqData();
    this.getAssignmetData();
  }

  getAssignmetData(){
    this.serviceService.getAssignmentData().subscribe(
      (Ares)=>{
        console.log("Ares",Ares);
        this.assignmentData=Ares;
        console.log("assignmentData",this.assignmentData);
      },
      (Aerr)=>{
        console.log("assignmentData",this.assignmentData);
      }
    )
  }

  getMyMcqData(){
    this.serviceService.getMcqData().subscribe(
      (Mres)=> {
        console.log("Mres",Mres);
        this.mcqData = Mres;
        console.log("mcqData", this.mcqData);
      },
      (Merr)=> {
        console.log("Merr",Merr)
      }
    )
  }
}
