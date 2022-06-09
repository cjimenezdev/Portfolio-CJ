const menu = document.querySelector(".sidebar__toggle");

menu.addEventListener("click", () => {
    menu.querySelector('i').classList.toggle("fa-times");
    menu.querySelector('i').classList.toggle("fa-bars");
});

window.addEventListener("load", () => {
    if (document.body.classList.contains("dark")) {

        menu.querySelector('i').classList.add("fa-bars");
    } else {
        menu.querySelector('i').classList.add("fa-times");
    }
});

const sidebarMenu = document.querySelector(".sidebar__menu"),
    sidebarLi = sidebarMenu.querySelectorAll("li"),
    totalNav = sidebarLi.length,
    sectionAll = document.querySelectorAll(".section"),
    totalSection = sectionAll.length;

for (let i = 0; i < totalNav; i++) {
    const a = sidebarLi[i].querySelector("a");
    a.addEventListener("click", function() {

        for (let i = 0; i < totalSection; i++) {
            sectionAll[i].classList.remove("back__section");
            sectionAll[i].classList.remove("hide");
        }
        for (let j = 0; j < totalNav; j++) {

            if (sidebarLi[j].querySelector("a").classList.contains("active")) {
                sectionAll[j].classList.add("back__section");
            }
            sidebarLi[j].querySelector("a").classList.remove("active");
            sectionAll[j].classList.toggle("show");
            $(".sidebar__menu").toggleClass("show").siblings().removeClass("show");
            menu.querySelector('i').classList.toggle("fa-times");
            menu.querySelector('i').classList.toggle("fa-bars");
        }
        this.classList.add("active");
        showSection(this);
    })
}

function showSection(element) {
    for (let i = 0; i < totalSection; i++) {
        sectionAll[i].classList.remove("show");
    }
    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("show");
    document.querySelector('.sidebar').classList.toggle("hide");

}

document.querySelectorAll('.form-outline').forEach((formOutline) => {
    new mdb.Input(formOutline).init();
});