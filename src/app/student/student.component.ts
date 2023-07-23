import { Component } from '@angular/core';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent {
public contents:any = [];
public term:string = "";
public column:string = "";
public order:string = "";
public limit:string = "";
public page:string = "";
constructor(private studentService:StudentService,private router:Router){
  this.studentService.getContents().subscribe(
    (data:any)=>{
      this.contents = data;
    },
    (err:any)=>{
      alert("internal server error")
    }
  )
}
getFilteredContents(){
  this.studentService.getFilteredContents(this.term).subscribe(
    (data:any)=>{
      this.contents = data;
    },
    (err:any)=>{
      alert("internal server error")
    }
  )
}
getSortedContents(){
  this.studentService.getSortedContents(this.column,this.order).subscribe(
    (data:any)=>{
      this.contents = data;
    },
    (err:any)=>{
      alert("internal server error")
    }
  )
}
getPageContents(){
this.studentService.getPageContents(this.limit,this.page).subscribe(
  (data:any)=>{
    this.contents = data;
  },
  (err:any)=>{
    alert("internal server error")
  }
)
}
deleteContents(id:any){
  this.studentService.deleteContents(id).subscribe(
    (data:any)=>{
    alert("deleted successfully");
    location.reload();
    },
    (err:any)=>{
      alert("internal server error");
    }
  )
}
view(id:number){
this.router.navigateByUrl("/dashboard/student-details/"+id);
}
edit(id:number){
this.router.navigateByUrl("/dashboard/edit-student/"+id);
}
}
