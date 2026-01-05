import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }
  private geturl="";
  private countryurl="";
  private stateurl="";
  // private cityurl="";

  getemp()
  {
return this.http.get(this.geturl);
  }
  getcountries()
  {
    return this.http.get(this.countryurl);
  }
  getstates(id:any)
  {
    return this.http.get(`${this.stateurl}/${id}`);
  }
  getcities(id:any)
  {
    return this.http.get(`${this.cityurl}/${id}`);
  }
  insertemp(emp:any)
  {
    return this.http.post(`${this.geturl}`,emp);
  }
  deleteemp(id:any)
  {
    return this.http.delete(`${this.geturl}/${id}`);
  }
  updateemp(id:any,emp:any)
  {
    return this.http.put(`${this.geturl}/${id}`,emp);
  }
}
