import { Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-vehicules',
  templateUrl: './vehicules.component.html',
  styleUrls: ['./vehicules.component.css']
})
export class VehiculesComponent implements OnInit{
  
  vehicule = {
    name:'',
    image:''
  }
  vehicules : any ;
  url ='http://127.0.0.1:3000/'

  constructor(private http: HttpClient) { } 

  ngOnInit() {
    this.getAllVehicules(); // Call the method in ngOnInit
  }

  
  getAllVehicules(){
     this.http.get(this.url + 'vehicule/getall').subscribe(
    res=>{
      console.log(res);
      this.vehicules = res ;
    },
    err=>{
      console.log(err);
    }
  );
}
}[]
