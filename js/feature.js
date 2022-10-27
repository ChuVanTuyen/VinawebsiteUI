const featureBtn = document.querySelector(".feature_btn");
featureBtn.onclick = (e) => {
  if (e.target.matches("button")) {
    const featureBtnList = featureBtn.querySelectorAll("button");
    const featureItem = document.querySelectorAll(".feature_item");
    let featureLengthBtn = featureBtnList.length,
      featureItemLength = featureItem.length;
    let event = e.target,
      content;
    for (let i = 0; i < featureLengthBtn; i++) {
      if (featureBtnList[i].classList.contains("active")) {
        featureBtnList[i].classList.remove("active");
      }
    }
    event.classList.add("active");
    if (event.name === "default") {
      for (let i = 0; i < featureItemLength; i++) {
        featureItem[i].style.position = "relative";
        featureItem[i].style.opacity = "1";
        featureItem[i].classList.remove("featureItemShow");
      }
      featureItem[0].classList.add("featureItemShow");
      setTimeout(() => {
        featureItem[0].classList.remove("featureItemShow");
      }, 300);
    } else {
      content = document.querySelector(`[name = ${event.name}_item]`);
      for (let i = 0; i < featureItemLength; i++) {
        featureItem[i].style.position = "absolute";
        featureItem[i].style.opacity = "0";
        if (featureItem[i].classList.contains("featureItemShow")) {
          featureItem[i].classList.remove("featureItemShow");
        }
        if (content === featureItem[i]) {
          featureItem[i].style.position = "relative";
          featureItem[i].style.opacity = "1";
          featureItem[i].classList.add("featureItemShow");
        }
      }
    }
  }
};
