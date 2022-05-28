const hero = document.querySelector('.hero');
const text = document.querySelector('h1');
const walk = 200; // 100px: o quão longe a sombra poderá chegar

function shadow(e) {
    const {
        offsetWidth: width,
        offsetHeight: height
    } = hero;
    let {
        offsetX: x,
        offsetY: y
    } = e;

    if (this !== e.target) {
        // 'this' é o objeto que estamos 'escutando', e 'e.target' é o elemento que estamos posicionando o mouse sob.
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    }

    const xWalk = Math.round((x / width) * walk - walk / 2);
    const yWalk = Math.round((y / width) * walk - walk / 2);

    text.style.textShadow = `${xWalk}px ${yWalk}px 0 rgba(255,0,255,0.7), ${
          xWalk * -1
        }px ${yWalk * -1}px 0 rgba(0,255,255,0.7),
        ${yWalk}px ${xWalk * -1}px 0 rgba(0,255,0,0.7),
        ${yWalk * -1}px ${xWalk}px 0 rgba(0,0,255,0.7)
        `; // Efeito de multiplas sombras.
}

hero.addEventListener('mousemove', shadow);