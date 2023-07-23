import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss']
})
export class StudentDetailsComponent {
public id:any = "";
public content:any = {};
constructor(private activatedRoute:ActivatedRoute,private studentService:StudentService){
  activatedRoute.params.subscribe(
    (data:any)=>{
      this.id = data.id;
    }
  )
   studentService.getContent(this.id).subscribe(
     (data:any)=>{
    this.content = data;
    }
  )
}
}
