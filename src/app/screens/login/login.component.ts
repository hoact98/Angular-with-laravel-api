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
  message='';
  profileForm = new FormGroup({
    email: new FormControl('', [Validators.required,Validators.email]),
    password: new FormControl('', [Validators.required,Validators.minLength(6)]),
});
isCheckLogin:boolean = false;
   
  constructor(private userService: UserService,private router:Router) { }

  ngOnInit(): void {
    if(localStorage.getItem('access_token')!=null){
      this.userService.user().subscribe(item=>{
        if(item.role==1){
            this.router.navigate(['/admin']);
        }
      })
    }
  }
  get f(){
    return this.profileForm.controls;
  }
  onSubmit(event) {
    event.preventDefault();
         this.userService.login(this.profileForm.value).subscribe(item=>{
             if(item.status=='success'){
              localStorage.setItem('access_token', item.access_token);
                  this.router.navigate(['/admin']);
             }else{
              this.message= item.message;
             }
        })

  }


}
