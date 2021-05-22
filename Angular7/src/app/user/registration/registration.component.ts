//import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
//import { ToastrService } from 'ngx-toastr';
//import { Subscriber } from 'rxjs';
//import { UserService } from 'src/app/user.service';
//import{Form} from 'rxjs';
import { UserService } from './../../shared/user.service';
import { Component, OnInit } from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import { from } from 'rxjs';



@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: [],
  
})
export class RegistrationComponent implements OnInit {

  constructor(public service:UserService,private toastr:ToastrService) { }

  ngOnInit(): void {

  }


  onSubmit(){
    this.service.register().subscribe(
      (res: any) =>{
        if(res.succeeded){
          this.service.formModel.reset();
          this.toastr.success('New User created', 'Registration Successful.');
        }else{
          res.errors.forEach(element => {
            switch (element.code){
              case 'DuplicateUserName':
                this.toastr.error('Username is not available','Registration Failed');
                //UserName is already taken
                break;
             default:
               this.toastr.error(element.description,'Registraion failed.');
                //Registration failed
                break;
            }
          });    
        }
      },
      err =>{
        console.log(err);
      }
    );
    
  }

}
