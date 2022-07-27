class Model
{
    constructor()
    {

    }
}
class View
{
    constructor()
    {  
       this.owldiv=document.getElementById("carousel2 owl-carousel")
       this.tile = new Array();
       this.image= new Array();
       this.price= new Array();
       this.name = new Array();
       this.anchor=new Array();
       this.btn=new Array();
       
    }

    createTile(){
        
       for(let i=0;i<womenProduct.length;i++)
       {
            this.tile[i]=document.createElement("DIV");           
            this.tile[i].className="tile1 tile";
            this.anchor[i]=document.createElement('A');
            this.anchor[i].href="#";
            this.image[i]=document.createElement('IMG'); 
            this.image[i].src=womenProduct[i].image;
            this.price[i]=document.createElement("P");
            this.price[i].innerHTML="₹ "+womenProduct[i].price +"  "+ "₹" + womenProduct[i].mrp.small().strike();
            this.name[i]=document.createElement('P');
            this.name[i].innerHTML=womenProduct[i].productname; 
            this.btn[i]=document.createElement("BUTTON");
            this.btn[i].id='btn'+i;
            this.btn[i].innerHTML="Add to cart";
            this.anchor[i].append(this.image[i],this.price[i],this.name[i],this.btn[i]);
            this.tile[i].appendChild(this.anchor[i]);
            this.owldiv.appendChild(this.tile[i]);
    }
 }
    
}
class Controller
{
    constructor(Model,View){
        this.model=new Model();
        this.view=new View();
    }
    function1(){
        this.view.createTile();
    }
}
class CaratLane{
  constructor(Controller, Model, View) {
      this.controller = new Controller(Model, View);
  }
  init(){
      this.controller.function1();
  }
}

const caratlane=new CaratLane(Controller,Model,View);
caratlane.init();