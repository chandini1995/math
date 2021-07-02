import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssignmentComponent } from './assignment/assignment.component';
import { McqComponent } from './mcq/mcq.component';

const routes: Routes = [
  {
    path: 'assignment',component: AssignmentComponent
  },
  {
    path: 'mcq',component: McqComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
