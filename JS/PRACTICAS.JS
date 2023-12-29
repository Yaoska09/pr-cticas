//PRIMER ARCHIVO DE PRÁCTICA

console.log("Welcome to Programiz!");
let continuar = "continua a Reparación";
let noContinuar = "verificar garantía y llamar a cliente para indicar que procede";
let comprar_Repuestos="comprar repuestos e instalarlos";
let reparado="El celular ha sido reparado";
let con_Garantia = "si tiene Garantía";
let num_Revision = 0;
function Obtener_Info_Falla() {
   for(continuar=1;continuar>=3;num_Revision++){
       continuar=con_Garantia+1;
       revisarCelular( continuar);
   }
   


function revisarCelular(continuar,comprar_Repuestos,reparado){
    switch(1){
        case 1:
            continuar = comprar_Repuestos;
            console.log(comprar_Repuestos)
            break;
    
        case 2:
            if(comprar_Repuestos == reparado){
                continuar = comprar_Repuestos;
                console.log(comprar_Repuestos)
                
            }
            else{
                console.log(reparado)
            }
            console.log("LLamaral cliente para retirar Celular")
            break;
        
        
        
    }
    
    
    
    
    
    
}
function arregalrCelular(){
   switch (2){
    case 1:
       console.log(continuar)
       console.log(comprar_Repuestos)
        break;
    case 2:
        console.log(noContinuar)
        if(con_Garantia ==false){
            console.log(con_Garantia)
            break;
            
        }else{console.log("No aplica para garantía,notificar al cliente ")
        
        break;
    }
    case 3:
       console.log("Ingrese una opción válida")
       break;
   }
   
    
    }
}
arregalrCelular();