import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-reactif',
  templateUrl: './login-reactif.component.html',
  styleUrls: ['./login-reactif.component.css']
})
export class LoginReactifComponent {
  constructor(private r:Router, private fb:FormBuilder){};
//On passe par une fonction
  loginForm = this.fb.group({
    login: ['', Validators.required],
    mdp:[''], 
    adresse: this.fb.group({
      rue:[''],
      cp:[''],
      ville:['']
    })
  })
 //on passe par la classe
  // loginForm = new FormGroup({
  //   login: new FormControl(),
  //   mdp: new FormControl(),
  //   adresse: new FormGroup({
  //     rue: new FormControl(),
  //     cp: new FormControl(),
  //     ville: new FormControl()
  //   })
  // })

  connexion()
  {
    console.log(this.loginForm.value)
    if (this.loginForm.value.login == "admin" && this.loginForm.value.mdp == "admin")
    {
      this.r.navigate(['produit']);
    }
    else
    {

      this.loginForm.patchValue({
        login:"",
        mdp:""
      });
      this.r.navigate(['loginR']);
    }
  }

}
