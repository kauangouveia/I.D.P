function typeWriter(elemento){
    const textArray = elemento.innerHTML.split('')
    elemento.innerHTML =''
    textArray.forEach((letra, i)=>{
        console.log(i)
        setTimeout(function(){
            elemento.innerHTML += letra
        },35 * i)
    })
}
const informacoes = document.querySelector('p')
typeWriter(informacoes)