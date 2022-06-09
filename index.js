function coinToss() {
    let score = Number.parseInt(Math.random() * 2)
    let resultPlace = document.getElementById("toss")

    if (localStorage.clickCount) {
        localStorage.clickCount = Number(localStorage.clickCount) + 1
    } else {
        localStorage.clickCount = 0
    }
    resultPlace.innerHTML = "Loading...";
    document.getElementById("tosscount").innerHTML= localStorage.clickCount
    setTimeout(function() {
        if (score === 0) {
            resultPlace.innerHTML = "HEAD";
        } else {
            resultPlace.innerHTML = "TAIL";
        }
    }, 1500)()
}
function refresh(){
    delete localStorage.clickCount
}
if(document.getElementById("tosscount").innerHTML= localStorage.clickCount=== undefined){
	localStorage.clickCount=0
	document.getElementById("tosscount").innerHTML= localStorage.clickCount
}else {

	document.getElementById("tosscount").innerHTML= localStorage.clickCount
}