

var text = document.createTextNode("Find local screenshot location");
var body = document.getElementById("BatchScreenshotManagement");

var container;
var a = 1;
//when click on a screenshot
body.addEventListener("click", function () {
    var output = document.createTextNode("");
    output.id = a + "output";
    a++;
    
    var horst = setInterval(function () {
        wait(1000);
        //wait for frame to open
       if (document.getElementById("modalContentFrameContainer") != null) {
           //open the frame document and add the button
           
                var i = document.getElementById("modalContentFrameContainer").childNodes.length - 1;
                container = document.getElementById("modalContentFrameContainer").childNodes[i].contentWindow.document.getElementById("ig_bottom");
            
                window.clearInterval(horst);



           ////////////
                var image = document.getElementById("modalContentFrameContainer").childNodes[0].contentWindow.document.getElementById("ig_bottom");
                var gameid;

                let matches2 = container.querySelectorAll('a');
                for(var i =0; i< matches2.length; i++){
                    if (matches2[i].href.indexOf("https://steamcommunity.com/profiles/") !== -1) {
                        userid = matches2[i].href;
                        userid = userid.replace("https://steamcommunity.com/profiles/", "");
                        var link = userid;
                        gameid = link.split("=", 2)[1];
                        userid = link.split("/", 1)[0];
                        userid = userid.substr(2);
                        userid = (Number(userid) - 561197960265728).toString();
                       
                        output.textContent = "C:\\Program Files (x86)\\Steam\\userdata\\" + userid + "\\760\\remote\\"+ gameid + "\\screenshots" ;
                        i = matches2.length;
                    }
 
                }
                document.getElementById("modalContentTitleBar").replaceChild(output, document.getElementById("modalContentTitleBar").childNodes[0]);
                document.getElementById("modalContentTitleBar").childNodes[1].style.display = "none";
                document.getElementById("modalContentTitleBar").childNodes[2].style.display = "none";



            }
          
        }, 1500);
    
    
    
});
function wait(ms) {
    var start = new Date().getTime();
    var end = start;
    while (end < start + ms) {
        end = new Date().getTime();
    }
}

