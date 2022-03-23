import { Component, OnInit } from '@angular/core';


import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { StudentService } from 'src/Services/Student.Services';


import { Student } from '../Model/Student.Model';

@Component({
  selector: 'app-registerform',
  templateUrl: './registerform.component.html',
  styleUrls: ['./registerform.component.css']
})
export class RegisterformComponent implements OnInit {
  registrationform: FormGroup;

  constructor(private fb:FormBuilder, private catservice:StudentService) { 
    this.registrationform =this.fb.group(
    {
      state:['',[Validators.required]],
      email: ['',[Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      uname:['',[Validators.required]],
      mobnum:['',[Validators.required]],
      Icode:['',[Validators.required]],
      aadhar:['',[Validators.required]],
      IFSC:['',[Validators.required]],
      Bnum:['',[Validators.required]],
      Bname:['',[Validators.required]],
      password:['',[Validators.required]]

      
      
    }, 

  )}

  ngOnInit(): void {
  }
student: any={};
  addStudent(){
    debugger;
    this.student.State=this.registrationform.get('state')?.value;
    this.student.StudentName=this.registrationform.get('uname')?.value;
    this.student.MobileNumber=this.registrationform.get('mobnum')?.value;
    this.student.EmailId=this.registrationform.get('email')?.value;
    this.student.InstituteCode=this.registrationform.get('Icode')?.value;
    this.student.StudentAadhar=this.registrationform.get('aadhar')?.value;
    this.student.BankIfsc=this.registrationform.get('IFSC')?.value;
    this.student.BankAccount=this.registrationform.get('Bnum')?.value;
    this.student.BankName=this.registrationform.get('Bname')?.value;

    this.catservice.insertStudent(this.student).subscribe((data)=>
    {console.log(data)
      if(data="Success")
      {
        window.alert("Data Added");
      }
      else
      {
        window.alert("Data is not Added");
      }
    }
    )
  } 
 
}