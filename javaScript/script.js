
const text = "Eai! Me chamo Rafael e seja bem-vindo ao meu portfólio!";
let i = 0;

function escrever() {
    if (i < text.length) {
        document.getElementById("text").innerHTML += text.charAt(i);
        i++
        setTimeout(escrever, 70);
    } else {
        animationShowProjects();
    }
}

document.addEventListener ("DOMContentLoaded",() =>{
    window.scrollTo({
        top:0,
        behavior: "smooth"
    });
});

document.body.classList.add("travado");

function animationShowProjects() {
    setTimeout(() => {
        document.querySelector(".projetos").classList.add("show");
        document.querySelector(".centerIndex").classList.add("moving");
        document.getElementById("text").style.textAlign = "start";
        document.body.classList.remove("travado");
    }, 200);
}

escrever();

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) { entry.target.classList.add("show"); }
    });
});

document.querySelectorAll(".hidden").forEach(el => {
    observer.observe(el);
});

document.getElementById("buttonClose1").addEventListener("click", ()=>{
    document.querySelector(".div-projeto-flutuante").style.opacity = 0;
});