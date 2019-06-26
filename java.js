var elements = document.getElementsByClassName('progress-bar');
for (var i = 0; i < elements.length; i++) {
    addInterval(elements[i]);
}

function stop(interval) {
    clearInterval(interval);
}

function addInterval(elm)
{
    var valueElm = elm.getElementsByClassName('value')[0];
    var percentage = parseFloat(elm.getAttribute('percentage'));
    var counter = 0;
    var interval = setInterval(function() {
        elm.style.width = percentage + "%";
        valueElm.innerHTML = counter + "%";

        if (counter === parseInt(percentage)) {
            stop(interval);
        }
        counter++;
    }, 30);


}
/*function move() {
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= 100) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
        }
    }
}
var progressBarLoaded = false;
function loadSkillsProgressBars(scrollHeight)
{
    if(!progressBarLoaded)
    {
        if(scrollHeight > 750 && scrollHeight < 2000)
        {
            var elements = document.getElementsByClassName("progress-bar-fill"),
                timeOutTime = 200;

            for(var i = 0; i < elements.length; i++)
            {
                setTimeout(showSkillsProgressBar, timeOutTime, elements[i]);
                timeOutTime += 200;

            }

            progressBarLoaded = true;
        }
    }
}
function showSkillsProgressBar(element)
{
    var percentage = element.getAttribute('data-fill-percentage');

    element.style.width = percentage + "%";

    element.getElementsByTagName("div")[0].style.visibility = "visible";
    element.getElementsByTagName("div")[0].style.opacity = "1";
    element.getElementsByTagName("span")[0].innerHTML = percentage + "%";

    element.getElementsByTagName("h6")[0].style.visibility = "visible";
    element.getElementsByTagName("h6")[0].style.opacity = "1";
    element.getElementsByTagName("h6")[0].style.left = "10px";
}*/