import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private r:Router){}

  login:string="";
  mdp:string="";

  connexion()
  {
    if (this.login == "admin" && this.mdp == "admin")
    {
      this.r.navigate(['produit']);
    }
    else
    {
      this.login="";
      this.mdp="";
      this.r.navigate(['login']);
    }
  }

}
