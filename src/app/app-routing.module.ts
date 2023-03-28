import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginReactifComponent } from './login-reactif/login-reactif.component';
import { LoginComponent } from './login/login.component';
import { ProduitComponent } from './produit/produit.component';

const routes: Routes = [
  {path:"produit", component:ProduitComponent},
  {path:"login", component:LoginComponent},
  {path:"loginR", component:LoginReactifComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
