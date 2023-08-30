export class Mesure {
    
    //`id`, `date`, `poids`, `taille`, `pressionArtérielle`, `pouls`.
    id:number;
    date:string;
    poids:number;
    taille:number;
    pressionArterielle:number;
    pouls:number;


    constructor(id:number,date:string,poids:number,taille:number,pressionArterielle:number,pouls:number){
        this.id = id;
        this.date = date;
        this.poids = poids;
        this.taille = taille;
        this.pressionArterielle = pressionArterielle;
        this.pouls = pouls;
    }
    
}
