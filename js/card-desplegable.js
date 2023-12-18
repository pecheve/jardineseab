// var verMasBtn = document.getElementById("verMasBtn");

// // Agrega un evento onclick al botón
// verMasBtn.onclick = function() {
//     // Coloca aquí el código que deseas ejecutar cuando se hace clic en el botón
//     console.log("desplegando")
// };

var btn1 = false
var btn2 = false
var btn3 = false

function despliegue(btn) {
    console.log(btn)
    switch (btn) {
        case 'verMasBtn1':
            btn1 = true;
            console.log('caso1')
            if (btn2) {
                document.getElementById("verMasBtn2").getAttribute('aria-expanded', 'false');
                document.getElementById("collapse2").classList.remove('show')
                btn2 = false;
            }
            if (btn3) {
                document.getElementById("verMasBtn3").getAttribute('aria-expanded', 'false');
                document.getElementById("collapse3").classList.remove('show')
                btn3 = false;
            }
            break;
        case 'verMasBtn2':
            btn2 = true;
            console.log('caso2')
            if (btn1) {
                document.getElementById("verMasBtn1").getAttribute('aria-expanded', 'false');
                document.getElementById("collapse1").classList.remove('show')
                btn1 = false;
            }
            if (btn3) {
                document.getElementById("verMasBtn3").getAttribute('aria-expanded', 'false');
                document.getElementById("collapse3").classList.remove('show')
                btn3 = false;
            }
            break;
        case 'verMasBtn3':
            btn3 = true;
            console.log('caso3')
            if (btn1) {
                document.getElementById("verMasBtn1").getAttribute('aria-expanded', 'false');
                document.getElementById("collapse1").classList.remove('show')
                btn1 = false;
            }
            if (btn2) {
                document.getElementById("verMasBtn2").getAttribute('aria-expanded', 'false');
                document.getElementById("collapse2").classList.remove('show')
                btn2 = false;
            }
            break;
    }
}