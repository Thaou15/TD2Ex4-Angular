export class Produit {
    private id!:number;
    private nom:string;
    private prix:number;
    private restant:number;

    constructor(id:number, nom:string, prix:number, restant:number)
    {
        this.id=id;
        this.nom=nom;
        this.prix=prix;
        this.restant=restant;
    }

    
    public get Id() : number {
        return this.id;
    }
    
    public get Nom() : string {
        return this.nom;
    }
    
    public get Prix() : number {
        return this.prix;
    }
    
    public get Restant() : number {
        return this.restant;
    }
    
    
}
