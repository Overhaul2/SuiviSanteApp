export class Mesure {

    //`id`, `date`, `poids`, `taille`, `pressionArtérielle`, `pouls`.
    id:number;
    date:string;
    poids:number;
    taille:number;
    pouls:number;
    tensionSystolique:number;
    tensionDiastolique:number;
    // pressionArterielle:number;


    constructor(id:number,date:string,poids:number,taille:number,pouls:number,tensionSystolique:number,tensionDiastolique:number,/*pressionArterielle:number*/){
        this.id = id;
        this.date = date;
        this.poids = poids;
        this.taille = taille;
        this.pouls = pouls;
        this.tensionSystolique=tensionSystolique;
        this.tensionDiastolique=tensionDiastolique;
        // this.pressionArterielle = pressionArterielle;
    }

}
