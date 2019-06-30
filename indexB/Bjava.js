

/*function move() {
    var elem = document.getElementsByClassName("md-progress");
    var width = 10;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= 100) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
            elem.innerHTML = width * 1  + '%';
        }
    }
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
*/
$('.Count').each(function () {
    jQuery({Counter: 0}).animate({Counter: $(this).text()}, {
        duration: 1000,
        easing: 'swing',
        step: function () {
            $(this).text(Math.ceil(this.Counter));
        }
    });
});




























/*var elements = document.getElementsByClassName('progress-bar');
for (var i = 0; i < elements.length; i++) {
    addInterval(elements[i]);
}

function stop(interval) {
    clearInterval(interval);
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
        }
        counter++;
    }, 30);


}
$(function() {
    var scrollActions = {
        progressBars: false,
        runningNumbers: false
    };
    $(window).on('scroll', function (e) {
        var _this = $(this);
        var scrolledTop = _this.scrollTop();

        if (scrolledTop + _this.outerHeight() >= $("#progress_bars").offset().top
            && !scrollActions.progressBars
        ) {
            startProgressBarsAnimation();
            scrollActions.progressBars = true;
        }

        if (scrolledTop + _this.outerHeight() >= $("#running_numbers").offset().top
            && !scrollActions.runningNumbers
        ) {
            startRunningNumbersAnimation();
            scrollActions.runningNumbers = true;
        }
    })
})
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
}*/