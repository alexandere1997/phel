import anime from 'animejs/lib/anime.es.js';

let animatet = () => {
    const container = document.querySelector(".animate");

    for (let i = 1; i <=20; i++) {
        const phel = document.createElement("img");
        phel.classList.add("animate__phel");
        phel.setAttribute("src", "img/1524117_eb010.gif")
        container.appendChild(phel);
    }

    function animeateName() {
        anime({
            targets: ".animate__phel",
            translateX: function() {
                return anime.random(-550, 550)
            },
            translateY: function() {
                return anime.random(-400, 400)
            },
            rotate: -45,
            /*scale: function() {
                return anime.random(1,5)
            },*/
            easing: 'easeInOutBack',
            duration: 3000,
            delay: anime.stagger(10),
            complete: animeateName,
        })
    }
    animeateName();
}

export default animatet;