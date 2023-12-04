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

function formsubmit(event)
        {
            event.preventDefault();

            var name = document.getElementById("name");
            var staffid = document.getElementById("staffid");
            var kcdio = document.getElementById("kcdio");
            var contact = document.getElementById("contact");
            var email = document.getElementById("email");
            var amount = document.getElementById("amount");
            var monthstart = document.getElementById("monthstart");
            var yearstart = document.getElementById("yearstart");
            var monthend = document.getElementById("monthend");
            var yearend = document.getElementById("yearend");
            var kuliyyah = document.getElementById("kuliyyah");

            var nameval = name.value;
            var staffidval = staffid.value;
            var kcdioval = kcdio.value;
            var contactval = contact.value;
            var emailval = email.value;
            var amountval = amount.value;
            var monthstartval = monthstart.value;
            var yearstartval = yearstart.value;
            var monthendval = monthend.value;
            var yearendval = yearend.value
            var kuliyyahval = kuliyyah.value;

            if(kuliyyahval == "NULL")
            {
               <p>
               
                    "Name : " + nameval + "\n" +
                    "Staff ID : " + staffidval + "\n" +
                    "K / C / D / I / O : " + kcdioval + "\n" +
                    "Contact NO. : " + contactval + "\n" +
                    "e-mail : " + emailval + "\n" +
                    "Amount : RM " + amountval + "\n" +
                    "The above salary deduction will take effect from " + monthstartval + " " + yearstartval + " until "
                    + monthendval + " " + yearendval

                    window.location.href = ""
               </p>
            }
            else
            {
                <p>
                    "Name : " + nameval + "\n" +
                    "Staff ID : " + staffidval + "\n" +
                    "K / C / D / I / O : " + kcdioval + "\n" +
                    "Contact NO. : " + contactval + "\n" +
                    "e-mail : " + emailval + "\n" +
                    "Amount : RM " + amountval + "\n" +
                    "The above salary deduction will take effect from " + monthstartval + " " + yearstartval + " until "
                    + monthendval + " " + yearendval + "\n" +
                    "For kulliyyah of " + kuliyyahval
                </p>
            }
            
        }

        var form = document.getElementById("reductionform").formTarget = "=_self";
        form.addEventListener("submit" , formsubmit);