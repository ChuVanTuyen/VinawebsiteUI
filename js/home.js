window.onscroll = () => {
  console.log(window.scrollY);
  if (window.scrollY >= 700) {
      const homeRow = document.querySelectorAll(".home_row");
      l = homeRow.length;
    for(let i = 0 ; i < l; i++){
        if(window.scrollY >= 700 + i*400){
            const homeRowItem = homeRow[i].querySelectorAll(".post_item");
            addAnimateListDelay(homeRowItem, "moveRight");
        }
    }
  }
  if (window.scrollY >= 1820) {
    const sectionWhy = document.querySelectorAll(".section_why > *");
    sectionWhy[0].classList.add("moveDown");
    sectionWhy[0].style.opacity = "1";
    sectionWhy[1].classList.add("moveUp");
    sectionWhy[1].style.opacity = "1";
    sectionWhy[2].classList.add("moveDownGrowUp");
    sectionWhy[2].style.opacity = "1";
    for (let i = 3; i < sectionWhy.length; i++) {
      setTimeout(() => {
        sectionWhy[i].classList.add("moveRight");
        sectionWhy[i].style.opacity = "1";
      }, (i - 2) * 500);
    }
  }
  if (window.scrollY >= 2700) {
    const secBannerImg = document.querySelector(".sec_banner_img img");
    secBannerImg.classList.add("moveUp");
    secBannerImg.style.opacity = "1";
  }
  if (window.scrollY >= 3140) {
    const procedureTitle = document.querySelector(".procedure_title");
    procedureTitle.classList.add("moveDown");
    procedureTitle.style.opacity = "1";
    const road = document.querySelectorAll(".procedure_road .step");
    for (let i = 0; i < road.length; i++) {
      if (i % 2 == 0 && window.scrollY >= 3420 + 250 * i) {
        const roadItem = road[i].querySelectorAll("div");
        roadItem[2].classList.add("growUp");
        roadItem[2].style.opacity = "1";
        roadItem[1].classList.add("moveLeft");
        roadItem[1].style.opacity = "1";
        roadItem[0].classList.add("moveRight");
        roadItem[0].style.opacity = "1";
      }
      if (i % 2 == 1 && window.scrollY >= 3420 + 250 * i) {
        const roadItem = road[i].querySelectorAll("div");
        roadItem[0].classList.add("growUp");
        roadItem[0].style.opacity = "1";
        roadItem[1].classList.add("moveRight");
        roadItem[1].style.opacity = "1";
        roadItem[2].classList.add("moveLeft");
        roadItem[2].style.opacity = "1";
      }
    }
    const roadDecoration = document.querySelectorAll(
      ".procedure_road .decoration"
    );
    if (window.scrollY >= 3670) {
      roadDecoration[0].classList.add("moveUp");
      roadDecoration[0].style.opacity = "1";
      setTimeout(() => {
        roadDecoration[1].classList.add("moveDown");
        roadDecoration[1].style.opacity = "1";
      }, 500);
    }
    if (window.scrollY >= 3900) {
      roadDecoration[2].classList.add("moveLeft");
      roadDecoration[2].style.opacity = "1";
    }
    if (window.scrollY >= 4425) {
      roadDecoration[3].classList.add("moveDown");
      roadDecoration[3].style.opacity = "1";
    }
  }
  if (window.scrollY >= 4700) {
    const titleReason = document.querySelector(".title_reason");
    titleReason.classList.add("moveUp");
    titleReason.style.opacity = "1";
  }
  if (window.scrollY >= 4915) {
    const reason1 = document.querySelectorAll(".reason_1 .reason_item");
    addAnimateListDelay(reason1, "moveUp", 200);
  }
  if (window.scrollY >= 5250) {
    const reason2 = document.querySelectorAll(".reason_2 .reason_item");
    addAnimateListDelay(reason2, "moveUp", 200);
  }
  if (window.scrollY >= 5700) {
    const hotline = document.querySelector(".hotline > div");
    const register = document.querySelector(".register > div");
    hotline.classList.add("moveRight");
    hotline.style.opacity = "1";
    register.classList.add("moveLeft");
    register.style.opacity = "1";
  }

  if (window.scrollY >= 6020) {
    const widgetsMenu = document.querySelector(".widgets_menu h3");
    const widgetsMenuItem = document.querySelectorAll(".widgets_menu_item");
    widgetsMenu.classList.add("moveRight");
    widgetsMenu.style.opacity = "1";
    addAnimateListDelay(widgetsMenuItem, "moveRight", 200);
  }

  if (window.scrollY >= 6300) {
    const footerInfo = document.querySelectorAll(".footer_info > *");
    addAnimateListDelay(footerInfo, "moveRight", 0);
    const footerSupport = document.querySelector(".footer_support > ul");
    footerSupport.classList.add("moveRight");
    footerSupport.style.opacity = "1";
  }
};
