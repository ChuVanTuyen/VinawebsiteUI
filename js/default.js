// viết js cho phần header
const headerNav = document.querySelector(".header_nav");
var scrollTop = 0;
const handleScroll = () => {
  if (window.scrollY > scrollTop && scrollTop < 80) {
    headerNav.classList.add("stuck");
  }
  if (scrollTop > window.scrollY) {
    headerNav.classList.remove("stuck");
  }
  scrollTop = window.scrollY;
};
window.addEventListener("scroll", handleScroll);

//js cho phần banner slide
const bannerMenu = document.querySelector(".slide_list");
setInterval(() => {
  let arr = [4, 0, 1, 2, 3],
    list = [];
  for (let i = 0; i < 5; i++) {
    //gán danh sách
    list.push(bannerMenu.querySelector(".banner_item" + i));
  }
  for (let i = 0; i < 5; i++) {
    list[i].classList.remove("banner_item" + i);
  }
  for (let i = 0; i < list.length; i++) {
    list[arr[i]].classList.add("banner_item" + i);
  }
}, 5000);

bannerMenu.onclick = (e) => {
  let list = [];
  for (let i = 0; i < bannerMenu.querySelectorAll(".banner_item").length; i++) {
    //khai báo danh sách
    list.push(bannerMenu.querySelector(".banner_item" + i));
  }
  let item = e.target.parentElement;
  let location,
    mid,
    difference,
    arr = [];
  let length = list.length;
  mid = (length - 1) / 2;
  for (let i = 0; i < length; i++) {
    // tìm vị trí của phần tử được click
    if (item === list[i]) {
      location = i;
    }
    arr.push(i);
  }
  difference = location - mid; // tìm khoảng cách đến trung tâm
  if (difference > 0) {
    // nêu phần tử click nằm bên phải
    for (let i = 0; i < difference; i++) {
      setTimeout(() => {
        let first = arr.shift();
        arr.push(first);
        list.forEach((item) => {
          // xóa class cũ (vị trí cũ)
          for (let j = 0; j < length; j++) {
            item.classList.remove("banner_item" + j);
          }
        });
        for (let j = 0; j < length; j++) {
          // thêm class mới
          list[arr[j]].classList.add("banner_item" + j);
        }
      }, i * 300);
    }
  } else if (difference < 0) {
    // nếu phần tử click nằm bên trái
    for (let i = 0; i < -difference; i++) {
      setTimeout(() => {
        let final = arr.pop();
        arr.unshift(final);
        list.forEach((item) => {
          for (let j = 0; j < length; j++) {
            item.classList.remove("banner_item" + j);
          }
        });
        for (let j = 0; j < length; j++) {
          list[arr[j]].classList.add("banner_item" + j);
        }
      }, i * 300);
    }
  }
};

// js cho phần flickity_viewport
const product = document.querySelector(".product");
if(product){
  const bannerButtonLeft = document.querySelector(".banner_button_left");
  const bannerButtonRight = document.querySelector(".banner_button_right");
  var productCount = 0; // khai báo vị trí ban đầu của băng chuyền dịch vụ
  bannerButtonRight.onclick = () => {
    let productList = document.querySelectorAll(".product_item");
    let productItemWidth = 20;
    if (window.innerWidth <= 768) {
      productItemWidth = 33.3333;
    }
    if (window.innerWidth <= 576) {
      productItemWidth = 50;
    }
    if (productCount >= 0) {
      product.style.transform = `translate3d(-${
        (productCount + 1) * productItemWidth
      }%,0,0)`;
      let i = productCount % 7;
      if (i === 0) {
        productList[6].style.left = `${
          7 * productItemWidth + (productCount - 1) * productItemWidth
        }%`;
      } else if (i > 0) {
        productList[i - 1].style.left = `${
          7 * productItemWidth + (productCount - 1) * productItemWidth
        }%`;
      }
    } else {
      let i = productCount % 7;
      productList[6 + i].style.left = `${(6 + productCount) * productItemWidth}%`;
      product.style.transform = `translate3d(${
        (-productCount - 1) * productItemWidth
      }%,0,0)`;
    }
    productCount++;
  };
  
  bannerButtonLeft.onclick = () => {
    let productList = document.querySelectorAll(".product_item");
    let i = productCount % 7;
    let productItemWidth = 20;
    if (window.innerWidth <= 768) {
      productItemWidth = 33.3333;
    }
    if (window.innerWidth <= 576) {
      productItemWidth = 50;
    }
    if (productCount <= 0) {
      productList[i + 6].style.left = `-${
        (-productCount + 1) * productItemWidth
      }%`;
      product.style.transform = `translate3d(${
        (-productCount + 1) * productItemWidth
      }%,0,0)`;
    } else {
      product.style.transform = `translate3d(${
        (-productCount + 1) * productItemWidth
      }%,0,0)`;
      if (i === 0) {
        productList[6].style.left = `${(productCount - 1) * productItemWidth}%`;
      }
      if (i === 6) {
        productList[i - 1].style.left = `${
          (productCount - 1) * productItemWidth
        }%`;
      }
      if (i > 1) {
        productList[i - 2].style.left = `${
          (productCount - 2) * productItemWidth
        }%`;
      }
    }
    productCount--;
  };
}

const loadedMenu = document.querySelector(".loaded_menu");
var loadedCount = 0;

window.addEventListener("resize", () => {
  // fix lỗi hiển thị flickity_viewport khi thay đổi kích thước cửa sổ hiển thị
  let productList = document.querySelectorAll(".product_item");
  let loadedList = document.querySelectorAll(".loaded_item");
  let productItemWidth = 20;
  let loadedItemWidth = 20;
  if (window.innerWidth <= 992) {
    loadedItemWidth = 33.3333;
  }
  if (window.innerWidth <= 768) {
    if(product){
      productItemWidth = 33.3333;
    }
  }
  if (window.innerWidth <= 576) {
    if(product){productItemWidth = 50;}

    loadedItemWidth = 50;
  }
  if(product){
    product.style.transform = "translate3d(0,0,0)";
    productCount = 0;
  }
  loadedMenu.style.transform = "translate3d(0,0,0)";
  loadedCount = 0;
  for (let i = 0; i < 7; i++) {
    if(product){
      productList[i].style.left = `${i * productItemWidth}%`;
    }
    loadedList[i].style.left = `${i * loadedItemWidth}%`;
  }
});

setInterval(() => {
  let loadedItemWidth = 20;
  if (window.innerWidth <= 992) {
    loadedItemWidth = 33.3333;
  }
  if (window.innerWidth <= 576) {
    loadedItemWidth = 50;
  }
  let loadedList = document.querySelectorAll(".loaded_item");
  loadedMenu.style.transform = `translate3d(-${(loadedCount + 1) * loadedItemWidth}%,0,0)`;
  let i = loadedCount % 7;
  if (i === 0) {
    loadedList[6].style.left = `${loadedItemWidth * 7 + (loadedCount - 1) * loadedItemWidth}%`;
  } else if (i > 0) {
    loadedList[i - 1].style.left = `${loadedItemWidth * 7 + (loadedCount - 1) * loadedItemWidth}%`;
  }
  loadedCount++;
}, 5000);

// responsive javascript
const headerMenuBtn = document.querySelector(".header_menu_btn");
const headerLinkClear = document.querySelector(".header_link_clear");
const headerLinkInner = headerNav.querySelector(".header_link_inner");
headerMenuBtn.onclick = () => {
  headerLinkInner.classList.add("HLI_responsive");
};

headerLinkClear.onclick = () => {
  headerLinkInner.classList.remove("HLI_responsive");
};

// hiệu ưng chung chủa web (suất hiện các element)
function addAnimateListDelay(listItem, className = "", time = 500) {
  const l = listItem.length;
  for (let i = 0; i < l; i++) {
    setTimeout(() => {
      listItem[i].classList.add(className);
      listItem[i].style.opacity = "1";
    }, i * time);
  }
}

window.onscroll = () => {
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

