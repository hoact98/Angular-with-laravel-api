import { UserService } from 'src/app/services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  profileForm = new FormGroup({
    email: new FormControl('', [Validators.required,Validators.email]),
    password: new FormControl('', [Validators.required,Validators.minLength(6)]),
});
isCheckLogin:boolean = false;
   
  constructor(private userService: UserService,private router:Router) { }

  ngOnInit(): void {
  }
  get f(){
    return this.profileForm.controls;
  }
  onSubmit(event) {
    event.preventDefault();
         this.userService.login(this.profileForm.value).subscribe(item=>{
           
             if(item.status=='success'){
                  console.log("Success login");
                  this.router.navigate(['/admin']);
             }
        })

  }


}
