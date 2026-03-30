// function reorganizarProjetos(){
//     const
// }


const text = "Eai! Me chamo Rafael e seja bem-vindo ao meu portfólio!";
let i = 0;

function escrever(){
    if(i < text.length){
        document.getElementById("text").innerHTML += text.charAt(i);
        i++
        setTimeout(escrever,70);
    }else{
        animationShowProjects();
    }
}

function animationShowProjects(){
    setTimeout(() => {
        document.querySelector(".projetos").classList.add("show");
        document.querySelector(".centerIndex").classList.add("moving");
        document.getElementById("text").style.textAlign = "start";
    }, 200);
}

escrever();

const observer = new IntersectionObserver((entries) =>{
    entries.forEach(entry =>{
        if(entry.isIntersecting){entry.target.classList.add("show");}
    })
})

document.querySelectorAll(".hidden").forEach(el =>{
    observer.observe(el);
})