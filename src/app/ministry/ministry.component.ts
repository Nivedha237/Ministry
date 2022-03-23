import { Component, OnInit } from '@angular/core';
import { MinistryService } from 'src/Services/ministry.service';
import { MinistryModel } from '../Model/ministry.model'; 

@Component({
  selector: 'app-ministry',
  templateUrl: './ministry.component.html',
  styleUrls: ['./ministry.component.css']
})
export class MinistryComponent implements OnInit {

  constructor(private catservice:MinistryService) { }

  categoryinfo: any={};

  ngOnInit(): void {

    this.fetchStudent();
  }

  fetchStudent()
  {
    debugger;
    this.catservice.getStudent().subscribe((data: any)=>{this.categoryinfo=data;console.table(this.categoryinfo=data)})
  }
  
  Approve(id:number)
  {
    debugger;
    this.ngOnInit();
    let i=1;
    this.catservice.getcatbyid(id,i).subscribe((data)=>
    {console.log(data)
    if(data="Success")
    {
      window.alert("Data Upload");
    }
    else
    {
      window.alert("Data is not Upload");
    }
    }
    );
  }
  Reject(id:number)
  {
    debugger;
    this.ngOnInit();
    let i=0;
    this.catservice.getcatbyid(id,i).subscribe((data)=>
    {console.log(data)
    if(data="Success")
    {
      window.alert("Data Upload");
    }
    else
    {
      window.alert("Data is not Upload");
    }
    }
    );
  }

}
