function startProgressBarsAnimation() {
    var elements = document.getElementsByClassName('progress-bar');
    for (var i = 0; i < elements.length; i++) {
        var elm = elements[i];
        handleText(elm, true);
        addInterval(elm);
    }
}

function stop(interval) {
    clearInterval(interval);
}

function handleText(elm, hide) {
    var titleContainerElm = elm.getElementsByClassName("title-container")[0];
    var left = 0;
    if (hide) {
        left = "-" + titleContainerElm.offsetWidth + "px";
    }
    titleContainerElm.style.left = left;
}

function addInterval(elm)
{
    var innerCloudElm = elm.getElementsByClassName('inner-cloud')[0];
    var percentage = parseFloat(elm.getAttribute('data-percentage'));
    var counter = 0;
    var interval = setInterval(function() {
        elm.style.width = percentage + "%";
        innerCloudElm.innerHTML = counter + "%";

        if (counter === parseInt(percentage)) {
            stop(interval);
            handleText(elm);
        }
        counter++;
    }, 30);
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}


