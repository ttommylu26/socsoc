// nav [mediaquerys]
var navIcon = document.getElementById("nav-icon")
var nav = document.getElementById("nav-mediaquerys-fondo")
var navButtonClose1 = document.getElementById("nav-mediaquerys-button-close-1")
var navButtonClose2 = document.getElementById("nav-mediaquerys-button-close-2")
var navButtonClose3 = document.getElementById("nav-mediaquerys-button-close-3")
var navButtonClose4 = document.getElementById("nav-mediaquerys-button-close-4")


navIcon.addEventListener("click", ()=> nav.classList.add("nav-mediaquerys-fondo--show"))
nav.addEventListener("click", (e) => {
    if (e.target.classList.contains("nav-mediaquerys-fondo")) nav.classList.remove("nav-mediaquerys-fondo--show")
})
navButtonClose1.addEventListener("click", () => nav.classList.remove("nav-mediaquerys-fondo--show"))
navButtonClose2.addEventListener("click", () => nav.classList.remove("nav-mediaquerys-fondo--show"))
navButtonClose3.addEventListener("click", () => nav.classList.remove("nav-mediaquerys-fondo--show"))
navButtonClose4.addEventListener("click", () => nav.classList.remove("nav-mediaquerys-fondo--show"))


// go-up-button
window.onscroll = function(){
    if(document.documentElement.scrollTop > 400){
        document.querySelector(".go-up-button")
        .classList.add("go-up-button--show");
    }else{
        document.querySelector(".go-up-button")
        .classList.remove("go-up-button--show");  
    }
}

// aviso de contacto [modal]
var contactoButton = document.getElementById("contacto-button")
var contactoButtonClose = document.getElementById("contacto-button-close")
var contactoDiv = document.getElementById("aviso-de-contacto-fondo")

contactoButton.addEventListener("click", ()=> contactoDiv.classList.add("aviso-de-contacto-fondo--show"))
contactoButtonClose.addEventListener("click", ()=> contactoDiv.classList.remove("aviso-de-contacto-fondo--show"))
contactoDiv.addEventListener("click", (e) => {
    if (e.target.classList.contains("aviso-de-contacto-fondo")) contactoDiv.classList.remove("aviso-de-contacto-fondo--show")
})

// clase3 - aviso
var clase3AvisoButton = document.getElementById("clase3-aviso-button")
var clase3Aviso = document.getElementById("clase3-aviso")

clase3AvisoButton.addEventListener("click", ()=> clase3Aviso.classList.add("clase3-aviso--show"))

// clase3 - pdf
var clase3PdfButton = document.getElementById("clase3-pdf-button")
var clase3Pdf = document.getElementById("clase3-pdf-fondo")
var clase3PdfButtonClose = document.getElementById("clase3-pdf-button-close")

clase3PdfButton.addEventListener("click", () => clase3Pdf.classList.add("clase3-pdf-fondo--show"))
clase3PdfButtonClose.addEventListener("click", ()=> clase3Pdf.classList.remove("clase3-pdf-fondo--show"))
clase3Pdf.addEventListener("click", (e) => {
    if (e.target.classList.contains("clase3-pdf-fondo")) clase3Pdf.classList.remove("clase3-pdf-fondo--show")
})

// clase1 - pdf
var clase1PdfButton = document.getElementById("clase1-pdf-button")
var clase1Pdf = document.getElementById("clase1-pdf-fondo")
var clase1PdfButtonClose = document.getElementById("clase1-pdf-button-close")

clase1PdfButton.addEventListener("click", ()=> clase1Pdf.classList.add("clase1-pdf-fondo--show"))
clase1PdfButtonClose.addEventListener("click", ()=> clase1Pdf.classList.remove("clase1-pdf-fondo--show"))
clase1Pdf.addEventListener("click", (e) => {
    if (e.target.classList.contains("clase1-pdf-fondo")) clase1Pdf.classList.remove("clase1-pdf-fondo--show")
})

