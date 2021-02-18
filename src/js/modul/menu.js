const menu = () => {
    const btn = document.querySelector(".mobile__btn");
    const box = document.querySelector(".mobile__nav");
    const tabMenu = document.querySelector(".mobile__links");
    const btn__line = document.querySelectorAll(".mobile__line");
    const mobile__link = document.querySelectorAll(".mobile__link");

    btn.addEventListener("click", () => {
        box.classList.toggle("add__menu");
        tabMenu.classList.toggle("active__menu");
        btn__line.forEach(item => {
            item.classList.toggle("btn__active");
        })
    })
    mobile__link.forEach(item => {
        item.addEventListener("click", (e) => {
            e.preventDefault();
            box.classList.toggle("add__menu");
            tabMenu.classList.toggle("active__menu");
            btn__line.forEach(item => {
                item.classList.toggle("btn__active");
            })
        })
    })
}

export default menu;