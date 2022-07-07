const projs = document.getElementById("projects-list");
const proj = document.querySelectorAll("#projects-list div");

let idx = 0;

function carrossel(){
    idx++;

    if(idx > proj.length -1){
        idx=0;
    }

    projs.style.transform = `translateX(${-idx * 500}px)`;
}

// setInterval(carrossel,1800);