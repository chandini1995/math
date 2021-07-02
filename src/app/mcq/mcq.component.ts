import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-mcq',
  templateUrl: './mcq.component.html',
  styleUrls: ['./mcq.component.css']
})
export class McqComponent implements OnInit {
  mcqData:any=[]
  constructor(private serviceService :ServiceService ) { }

  ngOnInit(): void {
  }
//   getMcqtData(){
//   this.serviceService.getMcqData().subscribe(
//     (Ares)=>{
//       console.log("Ares",Ares);
//       this.mcqData=Ares;
//       console.log("McqData",this.mcqData);
//     },
//     (err)=>{
//       console.log("err",err);
//     }
//   )
// }
}