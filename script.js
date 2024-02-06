let bol;
    if (localStorage.getItem("key") === "t") {
    bol = true;
    } else if(localStorage.getItem("key") === "f"){
    bol = false;
    }
function Lightmode() {
    
    if(bol == true){
        document.getElementById("switch").style.transform="translateX(11px)";
        document.getElementById("switch").style.backgroundColor="black";
        document.getElementById("Lightmode").style.backgroundColor="white";
        document.getElementById("body").style.backgroundColor="rgb(0, 0, 51)";
        for (let i = 0; i < 6; i++) {
            document.getElementsByTagName("article")[i].style.backgroundColor="rgb(50, 50, 50)";
            document.getElementsByTagName("article")[i].style.color="white";
        }
        for (let index = 0; index < 2; index++) {
            
            document.getElementsByTagName("h2")[index].style.color="white";
            document.getElementsByTagName("h2")[index].style.backgroundColor="rgb(50, 50, 50)";
        }
        document.getElementById("navigation").style.backgroundColor="rgb(50, 50, 50)";

        bol = false;
        localStorage.setItem("key","f");
    }else if (bol == false) {
        document.getElementById("switch").style.transform="translateX(0px)";
        document.getElementById("switch").style.backgroundColor="white";
        document.getElementById("Lightmode").style.backgroundColor="black";
        document.getElementById("body").style.backgroundColor="white";
        for (let i = 0; i < 6; i++) {
            document.getElementsByTagName("article")[i].style.backgroundColor="rgb(192, 192, 192)";
            document.getElementsByTagName("article")[i].style.color="black"
        }
        for (let index = 0; index < 2; index++) {
            
            document.getElementsByTagName("h2")[index].style.color="black"
            document.getElementsByTagName("h2")[index].style.backgroundColor="rgb(192, 192, 192)"
        }
        document.getElementById("navigation").style.backgroundColor="rgb(175, 175, 175)";
        bol = true;
        localStorage.setItem("key","t");
    }    
}

