function imgSlider(slide){
    document.querySelector(".pepsi").src = slide;
    // make a slide
}

function changeColor(color){
    const sec = document.querySelector(".sec");
    sec.style.background = color;
    // this is for change the background if user click another variant
}

function menuToggle(){
    const menuToggle = document.querySelector('.menuToggle');
    const navigation = document.querySelector('.navigation')
    menuToggle.classList.toggle('active')
    navigation.classList.toggle('active')
    //this is for toggle menu
}