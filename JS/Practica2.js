

function revision(){
    let comprarRepuestos = true;
    console.log("Revisando, espere por favor");
    return comprarRepuestos;  
}
function Obtener_Info_Falla() {   
    let decidir_Reparar = true;
    console.log("obtener información de la falla");
    return decidir_Reparar;        
}
function decidir_Garantia(tieneGarantia){
    console.log("Revisando la Garantía");
    if(tieneGarantia==true){
        Obtener_Info_Falla();
    }else{
        console.log("Entregar celular")
    }

}
function llamar_Cliente(){
    console.log("LLamar al cliente");
    decidir_Garantia();

}
function repara_Celular(){
    console.log("Reparando Celular");
    llamar_Cliente();
}


function comprar_Repuestos(){
    console.log("comprando repuestos");
    instalar_Repuestos();

}
function instalar_Repuestos(){
    console.log("Instalando repuestos");
    repara_Celular();

}



function decidir_Reparar_Celular (decidir_Reparar){
    console.log("Diciendo reparar Celualar");
    if(decidir_Reparar=true){
        revision();
    }else{
        llamar_Cliente();

    }
    
}

function decidir_Repuestos(comprarRepuestos){
    console.log("decidir si necesita repuestos");
    if(comprarRepuestos=true){
        comprar_Repuestos();
    }else{
        repara_Celular();

    }

}

    




function inicio_Servicio_Celular(){
    let info = Obtener_Info_Falla();
    decidir_Reparar_Celular(info);
    decidir_Garantia();
    return console.log("Fin del servicio,Gracias por su preferencia !");

}
