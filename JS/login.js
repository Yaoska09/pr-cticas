
function submitForm() {
    var username = document.getElementById('nombre').value;
    var password = document.getElementById('clave').value;

    // Validar que los campos no estén vacíos
    if (!username || !password) {
        console.error('Por favor, ingrese tanto el nombre como la clave.');
        return;
    }
    else{
        if(username == "yao" && password == "123"){
            window.location.href = 'home.html'; 
        }
        else{
            console.error('Usuario o contraseña incorrectos');
        }
    }
     
}
    
module.exports = submitForm;
