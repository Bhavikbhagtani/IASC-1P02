function register(){
	document.getElementById("color").innerHTML="Congratulations! Now You are a Joker";
}

function startTime() {
    var d=new Date();
    var h=d.getHours();
    var m=d.getMinutes();
    var s=d.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML = h+":"+m+":"+s;
}

function checkTime(i) {
    var j = i;
    if (i < 10) {
        j = "0" + i;
    }
    return j;
}

setInterval(function() {
    startTime();
}, 500);
