import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produit } from '../produit.model';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  constructor(private http:HttpClient){}

  listeP:Produit[]=[]

  
  getAllProduit():Observable<Produit[]>
  {
     
      // this.listeP.push(new Produit(1, "Iphone", 2360, 20));
      // this.listeP.push(new Produit(2, "S2", 360, 2));
      // this.listeP.push(new Produit(3, "Iphone14", 1360, 15));

      //  return this.listeP;
     return this.http.get<Produit[]>("http://localhost:8080/produit/listeProduits")
  }
}
