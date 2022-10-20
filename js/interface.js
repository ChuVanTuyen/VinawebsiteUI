window.onscroll = () => {
  console.log(window.scrollY);
  if (window.scrollY >= 700) {
    const homeRow = document.querySelectorAll(".home_row");
    l = homeRow.length;
    for (let i = 0; i < l; i++) {
      if (window.scrollY >= 700 + i * 400) {
        const homeRowItem = homeRow[i].querySelectorAll(".post_item");
        addAnimateListDelay(homeRowItem, "moveRight");
      }
    }
  }
  const hotline = document.querySelector(".hotline > div");
  const windowHeight = window.innerHeight;
  if (window.scrollY >= hotline.offsetTop-windowHeight) {
    const register = document.querySelector(".register > div");
    hotline.classList.add("moveRight");
    hotline.style.opacity = "1";
    register.classList.add("moveLeft");
    register.style.opacity = "1";
  }

  const widgetsMenu = document.querySelector(".widgets_menu h3");
  if (window.scrollY >= widgetsMenu.offsetTop - windowHeight) {
    const widgetsMenuItem = document.querySelectorAll(".widgets_menu_item");
    widgetsMenu.classList.add("moveRight");
    widgetsMenu.style.opacity = "1";
    addAnimateListDelay(widgetsMenuItem, "moveRight", 200);
  }

  if (window.scrollY >= document.querySelector(".footer_info").offsetTop-windowHeight) {
    const footerInfo = document.querySelectorAll(".footer_info > *");
    const footerSupport = document.querySelector(".footer_support > ul");
    footerSupport.classList.add("moveRight");
    addAnimateListDelay(footerInfo, "moveRight", 0);
    footerSupport.style.opacity = "1";
  }
};

const interfaceBtnGroup = document.querySelector(".interface_btn_group");
interfaceBtnGroup.onclick = (e)=>{
  if(e.target.matches("button")){
    interfaceBtnGroup.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");
  }
}