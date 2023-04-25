let index = 1
function handlerMenu(button) {
    let btnClose = document.getElementById("hamburger-close");
    let btnMenu = document.getElementById("hamburger-open"); 
    const menu = document.querySelector(".menu-content");

    if (btnClose.style.getPropertyValue("display") == "flex") {
        btnMenu.style.display = "flex";
        btnClose.style.display = "none"
        menu.style.display = "none";
    } else {
        // const listMenu= ["Quem Somos", "Filantropia", "Cultos", "Doações", "Live Culto", "Créditos"];
        const listMenu= ["Quem Somos", "Filantropia", "Cultos", ];
        let menuAppend = ""
        listMenu.forEach(element => {
          if(element == "Quem Somos")
            menuAppend +=`<div class="sub-menu" onclick="handlerMenu(this)"><a href="#QuemSomos">${element}</a></div>\n`;
          else if(element == "Filantropia")
            menuAppend +=`<div class="sub-menu" onclick="handlerMenu(this)"><a href="#Filantropia">${element}</a></div>\n`;
          else if (element == "Cultos")
            menuAppend +=`<div class="sub-menu" onclick="handlerMenu(this)"><a href="#cultos">${element}</a></div>\n`;
        });

        btnMenu.style.display = "none";
        btnClose.style.display = "flex";
        menu.innerHTML = menuAppend;
        menu.style.display = "flex";
    }
}

function nextCult() {
  let resetList = false;
  let cardHide ;
    
  if( index == 4){
    resetList = true;
    index = 1;
  }
  else
    index++;

  const cardShow = document.getElementById(`card-${index}`);    
  if (!resetList) 
    cardHide = document.getElementById(`card-${index - 1}`);
  else
    cardHide = document.getElementById(`card-1`);

  cardHide.style.display = 'none';
  cardShow.style.display = '';        
}

function backCult() {
  let resetList = false;
  let cardHide ;
    
  if( index == 1){
    resetList = true;
    index = 4;
  }
  else
    index--;

  const cardShow = document.getElementById(`card-${index}`);    
  if (!resetList) 
    cardHide = document.getElementById(`card-${index + 1}`);
  else
    cardHide = document.getElementById(`card-1`);
    
  cardHide.style.display = 'none';
  cardShow.style.display = '';        
}