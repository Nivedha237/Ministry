import { Injectable } from "@angular/core";
import{HttpClient} from "@angular/common/http";
import { Student } from "src/app/Model/Student.Model";

@Injectable()
export class StudentService
{
    constructor(private http:HttpClient)
    {

    }
    
    readonly uri="http://localhost:33236/api/Students";
    
    //post
    insertStudent(cat:Student)
    {
        debugger;
        return this.http.post(this.uri,cat,{responseType : 'text'})
    }
}