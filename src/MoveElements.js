let windowY = window.innerHeight;
let windowX = window.innerWidth;

let mid = {
    x: windowX / 2,
    y: windowY / 2
}

window.onmousemove = (e) => {
    let particles = document.querySelectorAll(".aboutMe-cv-decoration img");
    let offsetX = e.clientX - mid.x;
    let offsetY = e.clienty - mid.y;
    
    particles.forEach(p => {
        p.style.transform = 'translateX(' + -offsetX / 65 + 'px)';
        p.style.transform = 'translateY(' + -offsetY / 65 + 'px)';
    })
}