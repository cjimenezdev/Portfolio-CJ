const moon_sun = document.querySelector(".moon__sun"),
    menu = document.querySelector(".sidebar__toggle"),
    flags = document.getElementById("flags");
const textsChange = document.querySelectorAll("[data-section]");
const languageChange = async language => {
    const requestJson = await fetch(`./app/resources/json/${language}.json`);
    const texts = await requestJson.json();
    for (const textsChanges of textsChange) {
        const section = textsChanges.dataset.section;
        const value = textsChanges.dataset.value;

        textsChanges.innerHTML = texts[section][value];
    }
}

menu.addEventListener("click", () => {
    menu.querySelector('i').classList.toggle("fa-times");
    menu.querySelector('i').classList.toggle("fa-bars");
});

moon_sun.addEventListener("click", () => {
    moon_sun.querySelector('.moon').classList.toggle("hidden");
    moon_sun.querySelector('.sun').classList.toggle("hidden");
    document.body.classList.toggle("dark");
});

flags.addEventListener("click", (e) => {
    languageChange(e.target.parentElement.dataset.language);
    flags.querySelector('.spain').classList.toggle("hidden");
    flags.querySelector('.usa').classList.toggle("hidden");
});


window.addEventListener("load", () => {
    if (document.body.classList.contains("dark")) {
        menu.querySelector('i').classList.add("fa-times");
    } else {
        menu.querySelector('i').classList.add("fa-bars");
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
        }
        for (let j = 0; j < totalNav; j++) {

            if (sidebarLi[j].querySelector("a").classList.contains("active")) {
                sectionAll[j].classList.add("back__section");
            }
            sidebarLi[j].querySelector("a").classList.remove("active");
            sectionAll[j].classList.toggle("show");
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
    menu.querySelector('i').classList.toggle("fa-bars");
    menu.querySelector('i').classList.remove("fa-times");
}

document.querySelectorAll('.form-outline').forEach((formOutline) => {
    new mdb.Input(formOutline).init();
});
