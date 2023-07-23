import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { StudentComponent } from './student/student.component';
import { notifyGuard } from './notify.guard';
import { authenticationGuard } from './authentication.guard';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent,canActivate:[authenticationGuard],children:[
    {path:'home',component:HomeComponent},
    {path:'create-student',component:CreateStudentComponent,canDeactivate:[notifyGuard]},
    {path:'student',component:StudentComponent}
  ]},
  {path:'',component:LoginComponent},
  {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
