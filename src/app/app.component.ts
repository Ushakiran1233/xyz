import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EmployeeService } from './employee.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'EmpCountrystatecity';
  Emp:any[]=[];
  Employee:any={empno:'',empname:'',salary:'',countryname:'',statename:'',cityname:''};
  Country:any[]=[];
  States:any[]=[];
  City:any[]=[];
  selectedCountry:string='';
  selectedState:string='';
  selectedCity:string='';
  empno:string='';
  empname:string='';
  salary:number |null=null;
  countryname:string='';
  statename:string='';
  cityname:string='';
  isEditmode=false;
  constructor(private emps:EmployeeService){}
  ngOnInit(): void {
    
  }
  GetEmployees():void
  {
this.emps.getemp().subscribe((data:any)=>
  {
    this.Emp=data;
  })
  }
  Getcountries():void{
this.emps.getcountries().subscribe((data:any)=>
{
  this.Country=data;
})

}
onCountryChange():void
{
  this.States=[];
  this.City=[];
  this.selectedState='';
  this.selectedCity='';
  if(this.selectedCountry)
  {
    this.emps.getstates(this.selectedCountry).subscribe((data:any)=>
    {
      this.States=data;
    })
  }
}
onStateChange():void{
  this.City=[];
  this.selectedCity='';
  if(this.selectedState)
  {
    this.emps.getcities(this.selectedState).subscribe((data:any)=>{
      this.City=data;
    })
  }
}
saveEmployee(employee:any):void
{
 this.emps.insertemp(employee).subscribe(()=>{
  this.GetEmployees();
  
 });
  }
  updateemployee():void{
  if(this.Employee.empno&&this.Employee)
  {
    this.emps.updateemp(this.Employee).subscribe(()=>{

    })
  }
  }
}

