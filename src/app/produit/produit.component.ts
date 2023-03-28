import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Produit } from '../produit.model';
import { ProduitService } from '../service/produit.service';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
  

  listeP$!:Observable<Produit[]>;

  constructor(private ps: ProduitService){}

  ngOnInit(): void {
    
   this.listeP$ = this.ps.getAllProduit();

  }

}
