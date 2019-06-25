var elements = document.getElementsByClassName('progress-bar');
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