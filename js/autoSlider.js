let slideIndex = 0
carousel()

function carousel() {
    var i
    var imgList = document.getElementsByClassName("img-slideshow")
    for (i = 0; i < imgList.length; i++) {
        imgList[i].style.display = "none"
    }
    slideIndex++
    if (slideIndex > imgList.length) {slideIndex = 1}
    imgList[slideIndex - 1].style.display = "block"
    setTimeout(carousel, 2000)
}