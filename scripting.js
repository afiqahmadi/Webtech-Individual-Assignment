function openweb()
{
    var web = "https://division.iium.edu.my/ief/";
    window.open(web , "_blank");
}

var webbutton = document.getElementById("webbutton");
webbutton.addEventListener("click" , openweb);


function openfb()
{
    var fb = "https://www.facebook.com/iium.endowment";
    window.open(fb , "_blank");
}

var fbbutton = document.getElementById("fbbutton");
fbbutton.addEventListener("click" , openfb);

document.getElementById("reductionform").addEventListener("submit" , function(event)
{
    event.preventDefault();
    window.location.href = "http://127.0.0.1:5500/submit.html";
});
