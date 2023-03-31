function handlerMenu(button) {
    let btnClose = document.getElementById("hamburger-close");
    let btnMenu = document.getElementById("hamburger-open"); 
    const menu = document.querySelector(".menu-content");

    if (btnClose.style.getPropertyValue("display") == "flex") {
        btnMenu.style.display = "flex";
        btnClose.style.display = "none"
        menu.style.display = "none";
    } else {
        const listMenu= ["Quem Somos", "Filantropia", "Cultos", "Doações", "Live Culto", "Créditos"];
        let menuAppend = ""
        listMenu.forEach(element => {
            menuAppend +=`<div class="sub-menu" onclick="handlerMenu(this)">${element}</div>\n`;
        });

        btnMenu.style.display = "none";
        btnClose.style.display = "flex";
        menu.innerHTML = menuAppend;
        menu.style.display = "flex";
    }
}