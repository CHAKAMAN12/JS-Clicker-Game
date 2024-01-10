
//Varibales
let clicks = 0;
let cpc = 1;
let cursorP = 10;
let uP = 50;
let developmentMode = false;
let cps = 0;

//END (v)

//No Nan



//END (nnan)

if(developmentMode === true) {
    clicks = 1000000;
}

var audio = new Audio('gametheme.mp3');
audio.play();

function startgame() {
    document.getElementById("sBut").disabled = true;
    document.getElementById("sBut").hidden = true;
    document.getElementById("aBut").disabled = false;
    document.getElementById("mBut").disabled = false;
    document.getElementById("dBut").disabled = false;
}

function add() {
   clicks += cpc;
   document.getElementById("clickcount").innerHTML = 'Clicks: ' + clicks;
};


function sub() {
    if(clicks >= cursorP) {
        clicks-=cursorP;
        cursorP = Math.round(cursorP * 1.1);
        cps += 1;
    document.getElementById("clickcount").innerHTML = 'Clicks: ' + clicks;
    document.getElementById("cursorPriceText").innerHTML = 'Cursor Price: ' + cursorP;
    document.getElementById("cps-text").innerHTML = 'CPS: ' + cps;
    setInterval(function () {Element.innerHTML = add()}, 1000);
    } else {
        alert("Not Enough Clicks!")
    }
    };

    function dbl() {
        if(clicks >= uP) {
            clicks-=uP;
            uP = Math.round(uP * 1.1);
            document.getElementById("clickcount").innerHTML = 'Clicks: ' + clicks;
            document.getElementById("upText").innerHTML = 'Upgrade Price: ' + uP;
            cpc += 1;
        } else {
            alert("Not Enough Clicks!")
        }
    }