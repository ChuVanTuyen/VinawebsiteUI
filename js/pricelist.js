const priceQuestion = document.querySelector(".price_question");
priceQuestion.onclick = (e) => {
  if (e.target.matches("i.price_show_asw")) {
    let element = e.target.parentElement.parentElement;
    let answer = element.querySelector(".answer");
    if(!element.classList.contains("active")){
      answer.style.height = "100%";
      let height = answer.offsetHeight;
      answer.style.height = "0";
      element.classList.add("active");
      setTimeout(()=>{
        answer.style.height = `${height}px`;
      }, 1);
    }else{
      answer.style.height = "0";
      element.classList.remove("active");
    }
  }
};
