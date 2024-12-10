import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrl: './create-account.component.css'
})
export class CreateAccountComponent {
  constructor( public userService: UserService){}

  //constructor(private fb: FormBuilder){}

  ngOnInit(): void {
  }
  
  createForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl ('', [Validators.required, Validators.minLength(6)])
  });
  create(){
    this.userService.createAccount(this.createForm.value).then(res=>{
      console.log(res)

    }).catch(err=>{
      console.log(err)

    })
  }

}
