const news = document.querySelector(".new");
const newData = [
  {
    title: "Thiết kế Website BẤT ĐỘNG SẢN Giá Rẻ, Chuẩn SEO",
    description:
      "Thiết kế website Bất Động Sản chuẩn SEO ở đâu tốt? Liên hệ VinaWebsite (028) 7300 6046 hoặc sale@vinawebsite.vn để được tư vấn miễn phí nhé! VinaWebsite – Thiết kế Website BẤT ĐỘNG SẢN Giá Rẻ, Chuẩn SEO  1. Tại sao cần thiết kế website bất động sản? Sau thời khoảng thời gian đóng [...]",
    img: "../images/news_img/thiet-ke-website-bat-dong-san.jpg",
  },
  {
    title: "Thiết kế Website Thương Mại Điện Tử Giá Rẻ, Chuẩn SEO",
    description:
      "Thiết kế website Thương Mại Điện Tử chuẩn SEO ở đâu tốt? Liên hệ VinaWebsite (028) 7300 6046 hoặc sale@vinawebsite.vn để được tư vấn miễn phí nhé! Thiết kế Website Thương Mại Điện Tử Chuyên Nghiệp, Chuẩn SEO 1. Thực trạng và dự báo phát triển của Thương Mại Điện [...]",
    img: "../images/news_img/thuong-mai-dien-tu.png",
  },
  {
    title: "Thiết kế Website Nhà Hàng – Khách Sạn Chuyên Nghiệp, Chuẩn SEO",
    description:
      "Thiết kế website nhà hàng khách sạn giá rẻ ở đâu tốt? Liên hệ VinaWebsite qua 1900 6046 – (028) 7300 6046 hoặc sale@vinawebsite.vn để được tư vấn miễn phí nhé!   Thiết kế Website Nhà Hàng – Khách Sạn Chuyên Nghiệp, Chuẩn SEO   Tại sao cần thiết kế [...]",
    img: "../images/news_img/thiet-ke-website-nha-hang-khach-san-1400x560.jpg",
  },
  {
    title: "[2021] – Công Ty Thiết Kế WEBSITE Uy Tín Tại TPHCM",
    description:
      "VinaWebsite – Dịch vụ Thiết kế website uy tín tại TPHCM – Miễn phí Tên Miền, Hosting | An toàn, bảo mật | Không giới hạn băng thông | Bảo hành đầy đủ… [2021] – Công Ty Thiết Kế WEBSITE Uy Tín Tại TPHCM I. Giới thiệu về VinaHost 1. Quá trình hình [...]",
    img: "../images/news_img/thiet-ke-website-uy-tin-tai-ho-chi-minh.jpg",
  },
  {
    title: "[TOP] – 9 Lưu Ý Thiết Kế Website Chuyên Nghiệp 2021",
    description:
      "Những điểm mà bạn cần lưu ý khi lựa chọn dịch vụ thiết kế website phù hợp, tiết kiệm được nhiều thời gian và chi phí. Những điểm mà bạn cần lưu ý khi lựa chọn dịch vụ thiết kế website phù hợp, tiết kiệm được nhiều thời gian và [...]",
    img: "../images/news_img/luu-y-thiet-ke-website-2019.png",
  },
  {
    title: "[2021] Thiết Kế Website Giá Rẻ – Uy Tín – Chuẩn [SEO] | VinaHost",
    description:
      "Tổng hợp xu hướng thiết kế Website mới nhất [2021] với hơn 1000 kho giao diện được Update liên tục. Lựa chọn chúng tôi cho việc kinh doanh hiệu quả. Click Xem! [2021] Thiết Kế Website Giá Rẻ – Uy Tín – Chuẩn [SEO] I. Tại sao kinh doanh cần [...]",
    img: "../images/news_img/thiet-ke-website-uy-tin-tai-ho-chi-minh.jpg",
  },
  {
    title: "[2021] – 10 Xu Hướng Thiết Kế Website Dẫn Đầu | VinaHost.VN",
    description:
      "Mạng internet đã phát triển và thay đổi rất nhiều trong 10 năm vừa qua: chúng ta đã thấy sự thống trị của thiết bị di động, sự trình làng của AR, VR, AI, AMP và hàng loạt cái tên khác. [2021] – 10 Xu Hướng Thiết Kế Website Dẫn [...]",
    img: "../images/news_img/dieu-huong-ngon-tay-cai.png",
  },
  {
    title: "[Landing Page Là Gì] – Landing Page Khác Gì WEBSITE",
    description:
      "Thiết kế Landing Page là khái niệm quen thuộc bạn sẽ hay nghe nói đến trong lĩnh vực thiết kế web hoặc trong các Dịch vụ thiết kế website chuyên nghiệp. Và ngay cả trong hoạt động trải nghiệm Internet thường ngày bạn cũng bắt gặp rất nhiều thiết kế Landing Page cực kì đẹp [...]",
    img: "../images/news_img/landing-pages-create.jpg",
  },
  {
    title: "[CLICK] – Giải Đáp SEO là làm những công việc gì ?",
    description:
      "SEO là gì ? SEO làm những công việc nào. Có cần thiết phải SEO Website hay không. Các lợi ích của SEO, hãy đọc qua bài viết sau. Click Xem! [CLICK| – Giải Đáp SEO là làm những công việc gì SEO Là Gì ? SEO viết tắt của [...]",
    img: "../images/news_img/learn-seo-796x398-1.jpg",
  },
  {
    title: "WEBSITE Là Gì – Mục Đích Của WEBSITE | VinaWebsite.VN",
    description:
      'WEBSITE (Tạm dịch là "Trang mạng"), còn gọi là trang web, là một tập hợp các trang web con, bao gồm văn bản, hình ảnh, video, flash v.v.. WEBSITE chỉ nằm trong một tên miền hoặc tên miền phụ lưu trữ trên các máy chủ chạy online trên đường truyền World [...]',
    img: "../images/news_img/website-chuan-seo.jpg",
  },
  {
    title: "Hướng Dẫn Tối Ưu Tốc Độ WordPress | VinaWebsite.VN",
    description:
      "Để tối ưu nền tảng WordPress, bạn nên tập trung những mục sau: Tạo file robots.txt, khai báo sitemaps. Tối ưu hình ảnh – cache website. Xem nhé! Tối ưu nền tảng WordPress Để tối ưu nền tảng WordPress, bạn nên tập trung những mục sau: Tạo file robots.txt và khai báo sitemaps. [...]",
    img: "../images/news_img/Optimize-WordPress-Website.jpg",
  },
];
let newContent = '<h3 class="new_title">Tin tức <span>vinawebsite</span></h3>';
for (let i = 0; i < newData.length; i++) {
  if(i%2 === 0){
    newContent += `<div class="new_item new_itemL">
    <div class="new_item_text new_itemL_text">
      <h4>${newData[i].title}</h4>
      <p>${newData[i].description}</p>
    </div>
      <img src="${newData[i].img}" alt="">
    </div>`;
  }else{
    newContent += `<div class="new_item new_item_right">
    <img src="${newData[i].img}" alt="">
    <div class="new_item_text new_itemR_text">
      <h4>${newData[i].title}</h4>
      <p>${newData[i].description}</p>
    </div>
    </div>`;
  }
}

news.innerHTML = newContent;
const newItem = news.querySelectorAll(".new_item");
const windowHeight = window.innerHeight;
window.onscroll = () => {
  for (let i = 0; i < newItem.length; i++) {
    if(window.scrollY >= newItem[i].offsetTop + windowHeight/2){
      newItem[i].classList.add("newItemShow");
      newItem[i].style.opacity = "1";
    }
  }
  const hotline = document.querySelector(".hotline > div");
  
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


