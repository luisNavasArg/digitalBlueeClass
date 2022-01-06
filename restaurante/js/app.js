class Restaurante{
    mesas=[];
    constructor(cantMozo,suc=0){
        this.cantMozo=cantMozo;
        this.cantMesas=this.cantMozo * 8;
        this.libre=false;
        this.pedido=false; 
        this.pagar=false;
    }
    crearMesas(cm,lib,pd,pg,numS){
        for(let a = 0; a < cm; a++){
            let mozo = 1
            if(a < 8){mozo=mozo}else if(a < 16){ mozo=2}else if(a < 24){mozo = 3}else if(a < 32){mozo = 4}else if(a < 40){mozo = 5}
            this.mesas.push({libre:lib,pedido:pd,pagar:pg,sucNum:numS,mozo:mozo});
        }
        this.dibujarMesas()

    }
    dibujarMesas(){
        let div = document.getElementById("cantMesas");
        this.mesas.forEach((mesa,index) => {
            let lugar=index +1;
            let btnL ="btn"+lugar;
           div.innerHTML+= `<div id=${lugar} class="bg-success col-4 m-3 text-white ">
                <h5 class="text-center">Mesa N° ${lugar}</h5>
                <h6>Mozo N° ${mesa.mozo}</h6>
                <p id="libre">Libre</p>
                <div>Pedido</div>
                <input id=${btnL} type="submit"  class="btn btn-primary" value="Hacer Pedido"/>
                <button class="btn btn-primary" disabled>Pagar</button>
            </div>`;
        });
        let todas = document.querySelectorAll("input");
        todas.forEach((toda)=>{
            toda.addEventListener('click',(e)=>{
                console.log(e.target.id)
                console.log(e.target.parentNode.id)
                document.getElementById(e.target.parentNode.id).innerHTML+=this.formPedido()
            })
        })
    }
    
    formPedido(){
        return `
            <h5>Pedido</h5>

        `;
    }
    
}

let suc1 = new Restaurante(5,1);
suc1.crearMesas(suc1.cantMesas,suc1.libre,suc1.pedido,suc1.pagar,1);



