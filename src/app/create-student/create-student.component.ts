import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { bindNodeCallback } from 'rxjs';
import { StudentService } from '../student.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.scss']
})
export class CreateStudentComponent {
  public studentForm: FormGroup = new FormGroup({
    createdAt: new FormControl(),
    name: new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(15)]),
    percentage: new FormControl(),
    class: new FormControl(),
    email: new FormControl('',[Validators.required,Validators.email]),
    avatar: new FormControl(),
    password: new FormControl(),
    male: new FormControl(),
    female:new FormControl(),
    comments: new FormControl(),
    fathername: new FormControl(),
    dateofbirth: new FormControl(),
    address:new FormGroup({
      addressline:new FormControl(),
      city:new FormControl(),
      state:new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(14)]),
      pincode:new FormControl('',[Validators.required,Validators.min(100000),Validators.max(999999)])
    }),
    marks:new FormArray([]),
    type:new FormControl(),
    busfee:new FormControl(),
    hostelfee:new FormControl()
  });
  get marksFormArray(){
    return this.studentForm.get('marks') as FormArray;
  }
  addMark(){
    this.marksFormArray.push(
      new FormGroup({
        class: new FormControl(),
        year: new FormControl(),
        percentage: new FormControl()

      })
    )
  }
  deletemark(i:number){
    this.marksFormArray.removeAt(i);
  }
  
  public id:any = "";

  constructor(private studentService:StudentService ,private activatedRoute:ActivatedRoute) {
    activatedRoute.params.subscribe(
      (data:any)=>{
        this.id = data.id;

        studentService.getContent(this.id).subscribe(
          (data:any)=>{
            this.studentForm.patchValue(data);
          }
        )
      }
    )
   }
  submit(){
    console.log(this.studentForm);
    this.studentService.createContents(this.studentForm.value).subscribe(
      (data:any)=>{
        alert("Account Created Successfully");
      },
      (err:any)=>{
        alert("Account Creation Failed")
      }
    )
  }
}
